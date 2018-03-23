import React from 'react';
import { connect } from 'react-redux';
import { Modal, Toast } from 'antd-mobile';
import { getGrandUserInfo } from '@/store/info/action';
import './exclusive-service.css';

class ExclusiveService extends React.Component {

  componentWillMount() {
    document.title = '专属客服';
    // 获取上级用户信息
    this.props.getGrandUserInfo().then((data) => { 
      console.log('获取到上级用户信息');
      console.log(data);
    }).catch((err) => {
      Toast.fail('获取专属客服数据失败，请联系管理员!', 2);
      console.log(err);
    });
  }

  render() {
    return (
      <div class="exclusive-service-nav">
        <div class="exclusive-service-card">
          <img src={this.props.user.userInfo.UserPosterUrl} alt="" />
          <div class="exclusive-service-card__name">
            {this.props.user.userInfo.UserName}
          </div>
          <div class="exclusive-service-card__orderNo">
            编号：{this.props.user.userInfo.UserNo}
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  user: state.user
}), {
  getGrandUserInfo
})(ExclusiveService);
