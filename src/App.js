
import './App.css';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Home from './pages/Home.js';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import {Link} from 'react-router-dom'
// import { userContextProvider } from '../context/userContext.js';

axios.defaults.baseURL="https://backend-kcvi.onrender.com"
axios.defaults.withCredentials=true
function App() {
  return (
    <>
      <Router>
        // <nav style={navStyle}>
        //     <Link to="/Home" style={linkStyle}>Home</Link>
        //     <Link to="/" style={linkStyle}>Login</Link>
        //     <Link to="/Register" style={linkStyle}>Register</Link>
        // </nav>
        // <Toaster position='top-center' toastOptions={{duration:2000}}></Toaster>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/Register" element={<Register />}></Route>
          <Route exact path="/Home" element={<Home />}></Route>
        </Routes>
      </Router>
      
    </>
  );
}
// const navStyle = {
//   background: '#333',
//   color: '#fff',
//   display: 'flex',
//   justifyContent: 'space-around',
//   padding: '10px',
// };

// const linkStyle = {
//   color: '#fff',
//   textDecoration: 'none',
//   padding: '8px 20px',
//   border: 'none',
//   borderRadius: '5px',
//   cursor: 'pointer',
//   textAlign: 'center',
//   transition: 'background-color 0.3s ease',
//   textTransform: 'uppercase',
// };

export default App;
