import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { WhiteSpace, InputItem } from 'antd-mobile';
import { WhiteSpace, List, InputItem, Button, Picker } from 'antd-mobile';
// import { district } from '../../utils/districtData';
import { createForm } from 'rc-form';
// import Immutable from 'immutable';
import './personInfo.css';

const Item = List.Item;

function Title(props) {
    return (<div className="title-nav">
        <span></span>
        {props.titleName}
    </div>);
}

class PersonInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sex: [{
                value: '1',
    　　　　     label: '男',
            }, {
                value: '0',
                label: '女'
            }]
        };
    }

    state = {
        userInfo: {},
    }

    componentWillMount() {
        document.title = '个人信息';
        console.log(this.props.user);
    }

    onSubmit = () => {
        this.props.form.validateFields({ force: true }, (error) => {
        if (!error) {
            console.log(this.props.form.getFieldsValue());
        } else {
            alert('Validation failed');
        }
        });
    }

    validateAccount = (rule, value, callback) => {
        if (value && value.length > 4) {
        callback();
        } else {
        callback(new Error('At least four charactors for account'));
        }
    }

    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className="person-info">
                <div className="person-info__top">
                    <img src={this.props.user.userInfo.UserPosterUrl} alt="" />
                    <div className="person-info__top-name">{this.props.user.userInfo.UserName}</div>
                </div>
                <Title titleName="提交个人申请资料" />
                <form>
                    <List>
                        <InputItem
                            {...getFieldProps('NickName')}
                            placeholder="请输入昵称"
                            defaultValue={this.props.user.userInfo.NickName}
                        >昵&nbsp;称</InputItem>
                        <InputItem
                            {...getFieldProps('UserName')}
                            placeholder="请输入昵称"
                            defaultValue={this.props.user.userInfo.UserName}
                        >姓&nbsp;名</InputItem>
                        <Picker
                            data={this.state.sex}
                            extra="请选择"
                            {...getFieldProps('UserSex', {
                                initialValue: ['1'],
                            })}
                        >
                            <List.Item arrow="horizontal">性&nbsp;别</List.Item>
                        </Picker>
                        <InputItem
                            {...getFieldProps('UserPhone')}
                            type="phone"
                            placeholder="请输入手机号"
                            defaultValue={this.props.user.userInfo.UserPhone}
                        >手机号</InputItem>
                        <InputItem
                            {...getFieldProps('VertifyCode')}
                            placeholder="请输入验证码"
                        >验证码<div className="vertify_btn" style={{fontSize: '15px', top: '13px'}}>获取验证码</div></InputItem>
                        <InputItem
                            {...getFieldProps('UserWeChatId')}
                            placeholder="请输入微信号"
                            defaultValue={this.props.user.userInfo.UserWeChatId}
                        >微信号</InputItem>
                        <InputItem
                            {...getFieldProps('UserArea')}
                            placeholder="请输入常住地址"
                            defaultValue={this.props.user.userInfo.UserArea}
                        >常住地址</InputItem>
                        <InputItem
                            {...getFieldProps('UserRemarks')}
                            placeholder="请输入备注"
                            defaultValue={this.props.user.userInfo.UserRemarks}
                        >备注</InputItem>
                        <Item>
                            <Button type="primary" size="small" inline onClick={this.onSubmit}>Submit</Button>
                        </Item>
                        {/* <Picker extra="请选择(可选)"
                            data={district}
                            title="Areas"
                            {...getFieldProps('district', {
                                initialValue: ['340000', '341500', '341502'],
                            })}
                            onOk={e => console.log('ok', e)}
                            onDismiss={e => console.log('dismiss', e)}
                        >
                            <List.Item arrow="horizontal">Multiple & cascader</List.Item>
                        </Picker> */}
                    </List>
                </form>
            </div>
        );
    }
}

const PersonInfoWrapper = createForm()(PersonInfo);

export default withRouter(connect(state => ({
    user: state.user,
}))(PersonInfoWrapper));