import React, {useState} from 'react'

const Search = (props) => {

    const [info, setInfo] = useState({
        type: "planets",
        id: ""
    })

    const submitForm = e => {
        e.preventDefault();
        if (info.id){
            props.getInfo(info)
        } else {console.log('please input variable')}
        setInfo({
            type: "planets",
            id: ""
        })
    }

    const handleChange = e =>{
        e.preventDefault();
        const {name, value} = e.target;
        setInfo(currentData => ({...currentData, [name]:value}))
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <label>Search for: </label>
                <select name='type' onChange={handleChange}>
                    <option value='planets' selected>Planets</option>
                    <option value='people'>People</option>
                    <option value='starships'>Starships</option>
                </select>
                <label>ID:</label>
                <input type="text" onChange={handleChange} name='id' value={info.id}/>
                <button>Search</button>
            </form>
        </div>
    )
}

export default Search