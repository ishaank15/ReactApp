import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
import React from 'react';
import UserList from './userList.jsx'

export default class Dashboard extends React.Component {
	render() {
		return (
			<Layout>
				<Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
					<div className="logo" />
					<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
						<Menu.Item key="1">User List</Menu.Item>
						<Menu.Item key="2">Upcoming</Menu.Item>
						<Menu.Item key="3">Soon</Menu.Item>
						<Menu.Item key="4">.</Menu.Item>
						<Menu.Item key="6">.</Menu.Item>
						<Menu.Item key="7">Logout</Menu.Item>						
					</Menu>
				</Header>
				<UserList/>
				<Footer style={{ textAlign: 'center' }}>
					Ant Design ©2016 Created by Ant UED
				</Footer>
			</Layout>
		)
	}
}

