import { Collapse, Layout } from 'antd';
const Panel = Collapse.Panel;
const { Content } = Layout;

import React from 'react';

export default class UserList extends React.Component {

	render() {
        const users =  Meteor.users.find().fetch();
        console.log('...........', users)
		return (
            <Content style={{ padding: '0 50px', marginTop: 64 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                <Collapse accordion>
                    {users.map((item)=> (
                        <Panel header={item.emails ? item.emails[0].address: item._id} key={item._id}>
                            <p>User details will be mentioned here later</p>
                        </Panel>
                    ))}
                </Collapse>
                </div>
            </Content>
		)
	}
}




