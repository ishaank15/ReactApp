import React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
import { Card, Col, Row } from 'antd';

export default class Product extends React.Component {
    render() {
        
        return ( 
            <Content style={{ padding: '0 50px' }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <div style={{ background: '#ECECEC', padding: '30px' }}>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="Men's Clothing" bordered={false}>
                                    <img src='./images/men.jpg'  align='center' height="300" width="300"/>
                                        <br/><br/>The range is available at pocket-friendly prices so buy men's wear online at Snapdeal today. Shop online for Suits
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Women's Clothing" bordered={false}>
                                    <img src='./images/women.jpg'  align='center' height="300" width="300"/>
                                        <br/><br/>Online Shopping - Shop Women's Clothing online at low prices in India. Buy latest range of Skirts, Dresses, Tops, Tunics, Shirts,
                                </Card>
                            </Col>
                            <Col span={8}>
                                <Card title="Children's Clothing" bordered={false}>
                                    <img src='./images/child.png'  align='center' height="300" width="300"/>
                                    <br/><br/>Shop for comfortable and trendy clothes for boys, girls, babies. Explore a wide range of tshirts, jeans, dresses and ethnic wear from brands like Mothercare, The Children’s place, Disney, F S Mini Klub . Also check out the new season collection.
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Content>
        
        )
    
    }
}
