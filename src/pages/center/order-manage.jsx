import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tabs, Badge } from 'antd-mobile';
import { getCreditcardorders } from '@/store/orders/action';
import TabsControl from '@/components/Tabs/tabControl.jsx';
import './order-manage.css';

class OrderManage extends React.Component {
    state = {
        currentIndex: 0
    }

    componentWillMount() {
        document.title = '订单管理';
        this.props.getCreditcardorders();
    }

    changeTab = (index, tab) => {
        console.log(index, tab);
        console.log(this.props.orders);
    }

    render() {
        const tabs1 = [
            { title: '待付款' },
            { title: '已完成' },
            { title: '回收站' },
        ];
        const tabs2 = [
            { title: '已创建' },
            { title: '待审核' },
            { title: '已通过' },
            { title: '未通过' },
            { title: '回收站' },
        ]
        return (
            <div className="order-manage">
                <TabsControl>
                    <div name="代理" classes="iconfont icon-icon-test">
                        <Tabs tabs={tabs1}
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
                    <div name="信用卡" classes="iconfont icon-xinyongqia">
                        <Tabs tabs={tabs2}
                            initialPage={0}
                            onChange={(tab, index) => { this.changeTab(index, tab) }}
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
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                                <img src={"/static/images/no_data.png"} alt="" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                                <img src={"/static/images/no_data.png"} alt="" />
                            </div>
                        </Tabs>
                    </div>
                    <div name="贷款" classes="iconfont icon-weibiaoti5">
                        <Tabs tabs={tabs2}
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
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                                <img src={"/static/images/no_data.png"} alt="" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                                <img src={"/static/images/no_data.png"} alt="" />
                            </div>
                        </Tabs>
                    </div>
                </TabsControl>
            </div>
        );
    }
}

export default withRouter(connect(state =>({
    userInfo: state.user,
    orders: state.orders
}), {
    getCreditcardorders
})(OrderManage));