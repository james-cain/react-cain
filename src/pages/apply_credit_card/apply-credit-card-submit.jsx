import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { WhiteSpace, Toast, Modal } from 'antd-mobile';
import API from '@/api/api';
import './apply-credit-card-submit.css';

function Title(props) {
    return (<div className="title-nav">
        <span></span>
        {props.titleName}
    </div>);
}

class ApplyCreditCardSubmit extends React.Component {
    state = {
        bankDesc: {},
        name: '',
        idCard: '',
        tel: '',
        sms: ''
    }

    componentWillMount() {
        document.title = '信息录入';
        const match = this.props.match;
        console.log(match);
        const bankDesc = {
            bankDetailImageUrl: '/static/images/bank/details/cmbc.jpg',
            bankApplyUrl: 'https://creditcard.cmbc.com.cn/wsonline/home/homeHZ.jhtml?recommendInfo=nOIc37/oeP0ewI68D8lZym00sdhxMGDb03x9dQD+D6t8ULlvvC1MuIlFGWvjk5s58EBLcdL7GKtXnYVehjoDVNIARvn+4EThpZm9MiwyJpTSoFIeYZjzDVeMyt5OXq8SgYuPEywGE0CezQ6cB3/O+CpAj0mCt74UZ9MZ+Of+CrjJqCiWISFCoER/UzeYGH3yYFU3dN0UiCuMysAfBOHvyc6UdMkNLnKlV+hzDXu7wm0uiGvUoufbZvu8+XTYMqfc2S2mmDPZxanF5RnUpmThGg1U9CMeT+zh8d4/FFF+8P1Yc1W+CQS93ifLEfwFZHunnMqRdmwphPwMhydJUXQLy8kShv/9VrnDFISWVsRs9/xcB39Frox3FYTZ3NMdVHtauLVT9WpVhuT58ZOCHQOkAM/Tv/YkMTt9JJ9NB7DZU3Ld8wJQ6fOIutTZthgNhIfkTChIDqRwzrJ/gRGkZ526PEbYC06UsK8+9CFHilURvgXXkH3lRNDgAIIsEaPoEX7d&time=1521469216031&time=1521469219798',
            bankNo: 1
        }
        // const bankDesc = match.params.id ? this.props.applyCreditCardData.bankList[match.params.id] : {};
        this.setState({
            bankDesc,
        });
    }

    submitCreditCardInfo = async () => {
        const alert = Modal.alert;
        const self = this;
        if (!this.props.userInfo.userInfo.UserId) {
            Toast.info('用户信息已过期，请退回首页认证！', 2);
            return;
        }
        if (!this.state.name) {
            Toast.info('申请人姓名不能为空！', 2);
            return;
        }
        if (!this.state.idCard) {
            Toast.info('身份证号不能为空！', 2);
            return;
        }
        if (!this.isIDCard(this.state.idCard)) {
            Toast.info('身份证输入不合法！', 2);
            return;
        }
        if (!this.state.tel) {
            Toast.info('手机号码不能为空！', 2);
            return;
        }
        if (!this.isTel(this.state.tel)) {
            Toast.info('手机号输入不合法', 2);
            return;
        }
        if (!this.state.sms) {
            Toast.info('短信号码不能为空！', 2);
            return;
        }
        alert('温馨提示', '确认填写的信息真实性，否则影响佣金哦~', [
            { text: '取消', onPress: () => console.log('cancel') },
            {
              text: '确认',
              onPress: () =>
                new Promise((resolve) => {
                    API.produceApplyInfo({
                        params: {
                            headers: {
                                'content-type': 'application/json'
                            },
                            data: {
                                UserId: self.props.userInfo.userInfo.UserId,
                                ApplyUserName: self.state.name,
                                ApplyUserIDCard: self.state.idCard,
                                ApplyUserPhone: self.state.tel,
                                ApplyBankNo: self.state.bankDesc.bankNo
                            }
                        }
                    }).then((result) => {
                        Toast.success('信息提交成功!', 2);
                        window.setTimeout(() => window.location.href = self.state.bankDesc.bankApplyUrl, 2000);
                    }).catch((err) => {
                        console.log(err);
                        Toast.fail('请求失败，请联系管理员!', 2);
                    });
                    setTimeout(resolve, 1000);
                }),
            },
        ]);
    }

    isIDCard = (card) => {
        const reg = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/;
        return reg.test(card);
    }

    isTel = (tel) => {
        const reg = /^[1][3,4,5,7,8][0-9]{9}$/;
        return reg.test(tel);
    }

    nameHandleChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    idCardHandleChange = (event) => {
        this.setState({
            idCard: event.target.value
        });
    }

    telHandleChange = (event) => {
        this.setState({
            tel: event.target.value
        });
    }

    smsHandleChange = (event) => {
        this.setState({
            sms: event.target.value
        });
    }

    render() {
        return (
            <div className="submit-credit-card">
                <img className="submit-credit-card-img" src={'/static/images/creditcard/submit-header.png'} alt="" />
                <Title titleName="申请人基本信息" />
                <div className="submit-credit-card-info">
                    <img class="submit-credit-card-info__img" src={'/static/images/creditcard/info-msg.png'} alt="" />
                    <span className="submit-credit-card-info__desc">注：在平台输入的申请必须与银行申请填写的信息一致，否则视为无效，将无法结算佣金！</span>
                    <div className="submit-credit-card-info__nav">
                        <div className="submit-credit-card-info__nav-bg">
                            <i className="input-icon iconfont icon-ren"></i>
                            <input className="input-info" placeholder="姓名" value={this.state.name} onChange={this.nameHandleChange} />
                        </div>
                        <div className="submit-credit-card-info__nav-bg">
                            <i className="input-icon iconfont icon-credentials_icon"></i>
                            <input className="input-info" placeholder="身份证号" value={this.state.idCard} onChange={this.idCardHandleChange} />
                        </div>
                        <div className="submit-credit-card-info__nav-bg">
                            <i className="input-icon iconfont icon-tel"></i>
                            <input className="input-info" placeholder="手机号码" value={this.state.tel} onChange={this.telHandleChange}/>
                        </div>
                        <div className="submit-credit-card-info__nav-bg">
                            <i className="input-icon iconfont icon-duanxin"></i>
                            <input className="input-info" placeholder="短信号码" value={this.state.sms} onChange={this.smsHandleChange}/>
                        </div>
                        <button className="apply-btn" onClick={(e) => this.submitCreditCardInfo(e)}>提交申请</button>
                    </div>
                </div>
                <WhiteSpace size="xs" />
                <Title titleName="已保存的申请人信息" />
            </div>
        );
    }
}

export default withRouter(connect(state => ({
    applyCreditCardData: state.applyCreditCardData,
    userInfo: state.user,
}))(ApplyCreditCardSubmit));