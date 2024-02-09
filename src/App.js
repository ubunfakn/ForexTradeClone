import logo from './logo.svg';
import './App.css';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/ForexTradeClone" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
