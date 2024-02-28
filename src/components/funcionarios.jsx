import React, {useEffect} from 'react';
import {Button, Card, Space, Spin, Table, Tag} from "antd";
import '../estilos/funcionario.css'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchFuncionarios} from "../actions/funcionarioActions.jsx";

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
                <span className={'m-l-auto'}> Ativos {funcionarios.filter((item) => item.ativo).length}/{funcionarios.length} </span>
            </div>

            {loading && (
                <Spin className={'mt-5'} size="large" tip="Carregando..." />
            )}

            {!error && funcionarios && funcionarios.map(funcionario => {
                return (
                    <div className={'d-flex flex-row mt-5'} key={funcionario.id}>
                        <div className={'d-flex flex-column w-100 p-1 b-t-l-r b-b-l-r'} style={{ backgroundColor: funcionario.ativo ? '#E0ECF2' : '#F2F2F2'}}>
                            <div className={'w-100 funcionario-list-title'}>{funcionario.nome}</div>

                            <Space size={[0, 8]} wrap>
                                <Tag color="#4096ff">{funcionario.cpf}</Tag>
                                <Tag color="#4096ff">{funcionario.ativo ? 'Ativo' : 'Inativo'}</Tag>
                                <Tag color="#4096ff">{funcionario.cargo}</Tag>
                            </Space>
                        </div>
                        <div className={'m-l-auto p-1 custom-spread-div b-t-r-r b-b-r-r'}>...</div>
                    </div>
                );
            })}
        </Card>
    )
};

export default FuncionariosComponent;
