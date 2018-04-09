import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './shareDesc.css';
let QRCode = require('qrcode.react');

const level = [
  {
      id: 1000,
      name: '普卡'
  },
  {
      id: 3,
      name: '金卡'
  },
  {
      id: 2,
      name: '白金卡'
  },
  {
      id: 1,
      name: '钻石卡'
  },
  {
      id: 0,
      name: '黑金卡'
  }
];

function QrcodeNav (props) {
  let levelDesc = level.filter((item) => item.id === props.userInfo.UserLevel);
  return (
    <div className={props.classNameList} style={{height: `${props.navHeight}px`}}>
      <img className="qrcode-nav__avatar" src={props.userInfo.UserPosterUrl} alt="" />
      <div className="qrcode-nav__info">
        <div className="qrcode-nav__info-username">{props.userInfo.UserName}</div>
        <div>
          <span>级别：</span>
          <span>{levelDesc[0].name}</span>
          </div>
        </div>
      <QRCode value={props.qrcodeUrl} size={100} />
    </div>
  );
}
class Share extends React.Component {
  state = {
    height: 0,
    qrcodeNumber: 0,
  }
  componentDidMount() {
    document.title = '分享海报';
    this.setState({
        height: document.documentElement.clientWidth * 1330 / 750,
        qrcodeNumber: this.props.match.params.id,
    });
  }
  render() {
    return (
      <div className="qrcode">
        <QrcodeNav
            classNameList={`qrcode-nav qrcode-nav-${this.state.qrcodeNumber}`} 
            navHeight={this.state.height}
            userInfo={this.props.user.userInfo}
            qrcodeUrl={`${window.location.origin}/login?userid=${this.props.user.userInfo.UserId}`}
        />
      </div>
    )
  }
}

export default withRouter(connect(state => ({
  user: state.user,
}))(Share));