import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Explore from './components/Explore';
import Login from './components/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import StudyMaterial from './components/StudyMaterial';

function App() {
  const [sub, setsub] = useState("DSA");
  function subject(a){
    setsub(a);
  }
  return (
    // all under JSX fragment(<> & </>) as we need to pass only one element in the return();
    <>
      <BrowserRouter>
        <Navbar Page='Not_Home'/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Login Task='signup'/>} />
          <Route exact path="/studymaterial" element={<StudyMaterial Title ={sub}/>} />
          {/* <Route exact path="/about" element={<About />} />
          <Route exact path="/leaderboard" element={<Leaderboard />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/signup" element={<Signup />} /> */}
        </Routes>
        <Footer changesubject={subject}/>
      </BrowserRouter>
    </>
  );
}

export default App;
