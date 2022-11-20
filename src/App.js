

import './App.css';

import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import About from './components/About';
import React,{useState} from 'react';
import Alert from './components/Alert';

/*import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";*/
function App() {
  const[mode, setMode] = useState('light');
  /*const [alert, setAlert]=useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      message:message,
      type:type
    })
  }*/
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.background='#042743';
      /*showAlert("Dark mode has been enabled","Succus");*/
      document.title='TextUtiles - Dark Mode';
    }
     else{
      setMode('light');
      document.body.style.background='black';
      /*showAlert("Light mode has been enabled","Succus");*/
      document.title='TextUtiles - Light Mode';
    }
  }
  return (
    <>
   
        {/* <Router> 
        <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode}/>
         <div className="container my-3">
         <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextFrom heading="Enter the text to analyze"mode={mode}/> 
          </Route>
        </Switch>
  </Router>*/}
   <Navbar title="TextUtiles" mode={mode} toggleMode={toggleMode}/>
         <div className="container my-3"></div>
         <TextFrom heading="Enter the text to analyze"mode={mode}/>
         
        
       
         

         
    </>
         

         
         

  );
}

export default App;
