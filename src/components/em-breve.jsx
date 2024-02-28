import React from "react";
import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";

const EmBreveComponent = () => {
    return (
        <div className={'w-100 mt-5 min-h-400'}>
            <Button className={'w-100'} type="primary" shape="round">
                Em Breve
            </Button>
        </div>
    );
};


export default EmBreveComponent;
