import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [info, setInfo] = useState({
        type: "planets",
        id: ""
    })

    const navigate = useNavigate();

    const submitForm = () => {
        const { type, id } = info;
        navigate(`/${type}/${id}/`)
        setInfo({
            type: info.type,
            id: ""
        })
    }

    const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        setInfo(currentData => ({ ...currentData, [name]: value }))
    }

    return (
        <>
            <label>Search for: </label>
            <select name='type' onChange={handleChange}>
                <option value='planets' selected>Planets</option>
                <option value='people'>People</option>
                <option value='starships'>Starships</option>
            </select>
            <label>ID:</label>
            <input type="text" onChange={handleChange} name='id' value={info.id} />
            <button onClick={submitForm}>Search</button>
        </>
    )
}

export default Search