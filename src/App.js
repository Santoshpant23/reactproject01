// import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [color, setcolor] = useState("light");
  const [message, setmessage] = useState('enable');
  const [textStyle, settextStyle] = useState({
    color: 'black',
  })
  const handlemessage = () => {
    if (color === 'light') {
      setcolor('dark');
      setmessage('Disable')
      document.body.style.backgroundColor = '#1f2ef2';
      settextStyle({
        color: 'white',
      })
      document.title = "Dark Mode";
      // setInterval(() => {
      //   document.title = "click here";

      // }, 1800);
      // setInterval(() => {
      //   document.title = "click me";

      // }, 1000);
    }
    else {
      setcolor('light');
      setmessage('Enable');
      document.body.style.backgroundColor = 'white';
      document.title = "Light Mode";
      // setInterval(() => {
      //   document.title = "click here";

      // }, 1800);
      // setInterval(() => {
      //   document.title = "click me";

      // }, 1000);

      settextStyle({
        color: 'black',
      })

    }
  }



  return (
    <>
      <Router>
        <Navbar title="TextUtils" nameOne="Home" color={color} message={message} handlemessage={handlemessage} />
        <div className="container">
          <Switch>
            <Route path="/about">
              <About />

            </Route>
            <Route path="/">
              <TextForm message="Enter the text to analyze below" textStyle={
                textStyle} />

            </Route>
          </Switch>
          {/* <About /> */}
        </div>

      </Router>
    </>
  );
}

export default App;
