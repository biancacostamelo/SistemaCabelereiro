import React from "react"

const Modificarproduto = () => {
    return (
    <div className="campo">
        <div className="div p-5">
            <div className="row p-4 mb-4">
                <div className="col-sm-12 r mc">
                    <h3>MODIFICAR PRODUTO</h3>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm-6 r">
                    <label for="nomeCompleto">material</label>
                    <input type="number" />
                </div>
                <div className="col-sm-3 r">
                    <label for="nomeCompleto">PLU</label>
                    <input type="text" />
                </div>
                <div className="col-sm-3 r">
                    <label for="nomeCompleto">UMB</label>
                    <input type="text" />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm-3 r">
                    <label for="nomeCompleto">preço unitário</label>
                    <input type="email" />
                </div>
                <div className="col-sm-3 r">
                    <label for="nomeCompleto">marca</label>
                    <input type="text" />
                </div>
                <div className="col-sm-6 r">
                    <label for="nomeCompleto">grupo do produto</label>
                    <input type="text" />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm-3 r">
                    <label for="nomeCompleto">estoque</label>
                    <input type="number" />
                </div>
            </div>
            <div className="mc">
                <button class="botão m-4">MODIFICAR</button>
            </div>
        </div>
    </div>
)
}
export default Modificarproduto