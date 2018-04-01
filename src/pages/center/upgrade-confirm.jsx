import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import WeApi from '../../utils/wechat';
import './upgrade-confirm.css';

function onBridgeReady(payInfo){
    WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
            "appId": payInfo.appid,     //公众号名称，由商户传入     
            "timeStamp": payInfo.timestamp,         //时间戳，自1970年以来的秒数     
            "nonceStr": payInfo.noncestr, //随机串     
            "package": payInfo.package,     
            "signType":"MD5",         //微信签名方式：     
            "paySign": payInfo.sign //微信签名 
        },
        function(res){     
            if(res.err_msg == "get_brand_wcpay_request:ok" ) {}     // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。 
        }
    ); 
 }
//  if (typeof WeixinJSBridge == "undefined"){
//     if( document.addEventListener ){
//         document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
//     }else if (document.attachEvent){
//         document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
//         document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
//     }
//  }else{
//     onBridgeReady();
//  }

class UpgradeConfirm extends React.Component {
    state = {
        height: 0
    }
    componentDidMount() {
        document.title = '确认升级';
        this.setState({
            height: document.body.clientHeight
        });
    }
    pay = () => {
        WeApi.getUpgrade({
            headers: {
                'content-type': 'application/json'
            },
            data: {
                OriginUserLevel: 3,
                UpgradeUserLevel: 1
            }
        }).then((data) => {
            console.log(data);
            const payInfo = data
            onBridgeReady(payInfo);
            /* eslint no-undef: 0 */
            // wx.chooseWXPay({
            //     appid: payInfo.appid,
            //     timestamp: payInfo.timestamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
            //     nonceStr: payInfo.noncestr, // 支付签名随机串，不长于 32 位
            //     package: payInfo.package,
            //     // package: `prepay_id=${payInfo.prepayid}`, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
            //     // signType: 'MD5', // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
            //     paySign: payInfo.sign, // 支付签名
            //     success: function (res) {
            //         // 支付成功后的回调函数
            //         console.log(res);
            //     }
            // });
        }).catch((err) => {
            console.log(err);
        });
    }
    render () {
        return (
            <div className="upgrade-confirm-nav" style={{height: `${this.state.height}px`}}>
                <div className="upgrade-confirm__title">
                    确认升级
                </div>
                <div className="upgrade-confirm__parent">
                    <div className="upgrade-confirm__parent-title">
                        <i className="upgrade-confirm__parent-title-icon iconfont icon-rencai"></i>
                        <span>上级推荐人</span>
                    </div>
                    <div className="upgrade-confirm__parent-name">
                        <img src="http://thirdwx.qlogo.cn/mmopen/vi_32/Ry7yiba1dOPWG…BV9IxgvIOaErBWcAuR7cwIo54XvxWxY19HKVH3yB00DLA/132" alt="" />
                        <span>陈建</span>
                    </div>
                </div>
                <div className="upgrade-confirm__form">
                    <div className="upgrade-confirm__form-price">￥598元</div>
                    <div className="upgrade-confirm__form-nav">
                        <div className="upgrade-confirm__form-nav-bg">
                            <span className="input-name">升级项目</span>
                            <div className="input-info">钻石卡会员</div>
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
            </div>
        )
    }
}

export default withRouter(connect(state => ({
    steps: state.steps,
    user: state.user,
}))(UpgradeConfirm));