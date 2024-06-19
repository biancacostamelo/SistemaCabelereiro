import React from "react"
import '../css/style1.css'
import Homem from '../img/homem.jpg'
import Mulher from '../img/mulher.jpg'
import Mulher2 from '../img/mulher2.jpg'

const Cardfuncionario = () => {
    return (
        <div className="areacard">
            <div className="row pt-4 pb-4">
                <div className="col-sm-6">
                    <h3>Fucionários</h3>
                </div>
                <div className="col-sm-6">

                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 row6">
                    <p className=" m-0">Filtro:</p>
                    <input className="ml-2" type="text" placeholder="Nome" />
                    <button className="botão4 m-2">Função</button>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-3 card1 meio m-4">
                    <img className="imgcard" src={Homem} alt="" />
                    <p>Leandro</p>
                    <p className="fc"> Lorem ipsum dolor sit amet.</p>
                    <p className="botão4 text-center">Cabelereiro</p>
                    <hr/>
                    <a href="/Modificarfuncionario"><button className="botão">modificar</button></a>
                </div>
                <div className="col-sm-3 card1 meio m-4">
                    <img className="imgcard" src={Mulher} alt="" />
                    <p>Maria</p>
                    <p className="fc">Lorem ipsum dolor sit amet.</p>
                    <p className="botão4 text-center">Manicure</p>
                    <hr/>
                    <a href="/Modificarfuncionario"><button className="botão">modificar</button></a>
                </div>
                <div className="col-sm-3 card1 meio m-4">
                    <img className="imgcard mb-3" src={Mulher2} alt="" />
                    <p>Rebeca</p>
                    <p className="fc">Lorem ipsum dolor sit amet.</p>
                    <p className="botão4 text-center">Pedicure</p>
                    <hr/>
                    <a href="/Modificarfuncionario"><button className="botão">modificar</button></a>
                </div>
            </div>
        </div>

    )
}
export default Cardfuncionario