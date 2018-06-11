import React from 'react';
import 'antd/dist/antd.css'
import './App.css';

import Product from './Product.jsx';
import Home from './Home.jsx';
import ContactUs from './ContactUs.jsx';
import Anonymous from './Anonymous.jsx';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer } = Layout;

import { BrowserRouter as Router,
    Route,
    NavLink,
    Switch
   } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Layout className="layout">
                <Header>
                    <div className="logo" />   
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
                    <Menu.Item key="1"><NavLink to='/' activeClassName="active"><Icon type="home" />Home </NavLink></Menu.Item>
                    <Menu.Item key="2"><NavLink to='/contact-us' activeClassName="active"><Icon type="contacts" />Contact Us </NavLink></Menu.Item>
                    <Menu.Item key="3"><NavLink to='/product' activeClassName="active"><Icon type="shopping-cart" />Products </NavLink></Menu.Item>
                    </Menu>
                </Header>
                
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/contact-us" component={ContactUs} />
                    <Route path="/product" component={Product} />
                    <Route path="/:id" component={Anonymous} />
                </Switch>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
                </Layout>
            </Router>
        );
    }
}

export default App;