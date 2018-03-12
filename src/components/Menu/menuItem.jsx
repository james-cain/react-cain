import React from 'react';
import PropTypes from 'prop-types';

export default class MenuItem extends React.Component {
    static propTypes = {
        menuList: PropTypes.array.isRequired,
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
    }

    render() {
        return (
            <div className="index-infoWrap">
                <ul className="index-info">
                    <li></li>
                </ul>
            </div>
        );
    }
}