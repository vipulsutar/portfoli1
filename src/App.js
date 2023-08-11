import React from 'react';
import './index.css';
import { Route,Routes } from 'react-router-dom';
import Home from './routes/Home';
import Project from './routes/Project';
import Contact from './routes/Contact';
import About from './routes/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Project' element={<Project />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='About' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
