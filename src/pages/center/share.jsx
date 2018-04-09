import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Back from '@/components/back/back';
import './share.css';

class Share extends React.Component {
    state = {
        qrcodeNumber:[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    }
    componentDidMount() {
        document.title = '分享海报中心';
    }
    jumpToshareDesc = (id) => {
        this.props.history.push(`/shareDesc/${id}`);
    }
    render() {
        return (
            <div className="qrcode-list">
                {
                    this.state.qrcodeNumber.map((val) => 
                        <div key={`qecodeSmall${val}`} className="qrcode-item" onClick={(e) => this.jumpToshareDesc(val, e)}>
                            <img src={`/static/images/share/share_small_${val}.png`} alt="" />
                        </div>
                    )
                }
                <Back />
            </div>
        )
    }
}

export default withRouter(connect(state => ({
    user: state.user,
}))(Share));