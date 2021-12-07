import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Inicio from './routes/Inicio';
import Formulario from './routes/Formulario';
import Quien from './routes/Quien';
import Tabla from './routes/Tabla';
import Noencontrada from './routes/Noencontrada'


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element ={<App/>}>
        <Route index element={<Inicio/>}></Route>
        <Route path='/formulario' element={<Formulario/>}></Route>
        <Route path='/tabla' element={<Tabla/>}></Route>
        <Route path='/quien' element={<Quien/>}></Route>
        <Route path='*' element={<Inicio/>}></Route>
        </Route>
    </Routes>
    
  </BrowserRouter>,
  document.getElementById('root')

);


