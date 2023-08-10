import React from 'react'
import ReactDOM from 'react-dom/client'
// Componetes
import Home from "./pages/Home/"

//utilizacao global
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)
