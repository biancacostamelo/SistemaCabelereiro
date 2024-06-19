import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Sidebar from './componentes/sideBar';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import Cadastrodefuncionario from './paginas/cadastroDeFuncionário.jsx'
import Cadastrodeproduto from './paginas/cadastroDeProdutos.jsx'
import Modificarproduto from './paginas/modificarProduto2.jsx'
import Modificarfuncionario from './paginas/modificarFuncionario.jsx';
import Cardproduto from './paginas/card.jsx';
import Cardfuncionario from './componentes/cardfuncionario.jsx'

function App() {
  return (
    <>
    <Router>
      <Sidebar/>
      <Switch>
        <Route exact path ='/Cadastrodefuncionario'>
          <Cadastrodefuncionario/>
        </Route>
        <Route path ='/Cadastrodeproduto'>
          <Cadastrodeproduto/>
        </Route>
        <Route path ='/Modificarproduto'>
          <Modificarproduto/>
        </Route>
        <Route path ='/Modificarfuncionario'>
          <Modificarfuncionario/>
        </Route>
        <Route path ='/Cardproduto'>
          <Cardproduto/>
        </Route>
        <Route path ='/Cardfuncionario'>
          <Cardfuncionario/>
        </Route>
      </Switch>  
    </Router>
    
    </>
  );
}

export default App;
