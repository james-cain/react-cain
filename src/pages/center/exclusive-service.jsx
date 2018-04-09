import React from 'react';
import { connect } from 'react-redux';
import { Modal, Toast } from 'antd-mobile';
import Clipboard from 'clipboard';
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
    let clipboard = new Clipboard('.modal-nav__btn');
    clipboard.on('success', function(e) {
      Toast.success('微信号已粘贴到剪贴板~', 2);
      console.info('Action:', e.action);
      console.info('Text:', e.text);
      console.info('Trigger:', e.trigger);
  
      e.clearSelection();
    });
    clipboard.on('error', function(e) {
      Toast.fail('复制内容失败!', 2);
      console.error('Action:', e.action);
      console.error('Trigger:', e.trigger);
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
      <div className="exclusive-service-nav">
        <div className="exclusive-service-card">
          <img src={this.props.user.grandUserInfo.UserPosterUrl} alt="" />
          <div className="exclusive-service-card__name">
            {this.props.user.grandUserInfo.UserName}
          </div>
          <div className="exclusive-service-card__orderNo">
            编号：{this.props.user.grandUserInfo.UserNo}
          </div>
        </div>
        <div className="exclusive-service-btn">
          <div className="exclusive-service-btn__wx exclusive-service-btn__nav" onClick={this.showModal('grandUserShow')}>
            <i className="icon-wx iconfont icon-gongzhonghao"></i>
            <div className="exclusive-service-btn__wx-title">加我微信</div>
          </div>
          <div className="exclusive-service-btn__tel exclusive-service-btn__nav">
            <i className="icon-call iconfont icon-dianhua1"></i>
            <div className="exclusive-service-btn__tel-title">
              <a href={`tel://${this.props.user.grandUserInfo.UserPhone}`}>给我打电话</a>
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
          <div className="modal-nav">
            <div className="modal-nav__title">
              专属客服二维码
              <i className="iconfont icon-guanbi" onClick={this.onClose('grandUserShow')}></i>  
            </div>
            <div className="modal-nav__content">
              <img className="modal-nav__content-qrcode" src={require('../../assets/svg/qrcode.svg')} alt="" />
              <div className="modal-nav__content-desc">扫一扫上面的二维码图案，加我微信</div>
              <div className="modal-nav__content-wxno">微信号：<span className="modal-nav__content-wx-id">{this.props.user.grandUserInfo.UserWeChatId}</span></div>
            </div>
            <button className="modal-nav__btn" data-clipboard-action="cut" data-clipboard-target=".modal-nav__content-wx-id">复制微信号</button>
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
