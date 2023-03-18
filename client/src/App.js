import './App.css';
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Home from './pages/Home/Home'
import Aptitude from './pages/Aptitude/Aptitude';
import Aptitude2 from './pages/Aptitude/Aptitude2';
import { useState } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [result, setResult] = useState({
    web: 0,
    bc: 0,
    ml: 0,
    iot: 0,
    cc: 0
  })


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='signup/' element={<Signup />} />
        <Route path='/aptitude' element={<Aptitude result = {result} setResult = {setResult}/>} />
        <Route path='/aptitude2' element={<Aptitude2 result = {result} setResult = {setResult}/>} />
      </Routes>
    </Router>

  );
}

export default App;
