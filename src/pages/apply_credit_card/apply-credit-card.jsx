import React from 'react';
import { connect } from 'react-redux';
// import { is, fromJS } from 'immutable';
import PropTypes from 'prop-types';
import API from '@/api/api';
import { getApplyCreditCardData, setApplyCreditCardData } from '@/store/apply_credit_card/action';
import './apply-credit-card.css';

class ApplyCreditCard extends React.Component {
    static propTypes = {
        applyCreditCardData: PropTypes.object.isRequired,
    }

    state = {
        applyCreditCardData: {}
    }

    componentWillMount() {
        console.log('come into apply credit card');
        console.log(this.props.applyCreditCardData);
        this.setState({
            applyCreditCardData: this.props.applyCreditCardData 
        });
        console.log(API.getApplyBanks());
    }

    // getBanks = async () => {
    //                 <img src={this.state.applyCreditCardData.headerImageUrl} />
    //             </div>
    //             <div className="apply-credit-card-recommend">
    //                 <div className="recommend-left">
    //     let banks = await API.getApplyBanks();
    //     this.state.applyCreditCardData.bankList = banks;
    // } 

    render() {
        return (
            <div className="apply-credit-card-nav">
                <div className="apply-credit-card-top">
                    <img src={this.state.applyCreditCardData.leftRecommendImageUrl} alt=""/>
                </div>
                <div className="recommend-right">
                    <div className='recommend-right-top'>
                        <img src={this.state.applyCreditCardData.rightTopRecommendImageUrl} alt=""/>
                    </div>
                    <div className='recommend-right-bottom'>
                        <img src={this.state.applyCreditCardData.rightBottomRecommendImageUrl} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    userInfo: state.user,
    applyCreditCardData: state.applyCreditCardData,
}), {
    getApplyCreditCardData,
    setApplyCreditCardData,
})(ApplyCreditCard);
