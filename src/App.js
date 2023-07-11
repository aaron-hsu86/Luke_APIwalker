import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Search from './components/Search';
import Display from './components/Display';
import Error from './components/Error';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';

function App() {

  const [starWarsInfo, setSWInfo] = useState({})
  const navigate = useNavigate();

  const saveInfo = (info) => {
    setSWInfo(info)
    const {type, id} = info;
    navigate(`/${type}/${id}/`)
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Search getInfo={saveInfo} />} />
        <Route path='/:item/:index/' element={<Display info={starWarsInfo} />} />
        <Route path='/error' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
