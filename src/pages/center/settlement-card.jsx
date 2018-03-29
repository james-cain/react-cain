import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Picker, List, Toast, InputItem, Button } from 'antd-mobile';
import { createForm } from 'rc-form';
import { getUserInfo, setUserInfo } from '@/store/info/action';
import API from '@/api/api';
import { district } from '../../utils/districtData'
import { banks } from '../../utils/banksData'

import './settlement-card.css';

const Item = List.Item;

function Title(props) {
  return (<div className="title-nav">
      <span></span>
      {props.titleName}
  </div>);
}

class SettlementCard extends React.Component {
  state = {
    pickerAreaValue: ['340000', '341500', '341502'],
    pickerBankValue: ['CMB'],
    bankCardNumber: '',
  }

  componentWillMount() {
    document.title = '修改结算卡';
    console.log(this.props.userInfo);
  }

  getDistrictLabel = (bankAreaArr) => {
    let bankLabelArr = [];
    let countyNo = '';
    let cityNo = '';
    let provinceNo = '';
    console.log(bankAreaArr);
    if (bankAreaArr && bankAreaArr.length >= 3) {
      countyNo = bankAreaArr[2];
      cityNo = bankAreaArr[1];
      provinceNo = bankAreaArr[0];
      console.log(countyNo, cityNo, provinceNo);
      for (let i = 0; i < district.length; i++) {
        let provinceItem = district[i];
        if (provinceItem.value === provinceNo) {
          bankLabelArr.push(provinceItem.label);
          for (let j = 0; j < provinceItem.children.length; j++) {
            let cityItem = provinceItem.children[j];
            if (cityItem.value === cityNo) {
              bankLabelArr.push(cityItem.label);
              for (let k = 0; k < cityItem.children.length; k++) {
                let countyItem = cityItem.children[k];
                if (countyItem.value === countyNo) {
                  bankLabelArr.push(countyItem.label);
                  break;
                }
              }
              break;
            }
          }
          break;
        }
      }
    }
    console.log(bankLabelArr);
    return bankLabelArr;
  }

  getBankLabel = (bankArr) => {
    let bankName = '';
    if (bankArr) {
      banks.forEach((item) => {
        if (bankArr[0] === item.value) {
          bankName = item.label;
        }
      });
    }
    console.log(bankName);
    return bankName;
  }

  onSubmit = async () => {
    this.props.form.validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(this.props.form.getFieldsValue());
        let formData = this.props.form.getFieldsValue();
        let bankLabelArr = [];
        let bankName = '';
        let cardNumber = formData.UserSettlementCardNumber.replace(' ', '');
        let reCardNumber = formData.ReUserSettlementCardNumber.replace(' ', '');
        if (formData.UserSettlementBankArea) {
          bankLabelArr = this.getDistrictLabel(formData.UserSettlementBankArea);
        } else {
          Toast.fail('开户行地区必选!', 2);
          return;
        }
        if (formData.UserSettlementBankName) {
          bankName = this.getBankLabel(formData.UserSettlementBankName);
        } else {
          Toast.fail('开户行名称必选!', 2);
          return;
        }
        if (!cardNumber) {
          Toast.fail('银行卡号必填!', 2);
          return;
        }
        if (!reCardNumber) {
          Toast.fail('确认卡号必填!', 2);
          return;
        }
        if (!(cardNumber === reCardNumber)) {
          Toast.fail('卡号填写不一致，确认卡号是否正确!', 2);
          return;
        }
        let form = {};
        form.UserSettlementBankProvince = bankLabelArr[0];
        form.UserSettlementBankCity = bankLabelArr[1];
        form.UserSettlementBankCounty = bankLabelArr[2];
        form.UserSettlementCardNumber = cardNumber;
        form.UserSettlementBankName = bankName;
        console.log(form);
        API.updateCurrentUser({
          params: {
            headers: {
              'content-type': 'application/json'
            },
            data: form,
          }
        }).then((result) => {
          Toast.success('信息修改成功!', 2);
          API.getCurrentUser().then((result) => {
            const user = {};
            user.userInfo = result;
            this.props.setUserInfo(user);
          });
        }).catch((err) => {
          console.log(err);
          Toast.fail('请求失败，请联系管理员!', 2);
        });
      } else {
        alert('Validation failed');
      }
    });
  }

  render() {
    const { getFieldProps } = this.props.form;
    return ( 
      <div>
        <Title titleName="以下为已绑定结算卡信息" />
        <List>
          <Item extra={this.props.userInfo.userInfo.UserSettlementCardNumber}>卡号</Item>
        </List>
        <Title titleName="输入结算卡信息" />
        <form>
          <List>
            <Picker
              {...getFieldProps('UserSettlementBankName')}
              title="选择开户银行"
              data={banks}
              cols={1}
            >
              <List.Item arrow="horizontal">开户银行</List.Item>
            </Picker>
            <Picker
              {...getFieldProps('UserSettlementBankArea')}
              data={district}
              title="选择地区"
            >
              <List.Item arrow="horizontal">所属地区</List.Item>
            </Picker>
            <InputItem
              {...getFieldProps('UserSettlementCardNumber')}
              placeholder="请输入银行卡号"
              type="bankCard"
            >
              银行卡号
            </InputItem>
            <InputItem
              {...getFieldProps('ReUserSettlementCardNumber')}
              placeholder="再次输入银行卡号"
              type="bankCard"
            >
              确认卡号
            </InputItem>
            <Item>
                <Button type="warning" onClick={this.onSubmit}>确认修改</Button>
            </Item>
          </List>
        </form>
      </div>
    );
  }
}

const SettlementCardWrapper = createForm()(SettlementCard);

export default withRouter(connect(state => ({
    userInfo: state.user,
}), {
    getUserInfo,
    setUserInfo,
})(SettlementCardWrapper));
