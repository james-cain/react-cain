import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { List, InputItem, Button, Picker, Toast } from 'antd-mobile';
// import { district } from '../../utils/districtData';
import { setUserInfo } from '@/store/info/action';
import API from '@/api/api';
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

    onSubmit = async () => {
        this.props.form.validateFields({ force: true }, (error) => {
            if (!error) {
                console.log(this.props.form.getFieldsValue());
                let formData = this.props.form.getFieldsValue();
                if (formData.UserSex) {
                    formData.UserSex = formData.UserSex[0];
                }
                console.log(formData);
                API.updateCurrentUser({
                    params: {
                        headers: {
                            'content-type': 'application/json'
                        },
                        data: formData,
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

    validateAccount = (rule, value, callback) => {
        if (value && value.length > 4) {
        callback();
        } else {
        callback(new Error('At least four charactors for account'));
        }
    }

    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="person-info">
                <div className="person-info__top">
                    <img src={this.props.user.userInfo.UserPosterUrl} alt="" />
                    <div className="person-info__top-name">{this.props.user.userInfo.UserName}</div>
                    <div className="upgrade-flag" onClick={() => this.props.history.push('/upgrade')}>
                        <i className="iconKing iconfont icon-kaitonghuiyuanyuan"></i>
                        <span>
                            专员申请
                            <i className="iconArrow iconfont icon-youjiantou"></i>
                        </span>
                        
                    </div>
                </div>
                <Title titleName="提交个人申请资料" />
                <form>
                    <List>
                        <InputItem
                            {...getFieldProps('NickName', {
                                initialValue: this.props.user.userInfo.NickName
                            })}
                            placeholder="请输入昵称"
                        >昵&nbsp;称</InputItem>
                        <InputItem
                            {...getFieldProps('UserName', {
                                initialValue: this.props.user.userInfo.UserName
                            })}
                            placeholder="请输入昵称"
                        >姓&nbsp;名</InputItem>
                        <Picker
                            data={this.state.sex}
                            extra="请选择"
                            {...getFieldProps('UserSex', {
                                initialValue: [
                                    '' + this.props.user.userInfo.UserSex
                                ],
                            })}
                        >
                            <List.Item arrow="horizontal">性&nbsp;别</List.Item>
                        </Picker>
                        <InputItem
                            {...getFieldProps('UserPhone', {
                                initialValue: this.props.user.userInfo.UserPhone
                            })}
                            type="phone"
                            placeholder="请输入手机号"
                        >手机号</InputItem>
                        <InputItem
                            {...getFieldProps('UserWeChatId', {
                                initialValue: this.props.user.userInfo.UserWeChatId
                            })}
                            placeholder="请输入微信号"
                        >微信号</InputItem>
                        <InputItem
                            {...getFieldProps('UserArea', {
                                initialValue: this.props.user.userInfo.UserArea
                            })}
                            placeholder="请输入常住地址"
                        >常住地址</InputItem>
                        <InputItem
                            {...getFieldProps('UserRemarks', {
                                initialValue: this.props.user.userInfo.UserRemarks
                            })}
                            placeholder="请输入备注"
                        >备注</InputItem>
                        <Item>
                            <Button type="warning" onClick={this.onSubmit}>提交资料</Button>
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
}), {
    setUserInfo,
})(PersonInfoWrapper));