import './App.css';
import Display from './components/Display';
import Error from './components/Error';
import Search from './components/Search';
import {Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Search />

      <Routes>
        <Route path='/:item/:index/' element={<Display />} />
        <Route path='/error' element={<Error/>} />
      </Routes>
    </div>
  );
}

export default App;
