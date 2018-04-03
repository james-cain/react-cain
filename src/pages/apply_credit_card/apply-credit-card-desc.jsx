import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './apply-credit-card-desc.css';

class ApplyCraditCardDesc extends React.Component {
    state = {
        bankDesc: {},
        id: ''
    }

    componentWillMount() {
        document.title = '信用卡申请';
        const match = this.props.match;
        // const bankDesc = {
        //     bankDetailImageUrl: '/static/images/bank/details/cmbc.jpg',
        //     bankApplyUrl: 'https://creditcard.cmbc.com.cn/wsonline/home/homeHZ.jhtml?recommendInfo=nOIc37/oeP0ewI68D8lZym00sdhxMGDb03x9dQD+D6t8ULlvvC1MuIlFGWvjk5s58EBLcdL7GKtXnYVehjoDVNIARvn+4EThpZm9MiwyJpTSoFIeYZjzDVeMyt5OXq8SgYuPEywGE0CezQ6cB3/O+CpAj0mCt74UZ9MZ+Of+CrjJqCiWISFCoER/UzeYGH3yYFU3dN0UiCuMysAfBOHvyc6UdMkNLnKlV+hzDXu7wm0uiGvUoufbZvu8+XTYMqfc2S2mmDPZxanF5RnUpmThGg1U9CMeT+zh8d4/FFF+8P1Yc1W+CQS93ifLEfwFZHunnMqRdmwphPwMhydJUXQLy8kShv/9VrnDFISWVsRs9/xcB39Frox3FYTZ3NMdVHtauLVT9WpVhuT58ZOCHQOkAM/Tv/YkMTt9JJ9NB7DZU3Ld8wJQ6fOIutTZthgNhIfkTChIDqRwzrJ/gRGkZ526PEbYC06UsK8+9CFHilURvgXXkH3lRNDgAIIsEaPoEX7d&time=1521469216031&time=1521469219798',
        //     bankNo: 1
        // }
        let bankDesc = {};
        this.props.applyCreditCardData.bankList.forEach((item) => {
            if (item.bankNo === 1 * match.params.id) {
                bankDesc = item;
            }
        });
        // const bankDesc = match.params.id ? this.props.applyCreditCardData.bankList[match.params.id] : {};
        this.setState({
            bankDesc,
            id: match.params.id
        });
    }

    render() {
        return (
            <div>
                <img className="credit-card-img" src={this.state.bankDesc.bankDetailImageUrl} alt="" />
                <div className="credit-card-btn-nav">
                    <button className="credit-card-btn__guide"
                        onClick={() => this.props.history.push('/applyCreditCardGuide')}
                        >申请指南</button>
                    <button className="credit-card-btn__apply"
                        onClick={() => this.props.history.push(`/applyCreditCardSubmit/${this.state.id}`)}
                        >我要申请</button>
                </div>
            </div>
        )
    }
}

export default withRouter(connect(state => ({
    applyCreditCardData: state.applyCreditCardData,
}))(ApplyCraditCardDesc));
