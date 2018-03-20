import React from 'react';
import { connect } from 'react-redux';
import { Modal, Grid } from 'antd-mobile';
// import { is, fromJS } from 'immutable';
import PropTypes from 'prop-types';
import { getUserInfo } from '@/store/info/action';
import './center.css';

function closest(el, selector) {
    const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelctor || el.msMathesSelector;
    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }
        el = el.parentElement;
    }
    return null;
}
class Center extends React.Component {
    static propTypes = {
        userInfo: PropTypes.object.isRequired,
    }

    state = {
        user: {},
        modalOpen: false,
        menu: [],
    }

    componentWillMount() {
        document.title = '会员中心';
        console.log('come inot center');
        console.log(this.props.userInfo);
        const list = [{
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: '订单管理'
        }, {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: '个人信息'
        }, {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: '修改结算卡'
        }, {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: '专属客服'
        }, {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: '系统公告'
        }, {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: '更新资料'
        }, {
            icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
            text: '新手指引'
        }];
        // this.setState({
        //     user: this.props.userInfo.userInfo
        // });
        this.setState({
            menu: list
        });
    }

    showModal = key => (e) => {
        e.preventDefault(); // 修复Android上点击穿透
        this.setState({
            [key]: true,
        });
    }

    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    onWrapTouchStart = (e) => {
        // fix touch to scroll background page on IOS
        if (!/iphone|ipod|ipad/i.test(navigator.userAgent)) {
            return;
        }
        const pNode = closest(e.target, '.am-modal-content');
        if (!pNode) {
            e.preventDefault();
        }
    }

    render() {
        return (
            <div className="center-nav">
                <div className="center-top">
                    <div className="center-top__uesr">
                        {/* <img src={this.state.user.UserPosterUrl} alt="" /> */}
                        <div className="center-top__userInfo">
                            <div className="center-top__userInfo-username">xiexiexie</div>
                            <div className="center-top__userInfo-no">编号：111111</div>
                            {/* <div className="center-top__userInfo-username">{this.state.user.UserName}</div>
                            <div className="center-top__userInfo-no">编号：{this.state.user.UserNo}</div> */}
                        </div>
                    </div>
                    <div className="center-top__benefit">
                        <div className="center-top__title">累计收益（元）<span onClick={this.showModal('modalOpen')}>？</span></div>
                        <div className="center-top__total-benefit">+0</div>
                        {/* <div className="center-top__total-benefit">+{this.state.user.UserTotalBenefit}</div> */}
                    </div>
                </div>
                <div className="center-middle">
                    <div className="center-middle__top">
                        <div className="center-middle__title">可提现总额（元）</div>
                        <div className="center-middle__money-big">
                            0.00
                        </div>
                    </div>
                    <div className="center-middle__bottom">
                        <div className="center-middle__flex center-middle__left">
                            <div className="center-middle__title">分润账户（元）</div>
                            <div className="center-middle__money-small">
                                0.00
                                <button className="center-middle__btn">提现</button>
                            </div>
                        </div>
                        <div className="center-middle__flex center-middle__right">
                            <div className="center-middle__title">红包账户（元）</div>
                            <div className="center-middle__money-small">
                                0.00
                                <button className="center-middle__btn">提现</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="center-bottom">
                    <Grid data={this.state.menu} hasLine={false} onClick={_el => console.log(_el)} />
                </div>
                <Modal
                    className="cain-modal"
                    visible={this.state.modalOpen}
                    transparent
                    maskClosable={true}
                    onClose={this.onClose('modalOpen')}
                    title="温馨提示"
                    footer={[{
                        text: '确定',
                        onPress: () => {
                            this.onClose('modalOpen')();
                        }
                    }]}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div style={{height: 95, paddingTop: 30, boxSizing: 'border-box', color: '#828282', fontSize: '12px'}}>
                        累计收益=分润账户分润总额+红包账户抢到红包+红包账户红包分润
                    </div>
                </Modal>
            </div>
        );
    }
}

export default connect(state => ({
    userInfo: state.user,
}), {
    getUserInfo
})(Center);