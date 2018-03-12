import React from 'react';
import { is, fromJS } from 'immutable';
import PropTypes from 'prop-types';
import './menu.css';

export default class Menu extends React.Component {
    static propTypes = {
        menuData: PropTypes.array.isRequired,
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
    }

    handleClick = (url) => {
        console.log('The link was clicked.', url);
    }

    componentWillMount() {
        console.log(this.props);
    }

    render() {
        const menuData = this.props.menuData;
        const that = this;
        return (
            <div className="index-infoWrap">
                <ul className="index-info">
                    {
                        menuData.map(function(item) {
                            return (
                                <li key={item.menuId} onClick={that.handleClick.bind(that, item.url)}>
                                    <i className={`iconfont ${item.icon}`}></i>
                                    <div>{item.menuName}</div>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}