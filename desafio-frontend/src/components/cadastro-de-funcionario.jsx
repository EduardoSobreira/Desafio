import React from 'react';
import {PlusOutlined} from '@ant-design/icons';
import {Button} from "antd";


const CadastroFuncionario = () => {
    return (
        <div>
            <div>
                <Button type="primary" shape="round" icon={<PlusOutlined/>}>
                    Adicionar Funcionário
                </Button>
            </div>
            <div>
                <Button type="primary">Ver apenas ativos </Button>
                <Button type="primary">Limpar filtros </Button>
            </div>
        </div>

    );
};

export default CadastroFuncionario;