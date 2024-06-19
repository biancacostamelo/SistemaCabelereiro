import React from "react"
import '../css/style1.css'
import Card from "../componentes/cardproduto1.jsx"

const Cardproduto = () => {
    return (
       <>
            <div className="areacard">
                <div className="row pt-4 pb-4">
                    <div className="col-sm-6">
                        <h3>Produtos</h3>
                    </div>
                    <div className="col-sm-6">
                        
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 row6">
                        <p className=" m-0">Filtro:</p>
                        <input className="ml-2" type="text" placeholder="Nome"/>
                        <button className="botão4 m-2">Categoria</button>
                        <button className="botão4 m-2">Estado</button>
                    </div>
                </div>
            </div>
            <Card/>    
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>   
       </>
    )
}
export default Cardproduto

