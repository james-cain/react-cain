import React from 'react';
import { connect } from 'react-redux';
import { Modal, Toast } from 'antd-mobile';
import { getGrandUserInfo } from '@/store/info/action';
import Back from '@/components/back/back';
import './exclusive-service.css';

class ExclusiveService extends React.Component {
  state = {
    grandUserShow: false
  }

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

  showModal = key => (e) => {
    e.preventDefault();
    this.setState({
      [key]: true
    });
  }

  onClose = key => () => {
    this.setState({
      [key]: false
    })
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
        <div class="exclusive-service-btn">
          <div class="exclusive-service-btn__wx exclusive-service-btn__nav" onClick={this.showModal('grandUserShow')}>
            <i class="icon-wx iconfont icon-gongzhonghao"></i>
            <div class="exclusive-service-btn__wx-title">加我微信</div>
          </div>
          <div class="exclusive-service-btn__tel exclusive-service-btn__nav">
            <i class="icon-call iconfont icon-dianhua1"></i>
            <div class="exclusive-service-btn__tel-title">
              <a href={`tel://${15960192140}`}>给我打电话</a>
            </div>
          </div>
        </div>
        <Modal
          popup
          maskClosable={true}
          visible={this.state.grandUserShow}
          onClose={this.onClose('grandUserShow')}
          animationType="slide-up"
        >
          <div class="modal-nav">
            <div class="modal-nav__title">
              专属客服二维码
              <i class="iconfont icon-guanbi" onClick={this.onClose('grandUserShow')}></i>  
            </div>
            <div class="modal-nav__content">
              <img class="modal-nav__content-qrcode" src={require('../../assets/svg/qrcode.svg')} alt="" />
              <div class="modal-nav__content-desc">扫一扫上面的二维码图案，加我微信</div>
              <div class="modal-nav__content-wxno">微信号：15899880540</div>
            </div>
            <button class="modal-nav__btn">复制微信号</button>
          </div>
        </Modal>
        <Back />
      </div>
    )
  }
}

export default connect(state => ({
  user: state.user
}), {
  getGrandUserInfo
})(ExclusiveService);
