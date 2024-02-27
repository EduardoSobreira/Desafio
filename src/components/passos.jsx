import React from 'react';
import {Steps} from 'antd';
import '../estilos/customStep.css'
import {UserOutlined} from "@ant-design/icons";


const StepComponent = ({items, current}) => {

    return (
        <div className="app">
            <Steps current={current}>
                {items?.map((item, index) => (
                    <Steps.Step
                        key={index}
                        status={index === current ? 'process' : 'wait'}
                        title={item.title}
                        icon={<UserOutlined className={'custom-icon'} />}
                    />
                ))}
            </Steps>
        </div>
    );
};

export default StepComponent;
