import React from "react";
import icon1 from '../img/editar.png'
import '../css/style1.css'

const Card = () => {
    return (
        <div className="areacard">
            <div className="row row1 mb-4">
            <div className="col-sm-1 col1">
                <img src={icon1} alt="globo" />
            </div>
            <div className="col-sm-9 mt-2 ">
                <div className="row mt-3">
                    <div className="col-sm-12">
                        <h6>Arvensis</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, maxime.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-2 m-0 dr">
                <div className="row m-0 mt-1">
                    <div className="col-sm-12 dr  m-2">
                        <a href="/Modificarproduto"><button className="botão">Editar</button></a>
                    </div>
                    <div className="col-sm-12 dr m-2">
                        <a href="#"><button className="botão">Desativar</button></a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    )
}
export default Card