import React from "react"

const Modificarfuncionario = () => {
    return (
        <>
            <div class="campo">
                <div class="div p-5">
                    <div class="row p-4 mb-4">
                        <div class="col-sm-12 r mc">
                            <h3>MODIFICAR FUNCIONÁRIO</h3>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-sm-6 r">
                            <label for="nomeCompleto">nome completo</label>
                            <input type="text" />
                        </div>
                        <div class="col-sm-3 r">
                            <label for="nomeCompleto">chapa</label>
                            <input type="text" />
                        </div>
                        <div class="col-sm-3 r">
                            <label for="nomeCompleto">data nascimento</label>
                            <input type="date" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-sm-3 r">
                            <label for="nomeCompleto">telefone</label>
                            <input type="text" />
                        </div>
                        <div class="col-sm-3 r">
                            <label for="nomeCompleto">area</label>
                            <input type="text" />
                        </div>
                        <div class="col-sm-6 r">
                            <div class="row">
                                <label for="nomeCompleto">sexo</label>
                            </div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <input type="radio" id="radio" />
                                    <label for="radio">Feminino</label>
                                    <input type="radio" id="radio" />
                                    <label for="radio">Masculino</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-sm-6 r">
                            <label for="nomeCompleto">e-mail</label>
                            <input type="email" />
                        </div>
                        <div class="col-sm-3 r">
                            <label for="nomeCompleto">estado civíl</label>
                            <input type="text" />
                        </div>
                        <div class="col-sm-3 r">
                            <label for="nomeCompleto">nacionalidade</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-sm-6 r">
                            <label for="nomeCompleto">CPF</label>
                            <input type="text" />
                        </div>
                        <div class="col-sm-3 r">
                            <label for="nomeCompleto">RG</label>
                            <input type="text" />
                        </div>
                        <div class="col-sm-3 r">
                            <label for="nomeCompleto">orgão emissor</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-sm-10 r">
                            <label for="nomeCompleto">endereço</label>
                            <input type="text" />
                        </div>
                        <div class="col-sm-2 r">
                            <label for="nomeCompleto">numero</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div class="row mb-2">
                        <div class="col-sm-10 r">
                            <label for="nomeCompleto">bairro</label>
                            <input type="text" />
                        </div>
                        <div class="col-sm-2 r">
                            <label for="nomeCompleto">estado</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div class="mc">
                        <button class="botão2 m-4">MODIFICAR</button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Modificarfuncionario