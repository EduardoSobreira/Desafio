import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PassoUmComponent from "./passo-um.jsx";
import EmBreveComponent from "./em-breve.jsx";
import CadastrarFuncionario from "./cadastrar-funcionario.jsx";
import AdicionarFuncionarioView from "./adicionar-funcionario-view.jsx";


const RouterComponent = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<PassoUmComponent />} />
                <Route path="/cadastrar-funcionario" element={<AdicionarFuncionarioView />} />
                <Route path="/passo-2" element={<EmBreveComponent />} />
            </Routes>
        </Router>
    )
}

export default RouterComponent;
