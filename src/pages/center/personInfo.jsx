import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { WhiteSpace, InputItem } from 'antd-mobile';
import { WhiteSpace, List, InputItem, Switch, Stepper, Range, Button, Picker } from 'antd-mobile';
import { district } from '../../utils/districtData';
import { createForm } from 'rc-form';
import Immutable from 'immutable';
import './personInfo.css';

const Item = List.Item;

function Title(props) {
    return (<div className="title-nav">
        <span></span>
        {props.titleName}
    </div>);
}

class PersonInfo extends React.Component {
    static = {
        userInfo: {}
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
                <div className="person-info__resource">
                    <div className="person-info__resource-nav">
                        <span>昵&nbsp;称</span>
                        <input className="input-info" placeholder="姓名" value={this.props.user.userInfo.UserName} />
                    </div>
                    <div className="person-info__resource-nav">
                        <span>姓&nbsp;名</span>
                        <input className="input-info" placeholder="请输入您的姓名" value={this.props.user.userInfo.UserName} />
                    </div>
                    <div className="person-info__resource-nav">
                        <span>性&nbsp;别</span>
                        <input className="input-info" placeholder="请输入您的姓名" value={this.props.user.userInfo.UserName} />
                    </div>
                    <div className="person-info__resource-nav">
                        <span>手机号</span>
                        <input className="input-info" placeholder="请输入常用的手机号码" value={this.props.user.userInfo.UserName} />
                    </div>
                    <div className="person-info__resource-nav">
                        <span>验证码</span>
                        <input className="input-info" placeholder="请输入验证码" value={this.props.user.userInfo.UserName} />
                    </div>
                </div>
                <WhiteSpace size="sm" />
                <div className="person-info__resource">
                    <div className="person-info__resource-nav">
                        <span>微信号</span>
                        <input className="input-info" placeholder="请输入微信号" value={this.props.user.userInfo.UserName} />
                    </div>
                    <div className="person-info__resource-nav">
                        <span>常驻地址</span>
                        <input className="input-info" placeholder="请选择常驻地址" value={this.props.user.userInfo.UserName} />
                    </div>
                    <div className="person-info__resource-nav">
                        <span>备&nbsp;注</span>
                        <input className="input-info" placeholder="不大于50字" value={this.props.user.userInfo.UserName} />
                    </div>
                    
                </div>
                <form>
                    <List>
                        <InputItem
                            {...getFieldProps('UserName')}
                            placeholder="请输入昵称"
                            defaultValue={this.props.user.userInfo.UserName}
                        >昵&nbsp;称</InputItem>
                        <InputItem
                            {...getFieldProps('UserName')}
                            placeholder="请输入昵称"
                            defaultValue={this.props.user.userInfo.UserName}
                        >姓&nbsp;名</InputItem>
                        <Item>
                            <Button type="primary" size="small" inline onClick={this.onSubmit}>Submit</Button>
                        </Item>
                        <Picker extra="请选择(可选)"
                            data={district}
                            title="Areas"
                            {...getFieldProps('district', {
                                initialValue: ['340000', '341500', '341502'],
                            })}
                            onOk={e => console.log('ok', e)}
                            onDismiss={e => console.log('dismiss', e)}
                        >
                            <List.Item arrow="horizontal">Multiple & cascader</List.Item>
                        </Picker>
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