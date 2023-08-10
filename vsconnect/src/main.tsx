import React from 'react';
import ReactDOM from 'react-dom/client';

//componentes
import Home from "./pages/Home/";
import ListaServicos from "./pages/ListaServicos/";
import Footer from './components/Footer';
import Header from './components/Header';

//estilização global
import "./index.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Home />
    <Footer/>
    {/* <ListaServicos /> */}
  </React.StrictMode>,
)
