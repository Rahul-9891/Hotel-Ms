import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Foam from './Components/Foam'; 
import MainDashbord from './Components/MainDashbord';
import Navbar from './Components/Navbar';


function App() {


  return (

    <div className="App">
     
    <Router>
     
      <Routes>
      {/* <Navbar /> */}
      <Route path="/" element={<MainDashbord />}/>
      <Route path="/Login" element={<Foam />}/>
      
   </Routes>
   </Router>
     </div>
  ); 
}

export default App;
