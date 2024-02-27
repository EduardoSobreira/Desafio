import React from "react";
import AboutComponent from "./about.jsx";
import FuncionariosComponent from "./funcionarios.jsx";

const PassoUmComponent = () => {
    return (
        <div className={"d-flex flex-row mt-5 conteudo-principal"}>
            <AboutComponent/>
            <FuncionariosComponent/>
        </div>
    );
};


export default PassoUmComponent;
