import React from "react"

const Cadastrodefuncionario = () => {
    return (
    <div className="campo">
        <div className="div p-5">
            <div className="row p-4 mb-4">
                <div className="col-sm-12 r mc">
                    <h3>CADASTRO DE FUNCIONÁRIO</h3>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm-6 r">
                    <label for="nomeCompleto">nome completo</label>
                    <input type="text"/>
                </div>
                <div className="col-sm-3 r">
                    <label for="nomeCompleto">chapa</label>
                    <input type="text"/>
                </div>
                <div className="col-sm-3 r">
                    <label for="nomeCompleto">data nascimento</label>
                    <input type="date"/>
                </div>
            </div>
            <div className="row mb-2">
                <div class="col-sm-3 r">
                    <label for="nomeCom/pleto">telefone</label>
                    <input type="text" />
                </div>
                <div className="col-sm-3 r">
                    <label for="nomeCompleto">area</label>
                    <input type="text" />
                </div>
                <div className="col-sm-6 r">
                    <div className="row">
                        <label for="nomeCompleto">sexo</label>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <input type="radio" id="radio"/>
                            <label for="radio">Feminino</label>
                            <input type="radio" id="radio"/>
                            <label for="radio">Masculino</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm-6 r">
                    <label for="nomeCompleto">e-mail</label>
                    <input type="email" />
                </div>
                <div className="col-sm-3 r">
                    <label for="nomeCompleto">estado civíl</label>
                    <input type="text" />
                </div>
                <div className="col-sm-3 r">
                    <label for="nomeCompleto">nacionalidade</label>
                    <input type="text"/>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm-6 r">
                    <label for="nomeCompleto">CPF</label>
                    <input type="text" />
                </div>
                <div class="col-sm-3 r">
                    <label for="nomeCompleto">RG</label>
                    <input type="text"/>
                </div>
                <div className="col-sm-3 r">
                    <label for="nomeCompleto">orgão emissor</label>
                    <input type="text"/>
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm-10 r">
                    <label for="nomeCompleto">endereço</label>
                    <input type="text" />
                </div>
                <div className="col-sm-2 r">
                    <label for="nomeCompleto">numero</label>
                    <input type="text" />
                </div>
            </div>
            <div className="row mb-2">
                <div className="col-sm-10 r">
                    <label for="nomeCompleto">bairro</label>
                    <input type="text"/>
                </div>
                <div class="col-sm-2 r">
                    <label for="nomeCompleto">estado</label>
                    <input type="text"/>
                </div>
            </div>
            <div className="mc">
                <button className="botão2 m-4">CADASTRAR</button>
            </div>
        </div>
    </div>
)
}
export default Cadastrodefuncionario