import "./App.css"
import RouterComponent from "./components/routes.jsx";
import StepComponent from "./components/passos.jsx";
import MenuComponent from "./components/menu.jsx";
import React, {useState} from "react";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import {SolutionOutlined, UserOutlined} from "@ant-design/icons";

const steps = [
    {
        title: 'Item 1',
        icon: <UserOutlined className={'custom-icon'} />,
    },
    {
        title: 'Item 2',
        icon: <SolutionOutlined />,
    },
    {
        title: 'Item 4',
        icon: <UserOutlined className={'custom-icon'} />,
    },
    {
        title: 'Item 5',
        icon: <UserOutlined className={'custom-icon'} />,
    },
    {
        title: 'Item 6',
        icon: <UserOutlined className={'custom-icon'} />,
    },
    {
        title: 'Item 7',
        icon: <UserOutlined className={'custom-icon'} />,
    },
    {
        title: 'Item 8',
        icon: <UserOutlined className={'custom-icon'} />,
    },
    {
        title: 'Item 9',
        icon: <UserOutlined className={'custom-icon'} />,
    }
];

function App() {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);

        if (current > 0) {
            // navegar pro componente em breve
        }
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    return <div className={'principal'} >
        <MenuComponent />

        <div className={'container'}>
            <StepComponent items={items} current={current}/>
            <RouterComponent/>

            <div className={'d-flex flex-row w-100 mt-5'}>
                {current > 0 && (<Button className={'w-40'} onClick={prev} type="primary">Step Anterior</Button>)
                }
                <Button className={'w-40 m-l-auto'} type="primary" onClick={next}>Proximo Step</Button>
            </div>
        </div>


    </div>
}

export default App
