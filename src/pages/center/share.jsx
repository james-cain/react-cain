import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd-mobile';
import './share.css';
let QRCode = require('qrcode.react');

function QrcodeNav (props) {
    return (
        <div className={props.classNameList} style={{height: `${props.navHeight}px`}}>
            <img className="qrcode-nav__avatar" src={props.userInfo.UserPosterUrl} alt="" />
            <div className="qrcode-nav__info">
                <span>{props.userInfo.UserName}</span>
                <span style={{'marginLeft': '10px'}}>编号：</span>
                <span>{props.userInfo.UserNo}</span>
            </div>
            <QRCode value={props.qrcodeUrl} size={100} />
        </div>
    );
}
class Share extends React.Component {
    state = {
        height: 0,
        qrcodeNumber:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    }
    componentDidMount() {
        this.setState({
            height: document.documentElement.clientHeight
        });
    }
    render() {
        return (
            <div style={{height: `${this.state.height}px`}}>
                <Carousel className="my-carousel" style={{height: `${this.state.height}px`}}
                    vertical
                    dots={false}
                    dragging={true}
                    swiping={true}
                    // autoplay
                    infinite
                    >
                    {
                        this.state.qrcodeNumber.map((val) => 
                            <QrcodeNav
                                key={val}
                                classNameList={`qrcode-nav qrcode-nav-${val}`} 
                                navHeight={this.state.height}
                                userInfo={this.props.user.userInfo}
                                qrcodeUrl={`${window.location.origin}/login?userid=${this.props.user.userInfo.UserId}`}
                            />
                        )
                    }
                </Carousel>
            </div>
        )
    }
}

export default connect(state => ({
    user: state.user,
}))(Share);