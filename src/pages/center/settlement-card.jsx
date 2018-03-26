import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Modal, Grid } from 'antd-mobile';
// import { is, fromJS } from 'immutable';
import PropTypes from 'prop-types';
import { getUserInfo } from '@/store/info/action';
import { Picker, List, Toast, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import {district} from '../../utils/districtData'
import {banks} from '../../utils/banksData'

import './settlement-card.css';

class SettlementCard extends React.Component {
  state = {
    user: {},
    pickerAreaValue: ['340000', '341500', '341502'],
    pickerBankValue: ['CMB'],
    bankCardNumberError: false,
    bankCardNumber: '',
  }

  componentWillMount() {
    document.title = '修改结算卡';
    // 获取用户信息
    this.setState({
        user: getUserInfo()
    });
    console.log(this.props.userInfo)
    console.log(district)

  }

  getBankCardNumberValidate = async (value) => {
    let url = "https://ccdcapi.alipay.com/validateAndCacheCardInfo.json?_input_charset=utf-8&cardNo=" + value + "&cardBinCheck=true"
    let result = await this.axios('get', url);
    if (result) {
      return {"bank": result.bank, "validate": result.validate}
    } else {
      return {"bank": "", "validate": false};
    }
  }

  onBankCardNumberChange = (value) => {
    // 暂时默认通过验证
    if (true) {
      this.setState({
        bankCardNumberError: true,
      });
    } else {
      this.setState({
        bankCardNumberError: false,
      });
    }
    this.setState({
      bankCardNumber: value
    });
  }

  onBankCardNumberError = () => {
    if (this.state.bankCardNumberError) {
      Toast.info('Please enter 11 digits');
    }
  }

  render() {
    return ( 
      <div>
      <div> 修改结算卡信息 </div>
      <WhiteSpace size="lg" />
      <Picker
        title="选择开户银行"
        onChange={v => this.setState({pickerBankValue: v})}
        onOk={v => this.setState({ pickerBankValue: v })}
        value={this.state.pickerBankvalue}
        data={banks}
        cols={1}
      >
        <List.Item arrow="horizontal">开户银行:</List.Item>
      </Picker>
      <WhiteSpace size="lg" />
      <Picker
        extra="请选择(可选)"
        data={district}
        title="选择地区"
        value={this.state.pickerAreaValue}
        onChange={v => this.setState({ pickerAreaValue: v })}
        onOk={v => this.setState({ pickerAreaValue: v })}
      >
        <List.Item arrow="horizontal">所属地区:</List.Item>
      </Picker>

      <WhiteSpace size="lg" />
      <InputItem
        placeholder="请输入银行卡号"
        error={this.state.bankCardNumberError}
        onErrorClick={this.onBankCardNumberError}
        onChange={this.onBankCardNumberChange}
        value={this.state.bankCardNumber}
      >
        银行卡号:
      </InputItem>

      <WhiteSpace size="lg" />
      <InputItem
        placeholder="再次输入银行卡号"
        error={this.state.bankCardNumberError}
        onErrorClick={this.onBankCardNumberError}
        onChange={this.onBankCardNumberChange}
        value={this.state.bankCardNumber}
      >
        确认卡号:
      </InputItem>

      <WhiteSpace size="lg" />
      <Button type="primary">确认修改</Button><WhiteSpace />
      </div>
    );
  }
}

export default withRouter(connect(state => ({
    userInfo: state.user,
}), {
    getUserInfo
})(SettlementCard));
