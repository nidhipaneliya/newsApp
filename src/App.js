import './App.css';

import React, {useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App =()=> {
 const pagesize=15
 const apiKey=process.env.REACT_APP_NEWS_API
 const [progress, setProgress] = useState(0)

    
    return (
     
      <div>
  <Router>
  
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
        
  <Routes>
   <Route exact path="/" element ={<News apiKey={apiKey} setProgress={setProgress}   key="general" pagesize = {pagesize}  category="general"/>}/>
   
   <Route exact path="/entertainment" element ={<News apiKey={apiKey} setProgress={setProgress}   key="entertainment" pagesize = {pagesize}  category="entertainment"/>}/>
   <Route exact path="/health" element ={<News apiKey={apiKey} setProgress={setProgress}   key="health" pagesize = {pagesize}  category="health"/>}/>
   <Route exact path="/science" element ={<News apiKey={apiKey} setProgress={setProgress}   key="science" pagesize = {pagesize}  category="science"/>}/>
   <Route exact path="/sports" element ={<News apiKey={apiKey} setProgress={setProgress}   key="sports" pagesize = {pagesize}  category="sports"/>}/>
   <Route exact path="/technology" element ={<News apiKey={apiKey} setProgress={setProgress}   key="technology" pagesize = {pagesize}  category="technology"/>}/>
         
         
   </Routes>
 </Router>
      </div>
    )
  
}
export default App;
