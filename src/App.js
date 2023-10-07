import './App.css';
import React, { useState} from 'react'
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'


import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  
  const [mode , setMode ]= useState('light');
  const handleMode = ()=>{
    if(mode === 'light'){setMode('dark');
    document.title = 'TextUtils-Dark Mode';
  
  document.body.style.backgroundColor = '#042743';
}
    else {setMode('light');
    document.title = 'TextUtils-Li ght Mode';
    document.body.style.backgroundColor = 'white';
    
  }
  }
  // const handlegrMode = ()=>{
  //   if(grmode=='light'){
  //     setGrMode('green');
  //     document.body.style.backgroundColor = 'green';
  //   }else {
  //     setGrMode('light');
  //     document.body.style.backgroundColor = 'white';
  //   }
  // }
  return (
    
    <Router>
   <>
   
<Navbar title="TextUtils" mode={mode} handleMode={handleMode}  />
<div className="container my-3">
<Routes>
        <Route exact path='/' 
      element={<TextForm heading="Enter the text to analyze" mode={mode} />}
      />

      <Route exact path='/about'
      element={<About mode={mode}  />}
      />
</Routes>
</div>

  
</>
</Router>
  );
}

export default App;
