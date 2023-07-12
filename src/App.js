import './App.css';
import { useState } from 'react';
import Display from './components/Display';
import Error from './components/Error';
import {Routes, Route, useNavigate} from 'react-router-dom';

function App() {

  const [info, setInfo] = useState({
    type: "planets",
    id: ""
  })

  const navigate = useNavigate();

  const submitForm = () => {
    const {type, id} = info;
    navigate(`/${type}/${id}`)
  }
  
  const handleChange = e =>{
    e.preventDefault();
    const {name, value} = e.target;
    setInfo(currentData => ({...currentData, [name]:value}))
  }

  return (
    <div className="App">
      <>
          <label>Search for: </label>
          <select name='type' onChange={handleChange}>
              <option value='planets' selected>Planets</option>
              <option value='people'>People</option>
              <option value='starships'>Starships</option>
          </select>
          <label>ID:</label>
          <input type="text" onChange={handleChange} name='id' value={info.id}/>
          <button onClick={submitForm}>Search</button>
      </>

      <Routes>
        <Route path='/:item/:index' element={<Display />} />
        <Route path='/error' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
