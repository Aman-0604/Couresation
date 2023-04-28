import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Explore from './components/Explore';
import Login from './components/Login';
import Profile from './components/Profile';
import Goal from './components/Goal';
import StudyMaterial from './components/StudyMaterial';
import About from './components/About';
import Meet from './components/Meet';
import Class from './components/Class'
import StudyMaterialState from './context/studymaterial/StudyMaterialState';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    // all under JSX fragment(<> & </>) as we need to pass only one element in the return();
    <>
      <StudyMaterialState>
        <BrowserRouter>
          <Navbar Page='Not_Home' />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/explore" element={<Explore />} />
            <Route exact path="/login" element={<Login Task='logIn' />} />
            <Route exact path="/profile" element={<Profile username='Aman Gupta' emailid='aman@gmail.com' />} />
            <Route exact path="/goal" element={<Goal title="Competitive Programming" />} />
            <Route exact path="/signup" element={<Login Task='signup' />} />
            <Route exact path="/forgetPassword" element={<Login Task='forgetPassword' />} />
            <Route exact path="/resetPassword/:id" element={<Login Task='resetPassword' />} />
            <Route exact path="/studymaterial/:subject" element={<StudyMaterial />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/meet" element={<Meet />} />
            <Route exact path="/class" element={<Class />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </StudyMaterialState>
    </>
  );
}

export default App;
