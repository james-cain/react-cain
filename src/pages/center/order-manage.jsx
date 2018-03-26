import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tabs, Badge } from 'antd-mobile';
import './order-manage.css';

class OrderManage extends React.Component {

    componentWillMount() {
        document.title = '订单管理';
    }

    render() {
        const tabs = [
            { title: <Badge dot>待付款</Badge> },
            { title: <Badge dot>已完成</Badge> },
            { title: <Badge dot>回收站</Badge> },
        ];
        return (
            <div className="order-manage">
                <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        <img src={"/static/images/no_data.png"} alt="" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        <img src={"/static/images/no_data.png"} alt="" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                        <img src={"/static/images/no_data.png"} alt="" />
                    </div>
                </Tabs>
            </div>
        );
    }
}

export default withRouter(connect(state =>({
    userInfo: state.user,
}))(OrderManage));