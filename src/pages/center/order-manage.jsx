import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tabs, Badge } from 'antd-mobile';

const tabs = [
    { title: <Badge text={'3'}>First Tab</Badge> },
    { title: <Badge text={'20'}>Second Tab</Badge> },
    { title: <Badge dot>Third Tab</Badge> },
];

class OrderManage extends React.Componnet {
    render() {
        return (
            <div>
                <Tabs tabs={tabs}
                    initialPage={1}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of first tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of second tab
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        Content of third tab
                    </div>
                </Tabs>
            </div>
        );
    }
}

export default withRouter(connect(state =>({
    userInfo: state.user,
}))(OrderManage));