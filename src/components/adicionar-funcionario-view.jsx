import React from "react";
import AboutComponent from "./about.jsx";
import CadastrarFuncionario from "./cadastrar-funcionario.jsx";

const AdicionarFuncionarioView = () => {
    return (
        <div className={"d-flex flex-row mt-5 conteudo-principal"}>
            <AboutComponent/>
            <CadastrarFuncionario/>
        </div>
    );
};


export default AdicionarFuncionarioView;
