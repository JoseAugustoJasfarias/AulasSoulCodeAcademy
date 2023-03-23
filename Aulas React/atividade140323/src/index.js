import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { ListaProduto } from './components/ListaProdutos/ListaProdutos';
import { Produto } from './components/Produto/Produto';
import './index.css';

import reportWebVitals from './reportWebVitals';

//Seleciona a div na pagina
const rootElement = document.getElementById('root');

//A div root será a base da aplicação
const root = createRoot(rootElement);

//Inserir o conteúdo da página

root.render(
  <>
    <section className='Header'>
    <h1>ListaProduto</h1>
    </section>

    <ListaProduto/>
  </>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
