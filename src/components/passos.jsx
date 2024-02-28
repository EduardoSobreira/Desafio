import React from 'react';
import {Steps} from 'antd';
import '../estilos/customStep.css'


const StepComponent = ({items, current}) => {
    return (
        <div className="app">
            <Steps current={current} labelPlacement="vertical" items={items} />
        </div>
    );
};

export default StepComponent;
