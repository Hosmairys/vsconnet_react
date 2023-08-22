import React from 'react';
import ReactDOM from 'react-dom/client';

//componentes
import Home from "./pages/Home/";
import ListaServicos from "./pages/ListaServicos/";
import ListaDevs from './pages/ListaDevs';
import Perfil from "./pages/PerfilUsuario";
import Footer from './components/Footer';
import Header from './components/Header';
import VisualizarServico from './pages/VisualizarServico';

//estilização global
import "./index.css";

//rotas
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.Fragment> </React.Fragment>, UTILIZAR CUANDO NO TEM PAI A DIV
  // <BrowserRouter> </BrowserRouter> A app terá rotas dentro do BrowserRouter esta o Header, Home, Footer
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes> {/*indica uma lista de rotas*/}
        <Route path='/' element={<Home />} /> {/*indica o caminho do componente e o nome da rotadele*/}
        <Route path='/lista/serv' element={<ListaServicos />} />
        <Route path='lista/devs' element={<ListaDevs/>} />
        <Route path='/perfil/:idUsuario' element={<Perfil/>}/> {/*Rota com parametro, indicando o indicardor do desenvolvedor*/}
        <Route path='/visualizar/servicos/:idservicos' element={<VisualizarServico/>}/>
      </Routes>
      <Footer />
      {/* <ListaServicos /> */}
    </BrowserRouter>
  </React.StrictMode>

)