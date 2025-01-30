import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// src/index.js or src/index.tsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import './index.css'
import App from './App.jsx'
import Login from '../Login.jsx';
import Contact from '../Contact.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    {/* <Login/> */}
    <Contact/>
  </StrictMode>,
)
