import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Explore from './components/Explore';
import Login from './components/Login';
import Profile from './components/Profile';
import Goal from './components/Goal';
import StudyMaterial from './components/StudyMaterial';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

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
          <Route exact path="/login" element={<Login Task='logIn'/>} />
          <Route exact path="/profile" element={<Profile username='Aman Gupta' emailid='techbugaman@gmail.com'/>} />
          <Route exact path="/goal" element={<Goal title="Competitive Programming"/>} />
          <Route exact path="/signup" element={<Login Task='signup'/>} />
          <Route exact path="/forgetPassword" element={<Login Task='forgetPassword'/>} />
          <Route exact path="/resetPassword/:id" element={<Login Task='resetPassword'/>}/>
          <Route exact path="/studymaterial" element={<StudyMaterial Title ={sub}/>} />
          <Route exact path="/about" element={<About />} />
        </Routes>
        <Footer changesubject={subject}/>
      </BrowserRouter>
    </>
  );
}

export default App;
