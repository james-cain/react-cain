import React from 'react';
import { connect } from 'react-redux';
import { Carousel } from 'antd-mobile';
import './share.css';
let QRCode = require('qrcode.react');

class Share extends React.Component {
    state = {
        height: 0
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
                    <div className="qrcode-nav qrcode-nav-1" style={{height: `${this.state.height}px`}}>
                        <QRCode value={`http://m.91kgxy.com/login?userid=${this.props.user.userInfo.UserId}`} size={100} />
                    </div>
                    <div className="qrcode-nav qrcode-nav-2" style={{height: `${this.state.height}px`}}>
                        <QRCode value={`http://m.91kgxy.com/login?userid=${this.props.user.userInfo.UserId}`} size={100} />
                    </div>
                    <div className="qrcode-nav qrcode-nav-3" style={{height: `${this.state.height}px`}}>
                        <QRCode value={`http://m.91kgxy.com/login?userid=${this.props.user.userInfo.UserId}`} size={100} />
                    </div>
                    <div className="qrcode-nav qrcode-nav-4" style={{height: `${this.state.height}px`}}>
                        <QRCode value={`http://m.91kgxy.com/login?userid=${this.props.user.userInfo.UserId}`} size={100} />
                    </div>
                    <div className="qrcode-nav qrcode-nav-5" style={{height: `${this.state.height}px`}}>
                        <QRCode value={`http://m.91kgxy.com/login?userid=${this.props.user.userInfo.UserId}`} size={100} />
                    </div>
                    <div className="qrcode-nav qrcode-nav-6" style={{height: `${this.state.height}px`}}>
                        <QRCode value={`http://m.91kgxy.com/login?userid=${this.props.user.userInfo.UserId}`} size={100} />
                    </div>
                    <div className="qrcode-nav qrcode-nav-7" style={{height: `${this.state.height}px`}}>
                        <QRCode value={`http://m.91kgxy.com/login?userid=${this.props.user.userInfo.UserId}`} size={100} />
                    </div>
                    <div className="qrcode-nav qrcode-nav-8" style={{height: `${this.state.height}px`}}>
                        <QRCode value={`http://m.91kgxy.com/login?userid=${this.props.user.userInfo.UserId}`} size={100} />
                    </div>
                    <div className="qrcode-nav qrcode-nav-9" style={{height: `${this.state.height}px`}}>
                        <QRCode value={`http://m.91kgxy.com/login?userid=${this.props.user.userInfo.UserId}`} size={100} />
                    </div>
                    <div className="qrcode-nav qrcode-nav-10" style={{height: `${this.state.height}px`}}>
                        <QRCode value={`http://m.91kgxy.com/login?userid=${this.props.user.userInfo.UserId}`} size={100} />
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default connect(state => ({
    user: state.user,
}))(Share);