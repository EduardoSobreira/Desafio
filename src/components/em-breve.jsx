import React from "react";
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";

const EmBreveComponent = () => {
    return (
        <div className={'w-100'}>
            <Button type="primary" shape="round" icon={<PlusOutlined/>}>
                Adicionar Funcionário
            </Button>
        </div>
    );
};


export default EmBreveComponent;
