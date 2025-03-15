import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyRoutes from './config/MyRoutes'

import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastContainer/>
    
    
    <MyRoutes/>
  </StrictMode>,
)
