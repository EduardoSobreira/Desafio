import React, {useState} from 'react';
import {Switch, Form, Input, Button, Checkbox, Select, Radio, Upload, Card, Space, Row, Col} from 'antd';
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
    const [form] = Form.useForm();
    const [expand, setExpand] = useState(false);

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

    const getFields = () => {
        const count = expand ? 10 : 6;
        const children = [];
        for (let i = 0; i < count; i++) {
            children.push(
                <Col span={8} key={i}>
                    {i % 3 !== 1 ? (
                        <Form.Item
                            name={`field-${i}`}
                            label={`Field ${i}`}
                            rules={[
                                {
                                    required: true,
                                    message: 'Input something!',
                                },
                            ]}
                        >
                            <Input placeholder="placeholder"/>
                        </Form.Item>
                    ) : (
                        <Form.Item
                            name={`field-${i}`}
                            label={`Field ${i}`}
                            rules={[
                                {
                                    required: true,
                                    message: 'Select something!',
                                },
                            ]}
                            initialValue="1"
                        >
                            <Select>
                                <Option value="1">
                                    longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong
                                </Option>
                                <Option value="2">222</Option>
                            </Select>
                        </Form.Item>
                    )}
                </Col>,
            );
        }
        return children;
    };

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
                        <Switch className={'m-l-auto'} checked={switchChecked} onChange={handleSwitchChange}/>
                    </Form.Item>
                </div>

                {switchChecked && (
                    <div className="descricao d-flex flex-row space-between">
                        <div className={'d-flex flex-column w-45'}>
                            <label>Nome: </label>
                            <Input placeholder="nome"/>
                        </div>

                        <div className={'d-flex flex-column w-45'}>
                            <label>Sexo: </label>
                            <Radio.Group>
                                <Radio value={'F'}>Feminino</Radio>
                                <Radio value={'M'}>Masculino</Radio>
                            </Radio.Group>
                        </div>

                        <div className={'d-flex flex-column w-45'}>
                            <label>CPF: </label>
                            <Input placeholder="nome"/>
                        </div>

                        <div className={'d-flex flex-column w-45'}>
                            <label>Data Nascimento: </label>
                            <Input placeholder="nome"/>
                        </div>

                        <div className={'d-flex flex-column w-45'}>
                            <label>RG: </label>
                            <Input placeholder="nome"/>
                        </div>

                        <div className={'d-flex flex-column w-45'}>
                            <label>Cargo: </label>
                            <Input placeholder="nome"/>
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
                                <div className={'mt-5 w-100'}>
                                    <div className="container-atividade d-flex flex-row space-between w-100">
                                        <div className={'d-flex flex-column w-100'}>
                                            <label>Selecione a atividade: </label>
                                            <Select className={'w-100'}>
                                                <Select.Option value="atividade 1">Atividade 1</Select.Option>
                                                <Select.Option value="Atividade 2">Atividade 2</Select.Option>
                                                <Select.Option value="Atividade 3">Atividade 3</Select.Option>
                                            </Select>
                                        </div>

                                        <div className={'d-flex flex-row w-100 space-between'}>
                                            <div className={'d-flex flex-column'}>
                                                <label>Selecione o EPI: </label>
                                                <Select className={'w-100'}>
                                                    <Select.Option value="Calcado de seguranca">Calçado de
                                                        Segurança</Select.Option>
                                                    <Select.Option value="capacete">Capacete</Select.Option>
                                                </Select>
                                            </div>

                                            <div className={'d-flex flex-column'}>
                                                <label>Informe o Número do CA: </label>
                                                <Input/>
                                            </div>


                                            <Button type="primary" htmlType="submit" className="custom-adicionar mt-5">Adicionar
                                                EPI</Button>
                                        </div>
                                    </div>

                                    <div className={'mt-5 w-100 p-5-px'}>
                                        <Button className="w-100 custom-buttom" type="primary" htmlType="submit">Adicionar
                                            outra
                                            atividade</Button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="container-epi mt-5">
                            <div>
                                <h2>Adicionar Atestado de Saúde (opcional)</h2>
                                <Upload className={'w-100'} {...uploadProps}>
                                    <Button className={'w-100'} icon={<UploadOutlined/>}>Selecione Arquivos</Button>
                                </Upload>
                            </div>
                        </div>
                    </div>
                )}

                <Button type="primary" htmlType="submit" className="w-100 mt-5 custom-buttom">Salvar</Button>
            </Form>
        </Card>
    );
};

export default CadastrarFuncionarioComponent;
