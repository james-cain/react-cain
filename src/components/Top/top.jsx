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

    render() {
        return (
            <div className="index-logoWrap">
                <img src={require(`../../assets/images/${this.props.basicData.imgPath}`)} alt="" className="index-bg" />
                <div className="index-sysname">{this.props.basicData.sysName}</div>
                <img src={require(`../../assets/images/${this.props.basicData.avatar}`)} alt="" className="index-avatar"/>
            </div>
        );
    }
}