import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router";

const Display = () => {
    const [info, setInfo] = useState({})
    const [homeworld, setHomeworld] = useState({
        name: "",
        link: ""
    })
    const navigate = useNavigate();

    const {item, index} = useParams();
    const getSWInfo = () => {
        axios.get(`https://swapi.dev/api/${item}/${index}`).then(response => {
            // console.log(response)
            return response;
        }).then(response => {
            setInfo(response.data)
            if (response.data.homeworld){checkHomeworld(response.data.homeworld)}
        }).catch(err => {
            console.log(err)
            navigate('/error')
        })
    }

    const checkHomeworld = (world) => {
        axios.get(world).then(response => {
            // console.log(response.data.name)
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
            <h1>{info.name}</h1>
            {info.mass ?
                <>
                    <p>Height: {info.height} </p>
                    <p>Mass: {info.mass} </p>
                    <p>Hair Color: {info.hair_color} </p>
                    <p>Skin Color: {info.skin_color} </p>
                    <Link to={`${homeworld.link}`}>Homeworld: {homeworld.name}</Link>
                    <br/>
                </>
            :info.terrain?
                <>
                    <p>Climate: {info.climate} </p>
                    <p>Terrain: {info.terrain} </p>
                    <p>Surface Water: {info.surface_water > 0 ? 'true' : 'false'} </p>
                    <p>Population: {info.population} </p>
                </>
            :info.model?
                <>
                    <p>Model: {info.model} </p>
                    <p>Manufacturer: {info.manufacturer} </p>
                    <p>Starship Class: {info.starship_class} </p>
                    <p>Cost in Credits: {info.cost_in_credits} </p>
                </>
            :<></>
            }
            <Link to={'/'}>Go Home</Link>
        </div>
    )
}

export default Display