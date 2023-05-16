
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import React from 'react'
import Add from './components/Add';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      {/*<Home/>*/}
      <NavBar/>
      <Routes>
      <Route path ="/" element={[]}></Route>
        <Route path ="/Home" element={<Home/>}></Route>
        <Route path ="/Add" element={<Add/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
