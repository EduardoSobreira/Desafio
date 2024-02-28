import React, {useEffect} from 'react';
import {Image, Steps} from 'antd';
import '../estilos/customStep.css'
import {useNavigate} from "react-router-dom";


const StepComponent = ({items, current}) => {
    let navigate = useNavigate();

    useEffect(() => {
        if (current > 0 ) {
            navigate('/passo-2')
        } else {
            navigate('/')
        }
    }, [current]);
    return (
        <div className="app">
            <Steps current={current} labelPlacement="vertical" responsive={true}>
                {items.map((item, index) => (
                    <Steps.Step key={index} icon={<Image src='../src/assets/icone.png' className={'custom-icon'} />} title={item.title} />
                ))}
            </Steps>
        </div>
    );
};

export default StepComponent;
