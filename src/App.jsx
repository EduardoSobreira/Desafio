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
    },
    {
        title: 'Item 2',
    },
    {
        title: 'Item 4',
    },
    {
        title: 'Item 5',
    },
    {
        title: 'Item 6',
    },
    {
        title: 'Item 7',
    },
    {
        title: 'Item 8',
    },
    {
        title: 'Item 9',
    }
];

function App() {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
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
