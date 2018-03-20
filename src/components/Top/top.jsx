import React from 'react';
import { is, fromJS } from 'immutable';
import PropTypes from 'prop-types';
import './top.css';

export default class Top extends React.Component {
    static propTypes = {
        basicData: PropTypes.object.isRequired,
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
    }

    // componentWillMount() {
    //     console.log(this.props.basicData);
    // }

    render() {
        return (
            <div className="index-logoWrap">
                <img src={`/static/images/header/${this.props.basicData.imgPath}`} alt="" className="index-bg" />
                {/* <img src={require(`../../assets/images/${this.props.basicData.titlePath}`)} alt="" className="index-title" /> */}
                {/* <div className="index-sysname">{this.props.basicData.sysName}</div> */}
                <img src={this.props.basicData.userPosterUrl} alt="" className="index-avatar"/>
            </div>
        );
    }
}