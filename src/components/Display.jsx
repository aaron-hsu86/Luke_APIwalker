import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router";

const Display = () => {
    // main info:
    const [info, setInfo] = useState({})
    // persons homeworld info
    const [homeworld, setHomeworld] = useState({
        name: "",
        link: ""
    })
    const navigate = useNavigate();

    const {item, index} = useParams();
    const getSWInfo = () => {
        console.log(`item: ${item}, index: ${index}`)
        axios.get(`https://swapi.dev/api/${item}/${index}`).then(response => {
            setInfo(response.data)
            if (item == "people"){checkHomeworld(response.data.homeworld)}
        }).catch(err => {
            console.log(err)
            navigate('/error')
        })
    }

    const checkHomeworld = (world) => {
        axios.get(world).then(response => {
            setHomeworld({
                name: response.data.name,
                link: response.data.url.substring(21)
            })
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() =>{
        getSWInfo()
    }, [item, index])

    return (
        <div>
            {item == "people" ?
                <>
                    <h1>{info.name}</h1>
                    <p>Height: {info.height} </p>
                    <p>Mass: {info.mass} </p>
                    <p>Hair Color: {info.hair_color} </p>
                    <p>Skin Color: {info.skin_color} </p>
                    <Link to={`${homeworld.link}`}>Homeworld: {homeworld.name}</Link>
                    <br/>
                </>
            :item=="planets"?
                <>
                    <h1>{info.name}</h1>
                    <p>Climate: {info.climate} </p>
                    <p>Terrain: {info.terrain} </p>
                    <p>Surface Water: {info.surface_water > 0 ? 'true' : 'false'} </p>
                    <p>Population: {info.population} </p>
                </>
            :item=="starships"?
                <>
                    <h1>{info.name}</h1>
                    <p>Model: {info.model} </p>
                    <p>Manufacturer: {info.manufacturer} </p>
                    <p>Starship Class: {info.starship_class} </p>
                    <p>Cost in Credits: {info.cost_in_credits} </p>
                </>
            :<></>
            }
            <Link to={'/'}>Clear</Link>
        </div>
    )
}

export default Display