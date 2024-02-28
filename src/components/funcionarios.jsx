import React, {useEffect, useState} from 'react';
import {Button, Card, Dropdown, Menu, message, Space, Spin, Switch, Tag} from "antd";
import '../estilos/funcionario.css'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {DownOutlined, EllipsisOutlined} from "@ant-design/icons";
import {deleteFuncionario, fetchFuncionarios, putFuncionarios} from "../actions/funcionarioActions.jsx";

const FuncionariosComponent = () => {
    let navigate = useNavigate();

    const dispatch = useDispatch();
    let funcionarios = useSelector(state => state.funcionario.funcionarios);
    const error = useSelector(state => state.funcionario.error);
    const loading = useSelector(state => state.funcionario.loading);

    const [etapaConcluida, setEtapaConcluida] = useState(false);

    useEffect(() => {
        dispatch(fetchFuncionarios());
    }, [dispatch]);


    const callNewFuncionario = (e) => {
        e.preventDefault();
        navigate('/cadastrar-funcionario', {
            state: {
                usaEpi: false,
                atestadoSaude: null,
                epis: [{atividade: '', tipoEpi: '', ca: ''}]
            }
        });
    }


    const handleMenuClick = (funcionario, action) => {
        if (action === 'alterar') {
            navigate('/cadastrar-funcionario'
                , {state: funcionario});
        } else if (action === 'excluir') {
            dispatch(deleteFuncionario(funcionario)).then(response => {
                message.success('Usuário excluído com sucesso!')
                navigate('/');
            }).catch(error => {
                message.error('Ocorreu um erro ao excluir o usuário.');
            });
        }
    };

    const menu = (funcionario) => (
        <Menu onClick={({key}) => handleMenuClick(funcionario, key)}>
            <Menu.Item key="alterar">Alterar</Menu.Item>
            <Menu.Item key="excluir">Excluir</Menu.Item>
        </Menu>
    );

    const handleSwitchChange = (checked) => {
        setEtapaConcluida(checked);
    }

    return (
        <Card
            title={
                <div className="card-title">
                    <Space>
                        <span>Funcionário (s)</span>
                    </Space>
                </div>
            }
            className="form-container w-60 ml-5"
        >
            <div>
                <Button onClick={callNewFuncionario} className="custom-button w-100 h-40">Adicionar Funcionário</Button>
            </div>
            <div className={'mt-5 d-flex flex-row'}>
                <Button type="primary" onClick={() => {
                    funcionarios = funcionarios.filter(item => item.ativo)
                }}>Ver apenas ativos </Button>
                <Button type="primary ml-5" onClick={() => {
                    dispatch(fetchFuncionarios());
                }}>Limpar filtros </Button>
                <span
                    className={'m-l-auto'}> Ativos {funcionarios.filter((item) => item.ativo).length}/{funcionarios.length} </span>
            </div>

            {loading && (
                <Spin className={'mt-5'} size="large" tip="Carregando..."/>
            )}

            {!error && funcionarios && funcionarios.map(funcionario => {
                return (
                    <div className={'d-flex flex-row mt-5'} key={funcionario.id}>
                        <div className={'d-flex flex-column w-100 p-1 b-t-l-r b-b-l-r'}
                             style={{backgroundColor: funcionario.ativo ? '#E0ECF2' : '#F2F2F2'}}>
                            <div className={'w-100 funcionario-list-title'}>{funcionario.nome}</div>

                            <Space className="info-funcionario" size={[0, 8]} wrap>
                                <Tag color="#4096ff">{funcionario.cpf}</Tag>
                                <Tag color="#4096ff">{funcionario.ativo ? 'Ativo' : 'Inativo'}</Tag>
                                <Tag color="#4096ff">{funcionario.cargo}</Tag>
                            </Space>
                        </div>

                        <Dropdown
                            overlay={menu(funcionario)}
                            trigger={['click']}
                            className={'m-l-auto p-1 custom-spread-div b-t-r-r b-b-r-r'}
                        >
                            <EllipsisOutlined/>
                        </Dropdown>
                    </div>
                );
            })}
            <div className="switch-footer" style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
                <span>Etapa concluída?</span>
                <Switch checked={etapaConcluida} onChange={handleSwitchChange} checkedChildren="Sim"
                        unCheckedChildren="Não"/>

            </div>
        </Card>
    )
};

export default FuncionariosComponent;
