import React from 'react';
import { Steps } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import '../estilos/customStep.css'

const { Step } = Steps;

const Passos = () => {
    return (
        <div className="app">
            <Steps direction={"horizontal"}>
                <Step status="wait" title="Item 1" icon={<UserOutlined className={'custom-icon'}/>} />
                <Step status="wait" title="Item 2" icon={<UserOutlined className={'custom-icon'}/>} />
                <Step status="wait" title="Item 3" icon={<UserOutlined className={'custom-icon'}/>} />
                <Step status="wait" title="Item 4" icon={<UserOutlined className={'custom-icon'}/>} />
                <Step status="wait" title="Item 5" icon={<UserOutlined className={'custom-icon'}/>} />
                <Step status="wait" title="Item 6" icon={<UserOutlined className={'custom-icon'}/>} />
                <Step status="wait" title="Item 7" icon={<UserOutlined className={'custom-icon'}/>} />
                <Step status="wait" title="Item 8" icon={<UserOutlined className={'custom-icon'}/>} />
                <Step status="wait" title="Item 9" icon={<UserOutlined className={'custom-icon'}/>} />
            </Steps>
        </div>
    );
};

export default Passos;