import React from 'react';
import {Menu} from 'antd';
import {ProfileOutlined, FormOutlined, ApartmentOutlined, BellOutlined, HistoryOutlined, UserOutlined} from '@ant-design/icons';
import '../estilos/menu.css'
const {SubMenu} = Menu;

class MenuComponent extends React.Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div className="menu-container">
                <div className={'mt-10 enfeite-menu'}/>
                <Menu >
                    <Menu.Item key="1" icon={<ProfileOutlined/>}>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<FormOutlined/>}>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ApartmentOutlined/>}> </Menu.Item>
                    <Menu.Item key="4" icon={<BellOutlined />}> </Menu.Item>
                    <Menu.Item key="5" icon={<HistoryOutlined />}> </Menu.Item>
                    <Menu.Item key="6" icon={<UserOutlined />}> </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default MenuComponent;
