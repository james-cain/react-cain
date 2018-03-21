import { Flex, WhiteSpace, Badge } from 'antd-mobile';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
// import { is, fromJS } from 'immutable';
import PropTypes from 'prop-types';
import { getApplyCreditCardData, getCardData, setApplyCreditCardData } from '@/store/apply_credit_card/action';
import './apply-credit-card.css';

class ApplyCreditCard extends React.Component {
    static propTypes = {
        applyCreditCardData: PropTypes.object.isRequired,
        banksGridData: PropTypes.object.isRequired,
    }

    state = {
        applyCreditCardData: {},
        banksGridData: [],
    }

    componentWillMount() {
        document.title = '办信用卡';
        console.log(this.props);
        this.setState({
            applyCreditCardData: this.props.applyCreditCardData
        });
        this.initBanks();
    }

    initBanks = async () => {
        this.props.getCardData();
    }

    jumpToCreditCardDesc = (id = '', e) => {
        this.props.history.push(`/applyCreditCardDesc/${id}`);
    }

    render() {
        return (
            <div className="apply-credit-card-nav">
                <div className="apply-credit-card-top" onClick={() => {this.props.history.push('/');}}>
                    <img src={this.state.applyCreditCardData.headerImageUrl} alt=""/>
                </div>
                <WhiteSpace size="xs" />
                <div className="sub-title">
                    特别推荐
                </div>
                <WhiteSpace size="xs" />
                <div className="apply-credit-card-recommend">
                    <div className="apply-credit-card-recommend__left">
                        <img className="img-block-big" src={this.props.applyCreditCardData.leftRecommendImageUrl} alt=""/>
                    </div>
                    <div className="apply-credit-card-recommend__right">
                        <div className="apply-credit-card-recommend__right-block">
                            <img className="img-block-small" src={this.props.applyCreditCardData.rightTopRecommendImageUrl} alt="" />
                        </div>
                        <div className="apply-credit-card-recommend__right-block mt4" onClick={(e) => this.jumpToCreditCardDesc(1, e)}>
                            <img className="img-block-small" src={this.props.applyCreditCardData.rightBottomRecommendImageUrl} alt="" />
                        </div>
                    </div>
                </div>
                <WhiteSpace size="xs" />
                <div className="sub-title">
                    快速办卡
                </div>
                <div id="apply-banks" className="apply-bottom">
                    <Flex wrap="wrap">
                        {
                            this.props.applyCreditCardData.bankList.map((item) => {
                                return (
                                    <div className="placeholder" onClick={(e) => this.jumpToCreditCardDesc(item.bankNo, e)}>
                                        <div className="pic">
                                            <img src={item.icon} alt="" />
                                        </div>
                                        <div className="word-nav">
                                            <div className="company-name">
                                                {item.text}
                                                {
                                                    item.bankFlag &&
                                                    <Badge text={item.bankFlag} style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#dd2233', borderRadius: 2 }} />
                                                }
                                            </div>
                                            <div className="company-desc">
                                                {item.bankDesc}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </Flex>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(state => ({
    applyCreditCardData: state.applyCreditCardData,
}), {
    getCardData,
    getApplyCreditCardData,
    setApplyCreditCardData,
})(ApplyCreditCard));
