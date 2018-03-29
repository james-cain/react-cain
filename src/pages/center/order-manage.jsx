import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tabs } from 'antd-mobile';
import { getCreditcardorders } from '@/store/orders/action';
import TabsControl from '@/components/Tabs/tabControl.jsx';
import './order-manage.css';

class OrderManage extends React.Component {
    state = {
        currentCreditCardIndex: 0,
        // 信用卡不同状态的数组
        creditCardList: [],
        tabContentHeight: 0,
    }

    componentWillMount() {
        document.title = '订单管理';
        this.props.getCreditcardorders();
        const height = document.body.clientHeight;
        console.log(height);
        this.setState({
            tabContentHeight: height - 136
        });
    }

    changeTab = (index, tab) => {
        console.log(index, tab);
        console.log(this.props.orders);
    }

    getFilterList = (orders, selectedIndex) => {
        const ordersBack = orders ? orders : [];
        console.log('ordersBack.........');
        console.log(ordersBack);
        console.log(selectedIndex);
        return ordersBack.filter((item) => {
            return item.ApplyState === selectedIndex
        });
    }

    changeCreditCardTab = (index, tab) => {
        this.setState({
            currentCreditCardIndex: index,
            creditCardList: this.getFilterList(this.props.orders.creditcardorders, index)
        }, () => {
            console.log(this.state);
        });
    }

    setTabData = (id) => {
        console.log(id);
        if (id === 1) {
            this.setState({
                creditCardList: this.getFilterList(this.props.orders.creditcardorders, this.state.currentCreditCardIndex)
            }, () => {
                console.log(this.state);
            });
        }
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
                <TabsControl onTabControlChange={(id) => this.setTabData(id)}>
                    <div name="代理" classes="iconfont icon-icon-test">
                        <Tabs tabs={tabs1}
                            initialPage={0}
                            onChange={(tab, index) => { console.log('onChange', index, tab); }}
                            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: this.state.tabContentHeight, backgroundColor: '#fff' }}>
                                <img src={"/static/images/no_data.png"} alt="" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: this.state.tabContentHeight, backgroundColor: '#fff' }}>
                                <img src={"/static/images/no_data.png"} alt="" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: this.state.tabContentHeight, backgroundColor: '#fff' }}>
                                <img src={"/static/images/no_data.png"} alt="" />
                            </div>
                        </Tabs>
                    </div>
                    <div name="信用卡" classes="iconfont icon-xinyongqia">
                        <Tabs tabs={tabs2}
                            initialPage={0}
                            onChange={(tab, index) => { this.changeCreditCardTab(index, tab) }}
                            onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                        >
                            <div style={{ height: this.state.tabContentHeight }}>
                                {
                                    this.state.creditCardList.length === 0 ? (
                                        <img src={"/static/images/no_data.png"} alt="" />
                                    ) : this.state.creditCardList.map((val, index) =>
                                            <div className="order-item">
                                                <div className="order-item__top">
                                                    <span className="order-item__top-company">{val.BankName}</span>
                                                    <i class="iconfont icon-dianhua1"></i>
                                                    <i class="iconfont icon-shanchu"></i>
                                                </div>
                                                <div className="order-item__bottom">
                                                    <div className="order-item__bottom-name">
                                                        <span className="order-item__bottom-title">姓名</span>
                                                        <span className="order-item__bottom-data">{val.ApplyUserName}</span>
                                                    </div>
                                                    <div className="order-item__bottom-tel">
                                                        <span className="order-item__bottom-title">手机号</span>
                                                        <span className="order-item__bottom-data">{val.ApplyUserPhone}</span>
                                                    </div>
                                                    <div className="order-item__bottom-updatetime">
                                                        <span className="order-item__bottom-title">申请时间</span>
                                                        <span className="order-item__bottom-data">{val.ApplyTimeFormat}</span>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                }
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: this.state.tabContentHeight, backgroundColor: '#fff' }}>
                                <img src={"/static/images/no_data.png"} alt="" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: this.state.tabContentHeight, backgroundColor: '#fff' }}>
                                <img src={"/static/images/no_data.png"} alt="" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: this.state.tabContentHeight, backgroundColor: '#fff' }}>
                                <img src={"/static/images/no_data.png"} alt="" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: this.state.tabContentHeight, backgroundColor: '#fff' }}>
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
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: this.state.tabContentHeight, backgroundColor: '#fff' }}>
                                <img src={"/static/images/no_data.png"} alt="" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: this.state.tabContentHeight, backgroundColor: '#fff' }}>
                                <img src={"/static/images/no_data.png"} alt="" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: this.state.tabContentHeight, backgroundColor: '#fff' }}>
                                <img src={"/static/images/no_data.png"} alt="" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: this.state.tabContentHeight, backgroundColor: '#fff' }}>
                                <img src={"/static/images/no_data.png"} alt="" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: this.state.tabContentHeight, backgroundColor: '#fff' }}>
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