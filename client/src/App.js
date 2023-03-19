import './App.css';
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Home from './pages/Home/Home'
import Aptitude from './pages/Aptitude/Aptitude';
import Aptitude2 from './pages/Aptitude/Aptitude2';
import Web from './pages/Web/Web'
import Ml from './pages/ML/Ml';
import { useState } from 'react';
import Result from './pages/Result/Result';
import Bc from './pages/Bc/Bc'
import About from './pages/About/About';

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
        <Route path='/about' element={<About/>}/>
        <Route path='/aptitude' element={<Aptitude result = {result} setResult = {setResult}/>}/>
        <Route path='/aptitude2' element={<Aptitude2 result = {result} setResult = {setResult}/>} />
        <Route path = '/result' element={<Result result = {result} /> } />
        <Route path='/web' element={<Web />} />
        <Route path='/ml' element={<Ml />} />
        <Route path='/bc' element={<Bc />} />
        <Route path='/web' element={<Web />} />
        <Route path='/web' element={<Web />} />
      </Routes>
    </Router>

  );
}

export default App;
