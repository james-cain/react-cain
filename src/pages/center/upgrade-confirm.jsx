import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Toast } from 'antd-mobile';
import { getGrandUserInfo } from '@/store/info/action';
import WeApi from '../../utils/wechat';
import Back from '@/components/back/back';
import './upgrade-confirm.css';

class UpgradeConfirm extends React.Component {
    state = {
        height: 0,
        currentSteps: {}
    }
    componentDidMount() {
        document.title = '确认升级';
        this.props.steps.rules.forEach((item) => {
            if (item.selected) {
                this.setState({
                    currentSteps: item,
                    height: document.body.clientHeight
                });
            }
        })
        // 获取上级用户信息
        this.props.getGrandUserInfo().then((data) => { 
            console.log('获取到上级用户信息');
            console.log(data);
        }).catch((err) => {
            Toast.fail('获取专属客服数据失败，请联系管理员!', 2);
            console.log(err);
        });
    }
    pay = () => {
        
        WeApi.getUpgrade({
            headers: {
                'content-type': 'application/json'
            },
            data: {
                OriginUserLevel: this.props.user.userInfo.UserLevel,
                UpgradeUserLevel: this.state.currentSteps.UserLevel
            }
        }).then((data) => {
            console.log(data);
            const payInfo = data
            //onBridgeReady(payInfo);
            /* eslint no-undef: 0 */
            wx.chooseWXPay({
                appid: payInfo.appId,
                timestamp: payInfo.timeStamp,
                nonceStr: payInfo.nonceStr,
                package: payInfo.package,
                signType: payInfo.signType,
                paySign: payInfo.paySign,
                success: (res) => {
                    // 支付成功后的回调函数
                    console.log(res);
                    this.props.history.goBack(-2);
                }
            });
        }).catch((err) => {
            console.log(err);
        });
    }
    render () {
        return (
            <div className="upgrade-confirm-nav" style={{height: `${this.state.height}px`}}>
                {/* <div className="upgrade-confirm__title">
                    确认升级
                </div> */}
                <div className="upgrade-confirm__parent">
                    <div className="upgrade-confirm__parent-title">
                        <i className="upgrade-confirm__parent-title-icon iconfont icon-rencai"></i>
                        <span>上级推荐人</span>
                    </div>
                    <div className="upgrade-confirm__parent-name">
                        <img src={this.props.user.grandUserInfo.UserPosterUrl} alt="" />
                        <span>{this.props.user.grandUserInfo.UserName}</span>
                    </div>
                </div>
                <div className="upgrade-confirm__form">
                    <div className="upgrade-confirm__form-price">￥{this.state.currentSteps.UpgradeMoney}元</div>
                    <div className="upgrade-confirm__form-nav">
                        <div className="upgrade-confirm__form-nav-bg">
                            <span className="input-name">升级项目</span>
                            <div className="input-info">{this.state.currentSteps.Name}会员</div>
                        </div>
                        <div className="upgrade-confirm__form-nav-bg">
                            <span className="input-name">付款类型</span>
                            <div className="input-info">
                                <i className="input-info-icon iconfont icon-gou"></i>
                                <div className="input-info-name">在线支付</div>
                            </div>
                        </div>
                        <div className="upgrade-confirm__form-nav-bg">
                            <span className="input-name">付款方式</span>
                            <div className="input-info">
                                <div className="pay-type">
                                    <i className="input-info-pay-icon iconfont icon-gou"></i>
                                    <div className="input-info-name">微信支付</div>
                                </div>
                            </div>
                        </div>
                        <button className="apply-btn" onClick={this.pay}>立即支付</button>
                    </div>
                </div>
                <Back />
            </div>
        )
    }
}

export default withRouter(connect(state => ({
    steps: state.steps,
    user: state.user,
}), {
    getGrandUserInfo
})(UpgradeConfirm));
