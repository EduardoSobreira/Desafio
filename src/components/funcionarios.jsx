import React from 'react';
import {Button, Card, Space} from "antd";
import '../estilos/funcionario.css'
import {useNavigate} from "react-router-dom";

const FuncionariosComponent = () => {
    let navigate = useNavigate();

    const callNewFuncionario = (e) => {
        e.preventDefault();
        navigate('/cadastrar-funcionario');
    }

    return (
        <Card
            title={
                <div className="card-title">
                    <Space>
                        <span>Adicionar Funcionário</span>
                    </Space>
                </div>
            }
            className="form-container w-60 ml-5"
        >
            <div>
                <Button onClick={callNewFuncionario} className="custom-button w-100 h-40">Adicionar Funcionário</Button>
            </div>
            <div className={'mt-5 d-flex flex-row'}>
                <Button type="primary">Ver apenas ativos </Button>
                <Button type="primary ml-5">Limpar filtros </Button>
                <span className={'m-l-auto'}> Ativos 2/4 </span>
            </div>
        </Card>

    );
};

export default FuncionariosComponent;
