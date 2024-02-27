import React, {useState} from 'react';
import {Switch, Form, Input, Button, Checkbox, Select, Radio, Upload, Card, Space} from 'antd';
import '../estilos/funcionario.css'

function UploadOutlined() {
    return null;
}

function ArrowLeftOutlined() {
    return null;
}

const CadastrarFuncionarioComponent = () => {
    const [switchChecked, setSwitchChecked] = useState(false);
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [formGroupVisible, setFormGroupVisible] = useState(false);

    const handleSwitchChange = (checked) => {
        setSwitchChecked(checked);
        if (!checked) {
            setCheckboxChecked(false);
            setFormGroupVisible(false);
        }
    };

    const handleCheckboxChange = (e) => {
        setCheckboxChecked(e.target.checked);
        setFormGroupVisible(!e.target.checked);
    };

    const onFinish = (values) => {
        console.log('Dados do formulário:', values);
    };

    let uploadProps;

    function handleReturn() {

    }

    return (
        <Card
            title={
                <div className="card-title">
                    <Space>
                        <Button type="text" onClick={handleReturn} icon={<ArrowLeftOutlined/>}/>
                        <span>Adicionar Funcionário</span>
                    </Space>
                </div>
            }
            className="form-container w-60"
        >
            <Form onFinish={onFinish}>
                <div className="form-header">
                    <Form.Item label="O trabalhador está inativo ou ativo?">
                        <Switch checked={switchChecked} onChange={handleSwitchChange}/>
                    </Form.Item>
                </div>

                {switchChecked && (
                    <div className="descricao">
                        <Form>
                            <Form.Item label="Nome" name="nome">
                                <Input/>
                            </Form.Item>

                            <Form.Item label="Gênero" name="genero">
                                <Radio.Group>
                                    <Radio value="masculino">Masculino</Radio>
                                    <Radio value="feminino">Feminino</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item label="CPF" name="cpf">
                                <Input/>
                            </Form.Item>

                            <Form.Item label="Data de nascimento" name="dataNascimento">
                                <Input/>
                            </Form.Item>

                            <Form.Item label="RG" name="rg">
                                <Input/>
                            </Form.Item>

                            <Form.Item label="Cargo" name="cargo">
                                <Select>
                                    <Select.Option value="operador de maquinas">Operador de máquinas</Select.Option>
                                    <Select.Option value="analista">Analista</Select.Option>
                                    <Select.Option value="assistente">Assistente</Select.Option>
                                </Select>
                            </Form.Item>

                        </Form>
                    </div>
                )}


                {switchChecked && (
                    <div className="checkbox">
                        <h2>Quais EPIs o trabalhador usa na atividade?</h2>
                        <Form.Item label="O trabalhador não usa EPI">
                            <Checkbox
                                checked={checkboxChecked}
                                onChange={handleCheckboxChange}
                            >
                                Ativar
                            </Checkbox>
                        </Form.Item>
                    </div>

                )}

                {!checkboxChecked && formGroupVisible && (
                    <div className="epi">
                        <Form>
                            <div className="selecionar-atividade">
                                <Form.Item label="Selecione a atividade" name="atividade">
                                    <Select>
                                        <Select.Option value="atividade 1">Atividade 1</Select.Option>
                                        <Select.Option value="Atividade 2">Atividade 2</Select.Option>
                                        <Select.Option value="Atividade 3">Atividade 3</Select.Option>
                                    </Select>
                                </Form.Item>
                            </div>

                            <div className="selecionar-epi">
                                <Form.Item className="form-item" label="Selecione o EPI" name="epi">
                                    <Select>
                                        <Select.Option value="Calcado de seguranca">Calçado de Segurança</Select.Option>
                                        <Select.Option value="capacete">Capacete</Select.Option> >
                                    </Select>
                                </Form.Item>

                                <Form.Item className="form-item" label="Informe o Número do CA" name="numero">
                                    <Input/>
                                </Form.Item>
                                <Form.Item>
                                    <Button type="primary" htmlType="submit" className="custom-adicionar">Adicionar
                                        EPI</Button>
                                </Form.Item>
                            </div>

                            <Form.Item>
                                <Button className="custom-buttom" type="primary" htmlType="submit">Adicionar outra
                                    atividade</Button>
                            </Form.Item>
                        </Form>
                        <div className="docs">
                            <Form.Item className="custom-buttom" label="Adicionar Atestado de Saúde (opcional)"
                                       name="documentos">
                                <Upload {...uploadProps}>
                                    <Button icon={<UploadOutlined/>}>Selecione Arquivos</Button>
                                </Upload>
                            </Form.Item>
                        </div>
                    </div>

                )}
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="custom-buttom">Salvar</Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default CadastrarFuncionarioComponent;
