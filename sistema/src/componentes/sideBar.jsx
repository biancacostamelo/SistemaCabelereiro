import React from "react";
import '../css/style.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Sidebar = () => {
    return (
        <div id="viewport">
            <div id="sidebar">
                <header>
                    <a href="#">Sistema</a>
                </header>
                <ul className="menu">
                    <div className="areaMenu p-3" >
                        <li>
                            <Link to='/Cadastrodefuncionario'>Cadastrar Funcionário</Link>
                        </li>
                    </div>
                    <div className="areaMenu p-3" >
                        <li>
                            <Link to='/Modificarfuncionario'>Modificar Funcionário</Link>
                        </li>
                    </div>
                    <div className="areaMenu p-3" >
                        <li>
                            <Link to='/Cadastrodeproduto'>Cadastrar Produto</Link>
                        </li>
                    </div>
                    <div className="areaMenu p-3" >
                        <li>
                            <Link to='/Modificarproduto'>Modificar Produto</Link>
                        </li>
                    </div>

                    <div className="areaMenu p-3" >
                        <li>
                            <a href="#">Dashboard</a>
                        </li>
                    </div>
                </ul>
                <div className="row login">
                    <div className="col-sm-12">
                        <div className="loginadm">
                            <h5 className="m-1 fb">ADM</h5>
                            <button className="botão m-1">DESLOGAR</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar