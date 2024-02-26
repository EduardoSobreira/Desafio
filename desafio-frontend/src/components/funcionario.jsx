import React, { useState } from 'react';
import { Switch, Form, Input, Button, Checkbox } from 'antd';
import '../estilos/funcionario.css' // Sempre que tu criar uma folha de estilo css personalizada
// pro componente tem que importar ela aqui, desse jeito igual foi feito aqui


const MyForm = () => {
    const [switchChecked, setSwitchChecked] = useState(false);
    const [checkboxChecked, setCheckboxChecked] = useState(false);
    const [formGroupVisible, setFormGroupVisible] = useState(false);

    const handleSwitchChange = (checked) => {
        setSwitchChecked(checked);
        if (!checked) {
            setCheckboxChecked(false); // Se o switch for desativado, desativa também a checkbox
            setFormGroupVisible(false); // Esconde o formGroup quando o switch é desativado
        }
    };

    const handleCheckboxChange = (e) => {
        setCheckboxChecked(e.target.checked);
        setFormGroupVisible(!e.target.checked); // Exibe o formGroup apenas se a checkbox for desmarcada
    };

    const onFinish = (values) => {
        console.log('Dados do formulário:', values);
    };

    return (
        <Form onFinish={onFinish}>
            <Form.Item label="O trabalhador está inativo ou ativo?">
                <Switch checked={switchChecked} onChange={handleSwitchChange} />
            </Form.Item>

            {switchChecked && (
                <Form>
                    <Form.Item label="Nome" name="nome">
                        <Input />
                    </Form.Item>

                    <Form.Item label="CPF" name="cpf">
                        <Input />
                    </Form.Item>

                    <Form.Item label="RG" name="rg">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Data de nascimento" name="dataNascimento">
                        <Input />
                    </Form.Item>

                </Form>
            )}


            {switchChecked && (
                <div>
                    <h1>Quais EPIs o trabalhador usa na atividade?</h1>
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
                <Form>
                    <Form.Item label="Selecione a atividade" name="atividade">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Selecione o EPI" name="epi">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Informe o Número do CA" name="numero">
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Adicionar EPI</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Adicionar outra atividade</Button>
                    </Form.Item>

                </Form>


            )}
            <Form.Item>
                <Button type="primary" htmlType="submit">Enviar</Button>
            </Form.Item>
        </Form>
    );
};

export default MyForm;
