import Home from './navigations/Home';
import Skills from './navigations/Skills';
import Project from './navigations/Project';

import {Route, BrowserRouter, Routes} from "react-router-dom";
import React from 'react';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Skills" element={<Skills/>}/>
      <Route path="/Project" element={<Project/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
