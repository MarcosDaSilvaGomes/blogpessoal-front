import React from 'react';
import './App.css';
import { Title } from './components/Title/title';

function App() {
   const nome = 'Marcos'
  return (
    <>
    <Title nome="Marcos" />
    <h1>Hello {nome}!</h1>
    <p>
      Teste de paragrafo
    </p>
    </>
    );
  }
     

export default App;
