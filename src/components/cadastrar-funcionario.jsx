import React, {useEffect, useState} from 'react';
import {Switch, Form, Input, Button, Checkbox, Select, Radio, Upload, Card, Space, Row, Col, message} from 'antd';
import '../estilos/funcionario.css'
import {ArrowLeftOutlined, UploadOutlined} from "@ant-design/icons";
import {fetchFuncionarios, postFuncionarios, putFuncionarios} from "../actions/funcionarioActions.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import InputMask from 'react-input-mask'

import {useLocation} from "react-router-dom";

const CadastrarFuncionarioComponent = () => {
    const location = useLocation();
    const receivedData = location.state;

    const [switchChecked, setSwitchChecked] = useState(false);
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [funcionario, setFuncionario] = useState(receivedData);
    const [epi, setEpi] = useState([]);
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const loading = useSelector(state => state.funcionario.loading);
    const error = useSelector(state => state.funcionario.error);

    const [epiValido, setEpiValido] = useState(true)

    const handleAddEpi = () => {
        const novoEpi = {atividade: '', tipoEpi: '', ca: ''};
        setFuncionario((prevFuncionario) => ({
            ...prevFuncionario,
            epis: [...prevFuncionario.epis, novoEpi]
        }));
        if (!novoEpi.atividade || !novoEpi.tipoEpi || !novoEpi.ca) {
            setEpiValido(false);
        }
    };

    const handleRemoveEpi = (index) => {
        setFuncionario((prevFuncionario) => {
            const updatedEpis = [...prevFuncionario.epis];
            updatedEpis.splice(index, 1);
            return {
                ...prevFuncionario,
                epis: updatedEpis
            };
        });
    };

    const handleEpiChange = (index, fieldName, value) => {
        setFuncionario((prevFuncionario) => {
            const updatedEpis = [...prevFuncionario.epis];
            updatedEpis[index][fieldName] = value;
            return {
                ...prevFuncionario,
                epis: updatedEpis
            };
        });
    };

    const changeFuncionario = (fieldName, event) => {
        setFuncionario((prevFuncionario) => ({
            ...prevFuncionario,
            [fieldName]: event.target.value
        }));
    };

    const handleSwitchChange = (checked) => {
        setSwitchChecked(checked);
        if (!checked) {
            setCheckboxChecked(false);
            setFuncionario((prevFuncionario) => ({
                ...prevFuncionario,
                ativo: false
            }));
        } else {
            setFuncionario((prevFuncionario) => ({
                ...prevFuncionario,
                ativo: true
            }));
        }
    };

    const handleCheckboxChange = (e) => {
        setCheckboxChecked(e.target.checked);
        setFuncionario((prevFuncionario) => ({
            ...prevFuncionario,
            usaEpi: !e.target.checked
        }));

        if (!e.target.checked && funcionario.epis.length === 0) {
            setEpiValido(false);
        } else {
            setEpiValido(true);
        }
    };

    const validateEpiPreenchido = (epis) => {
        let isValido = true;

        epis.forEach( epi => {
            if (!(epi.ca && epi.tipoEpi && epi.atividade)) {
                isValido = false
            }
        })
        return isValido;
    }

    const salvarFuncionario = () => {
        if (checkboxChecked || validateEpiPreenchido(funcionario.epis)) {
            setEpiValido(true);
            if (funcionario['_id']) {
                dispatch(putFuncionarios(funcionario)).then(response => {
                    message.success('Funcionario alterado com sucesso')
                    handlerVoltar();
                }).catch(error => {
                    message.error('Ocorreu um erro ao cadastrar o Funcionario.');
                });
            } else {
                dispatch(postFuncionarios(funcionario)).then(response => {
                    message.success('Funcionario cadastrado com sucesso')
                    handlerVoltar();
                }).catch(error => {
                    message.error('Ocorreu um erro ao salvar o Funcionario.');
                });
            }

        } else {
            setEpiValido(false);
            message.warning('É necessario cadastrar pelo menos um EPI ou selecionar o checkbox "O trabalhador não usa EPI"!', 5);
        }
    }

    const handlerVoltar = () => {
        navigate('/');
    }

    const renderEpiInputs = () => {
        return funcionario.epis.map((epi, index) => (
            <div key={index} className="container-epi mt-5">
                <div className="container-atividade d-flex flex-row space-between w-100">
                    <div className="d-flex flex-column w-100">
                        <label>Selecione a atividade:</label>
                        <Select
                            className="w-100"
                            value={epi.atividade}
                            onChange={(value) => handleEpiChange(index, 'atividade', value)}
                        >
                            <Select.Option value="atividade 1">Atividade 1</Select.Option>
                            <Select.Option value="Atividade 2">Atividade 2</Select.Option>
                            <Select.Option value="Atividade 3">Atividade 3</Select.Option>
                        </Select>
                    </div>
                    <div className={'d-flex flex-row w-100 space-between'}>
                        <div className={'d-flex flex-column'}>
                            <label>Selecione o EPI: </label>
                            <Select onChange={(value) => handleEpiChange(index, 'tipoEpi', value)}
                                    className={'w-100'}>
                                <Select.Option value="Calcado de seguranca">Calçado de
                                    Segurança</Select.Option>
                                <Select.Option value="capacete">Capacete</Select.Option>
                            </Select>
                        </div>

                        <div className={'d-flex flex-column'}>
                            <label>Informe o Número do CA: </label>
                            <Input onChange={(event) => handleEpiChange(index, 'ca', event.target.value)}/>
                        </div>


                        <Button type="primary" htmlType="submit" className="custom-adicionar mt-5"
                                onClick={handleAddEpi}>Adicionar
                            EPI</Button>
                    </div>

                    <div className={'mt-5 w-100 p-5-px'}>
                        <Button
                            className="w-100 custom-buttom" type="primary" onClick={handleRemoveEpi}>Excluir
                            atividade</Button>
                    </div>
                </div>

            </div>
        ));
    };

    return (
        <Card
            title={
                <div className="card-title">
                    <Space>
                        <Button type="text"
                                onClick={handlerVoltar}
                                icon={<ArrowLeftOutlined/>}/>
                        <span>Adicionar Funcionário</span>
                    </Space>
                </div>
            }
            className="form-container w-60"
        >
            <Form>
                <div className="form-header">
                    <Form.Item label="O trabalhador está inativo ou ativo?">
                        <Switch className={'m-l-auto'} checked={switchChecked} onChange={handleSwitchChange} checkedChildren="Ativo"
                                unCheckedChildren="inativo"/>
                    </Form.Item>
                </div>

                {switchChecked && (
                    <div className="descricao d-flex flex-row space-between">
                        <div className={'d-flex flex-column w-45'}>
                            <label>Nome: </label>
                            <Input value={funcionario?.nome} onChange={(e) => changeFuncionario('nome', e)}
                                   placeholder="nome"/>
                        </div>

                        <div className={'d-flex flex-column w-45'}>
                            <label>Sexo: </label>
                            <Radio.Group value={funcionario?.sexo} onChange={(e) => changeFuncionario('sexo', e)}>
                                <Radio value={'F'}>Feminino</Radio>
                                <Radio value={'M'}>Masculino</Radio>
                            </Radio.Group>
                        </div>

                        <div className={'d-flex flex-column w-45'}>
                            <label>CPF: </label>
                            <InputMask mask="999.999.999-99" value={funcionario?.cpf} onChange={(e) => changeFuncionario('cpf', e)}
                                   placeholder="___.___.___-__"/>
                        </div>

                        <div className={'d-flex flex-column w-45'}>
                            <label>Data Nascimento: </label>
                            <InputMask mask="99/99/9999" value={funcionario?.dataNascimento}
                                   onChange={(e) => changeFuncionario('dataNascimento', e)} placeholder="DD/MM/AAAA"/>
                        </div>

                        <div className={'d-flex flex-column w-45'}>
                            <label>RG: </label>
                            <Input value={funcionario?.rg} onChange={(e) => changeFuncionario('rg', e)}
                                   placeholder="nome"/>
                        </div>

                        <div className={'d-flex flex-column w-45'}>
                            <label>Cargo: </label>
                            <Input value={funcionario?.cargo} onChange={(e) => changeFuncionario('cargo', e)}
                                   placeholder="nome"/>
                        </div>
                    </div>
                )}

                {switchChecked && (
                    <div>
                        <div className="container-epi mt-5">
                            <div>
                                <h2>Quais EPIs o trabalhador usa na atividade?</h2>
                                <Checkbox
                                    checked={checkboxChecked}
                                    onChange={handleCheckboxChange}/>
                                <span>O trabalhador não usa EPI</span>
                            </div>

                            {!checkboxChecked && switchChecked && (
                                <div>
                                    {renderEpiInputs()}
                                </div>
                            )}

                            <div className={'mt-5 w-100 p-5-px'}>
                                <Button
                                    className="w-100 custom-buttom" type="primary" onClick={handleAddEpi}>Adicionar
                                    outra atividade</Button>
                            </div>
                        </div>

                        <div className="container-epi mt-5">
                            <div>
                                <h2>Adicionar Atestado de Saúde (opcional)</h2>
                                <Upload className={'w-100'}
                                        onChange={(info) =>
                                            changeFuncionario('atestadoSaude', info.file)}>
                                    <Button className={'w-100'} icon={<UploadOutlined/>}>Selecione Arquivos</Button>
                                </Upload>
                            </div>
                        </div>
                    </div>
                )}

                <Button type="primary" htmlType="submit" className="w-100 mt-5 custom-buttom"
                        onClick={salvarFuncionario}>Salvar</Button>
            </Form>
        </Card>
    );
};

export default CadastrarFuncionarioComponent;
