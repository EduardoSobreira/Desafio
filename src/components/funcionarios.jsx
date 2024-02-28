import React, {useEffect} from 'react';
import {Button, Card, Space, Table} from "antd";
import '../estilos/funcionario.css'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchFuncionarios} from "../actions/funcionarioActions.jsx";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

const FuncionariosComponent = () => {
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const funcionarios = useSelector(state => state.funcionario.funcionarios);
    const loading = useSelector(state => state.funcionario.loading);
    const error = useSelector(state => state.funcionario.error);

    useEffect(() => {
        dispatch(fetchFuncionarios());
    }, [dispatch]);

    const callNewFuncionario = (e) => {
        e.preventDefault();
        navigate('/cadastrar-funcionario');
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
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

            {funcionarios && funcionarios.map(funcionario => {
                return (
                    <div className={'d-flex flex-row'} key={funcionario.id}>
                        <div className={'d-flex flex-column'}>
                            <div className={'w-100'}>{funcionario.name}</div>
                            <div>{funcionario.name}</div>
                            <div>{funcionario.name}</div>
                            <div>{funcionario.name}</div>
                        </div>
                        <div>...</div>
                    </div>
                );
            })}
        </Card>
    )
};

export default FuncionariosComponent;