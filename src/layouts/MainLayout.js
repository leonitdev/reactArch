import { Layout, Menu, Dropdown, Avatar, Button, Tooltip, Spin } from 'antd';
import React, { useState } from 'react';
import { FiMenu, FiHome, FiUser } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';



const { Header, Sider, Content } = Layout;

export default function MainLayout({ children }) {
    const [collapsed, setCollapsed] = useState(false);
    const [loading, setLoading] = useState(false);

    const toggle = () => setCollapsed(c => !c);

    return (
        <div className="w-full h-screen">
            {loading && <Spin />}
            <Layout className="w-full h-full">
                <Header className="" style={{background:'white'}} >
                    <div className="flex flex-row h-full items-center">
                        <FiMenu className="cursor-pointer" size={20} onClick={toggle} />
                        <h3 className="ml-10 font-semibold text-lg">
                            Architecture App
                         </h3>
                    </div>
                    <div className="flex flex-1 h-full  justify-end items-center">
                    </div>
                </Header>
                <Layout>
                    <Sider width={250} theme="light" className="pt-4 pb-0 flex flex-col flex-1 justify-between" trigger={null} collapsible collapsed={collapsed}>
                        <div className="h-full flex flex-col">
                            <Menu theme="light" mode="vertical" selectedKeys={[window.location.pathname]} defaultSelectedKeys={[window.location.pathname]} className="flex flex-col flex-1">
                                <Menu.Item className="flex flex-row items-center" key={"/home"} icon={<FiHome size={18} />}>
                                    <NavLink to='/home'>
                                        Home
                                    </NavLink>
                                </Menu.Item>
                                
                                <Menu.Item className="flex flex-row items-center" key={"/users"} icon={<FiUser size={18} />}>
                                    <NavLink to='/users'>
                                        Users
                                    </NavLink>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </Sider>
                    <div className="p-6 h-auto w-full overflow-y-auto">
                        {children}
                    </div>
                </Layout>
            </Layout>
        </div >
    );
}
