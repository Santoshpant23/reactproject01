// import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  return (
    <>
      <Navbar title="Navbar2" nameOne="About Us" />
      <div className="container">
        <TextForm message="Enter the text to analyze below" />
        <About />
      </div>


    </>
  );
}

export default App;
