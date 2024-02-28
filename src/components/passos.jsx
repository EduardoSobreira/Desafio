import React from 'react';
import {Steps} from 'antd';
import '../estilos/customStep.css'
import {UserOutlined} from "@ant-design/icons";


const StepComponent = ({items, current}) => {
    return (
        <div className="app">
            <Steps current={current} labelPlacement="vertical">
                {items.map((item, index) => (
                    <Steps.Step key={index} icon={<UserOutlined className={'custom-icon'} />} title={item.title} />
                ))}
            </Steps>
        </div>
    );
};

export default StepComponent;
