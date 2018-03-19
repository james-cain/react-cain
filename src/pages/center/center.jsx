import React from 'react';
import { connect } from 'react-redux';
// import { is, fromJS } from 'immutable';
import PropTypes from 'prop-types';
import { getUserInfo } from '@/store/info/action';
import './center.css';

class Center extends React.Component {
    static propTypes = {
        userInfo: PropTypes.object.isRequired,
    }

    state = {
        user: {}
    }

    componentWillMount() {
        console.log('come inot center');
        console.log(this.props.userInfo);
        // this.setState({
        //     user: this.props.userInfo.userInfo
        // });
    }

    render() {
        return (
            <div className="center-nav">
                {/* <div className="center-top"> */}
                    <div className="center-top__uesr">
                        {/* <img src={this.state.user.UserPosterUrl} alt="" /> */}
                        <div className="center-top__userInfo">
                            <div className="center-top__userInfo-username">xiexiexie</div>
                            <div className="center-top__userInfo-no">编号：111111</div>
                            {/* <div className="center-top__userInfo-username">{this.state.user.UserName}</div>
                            <div className="center-top__userInfo-no">编号：{this.state.user.UserNo}</div> */}
                        </div>
                    </div>
                    <div class="center-top__benefit">
                        <div class="">累计收益（元）<span>？</span></div>
                        <div class="center-top__total-benefit">+0</div>
                        {/* <div class="center-top__total-benefit">+{this.state.user.UserTotalBenefit}</div> */}
                    </div>
                {/* </div> */}
            </div>
        );
    }
}

export default connect(state => ({
    userInfo: state.user,
}), {
    getUserInfo
})(Center);