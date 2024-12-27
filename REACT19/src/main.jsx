import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Profile from './components/Profile'
import App from './App.jsx'
import './index.css';
// import Practice from './assets/practice.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />


  {/* <Profile/> */}
    {/* <Practice/> */}
  </StrictMode>,
)
