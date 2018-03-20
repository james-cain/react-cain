import { Flex, WhiteSpace, Grid } from 'antd-mobile';
import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
// import { is, fromJS } from 'immutable';
import PropTypes from 'prop-types';
import API from '@/api/api';
import { getUserInfo } from '@/store/info/action';
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
        this.setState({
            applyCreditCardData: this.props.applyCreditCardData
        });
        this.initBanks()
    }

    initBanks = async () => {
        this.props.getCardData();
        // let banks = await API.getApplyBanks();
        // console.log(banks)
        // this.state.applyCreditCardData.bankList = banks;

        // this.state.banksGridData = banks.map(function(bank) {
        //     console.log(bank)
        //     return {icon: bank.BankIconUrl, text: bank.BankName}
        // });
        // console.log(this.state.banksGridData)

        // this.render(
        //     <Grid data={banksGridData} columnNum="2" hasLine={false} onClick={_el => console.log(_el)} />,
        //     document.getElementById('apply-banks')
        // );
    } 

    render() {
        return (
            <div className="apply-credit-card-nav">
                <div className="apply-credit-card-top">
                    <img src={this.state.applyCreditCardData.headerImageUrl} />
                </div>
                <WhiteSpace size="lg" />
                <div className="sub-title">
                    <h1>特别推荐</h1>
                </div>
                <WhiteSpace size="lg" />
                <div className="apply-credit-card-recommend">
                    <Flex>
                        <Flex.Item>
                            <img src={this.props.applyCreditCardData.leftRecommendImageUrl} />
                        </Flex.Item>
                        <Flex.Item>
                            <Flex direction="column">
                                <Flex.Item>
                                    <img class="img-block" src={this.props.applyCreditCardData.rightTopRecommendImageUrl} />
                                </Flex.Item>
                                <Flex.Item>
                                    <img class="img-block" src={this.props.applyCreditCardData.rightBottomRecommendImageUrl} />
                                </Flex.Item>
                            </Flex>
                        </Flex.Item>
                    </Flex>
                </div>
                <WhiteSpace size="lg" />
                <div className="sub-title">
                    <h1>快速办卡</h1>
                </div>
                <div id="apply-banks" className="apply-bottom">
                    <Grid data={this.props.applyCreditCardData.bankList} columnNum="2" hasLine={false} onClick={_el => console.log(_el)} />
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    applyCreditCardData: state.applyCreditCardData,
}), {
    getCardData,
    getApplyCreditCardData,
    setApplyCreditCardData,
})(ApplyCreditCard);
