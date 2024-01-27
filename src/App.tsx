import React from 'react';
import './App.css';
import Home from './Components/Home/home';
import { Route, Routes } from 'react-router-dom';
import Animation from './Pages/Animation/Animation ';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path='/' /> 
        <Route element={<Animation />} path='/animation' /> 
      </Routes>
    </div>
  );
}

export default App;
