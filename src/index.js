import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Contenido from './components/Contenido';
import Boton_comprar from './components/Boton_comprar';
import ItemCount from './components/ItemCount';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <Contenido />
    <ItemCount stock={6} />
    <Boton_comprar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
