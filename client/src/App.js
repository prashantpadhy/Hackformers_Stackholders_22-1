import './App.css';
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Home from './pages/Home/Home'
import Aptitude from './pages/Aptitude/Aptitude';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='signup/' element={<Signup />} />
      <Route path='/aptitude' element={<Aptitude />} />
    </Routes>
   </Router>

  );
}

export default App;
