import React from 'react';
import { is, fromJS } from 'immutable';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './header.css';

// const Fade = ({ children, ...props }) => {
//     <CSSTransition
//         {...props}
//         timeout={300}
//         classNames="nav"
//     >
//         {children}
//     </CSSTransition>
// }

export default class PublicHeader extends React.Component {
    static propTypes = {
        record: PropTypes.any,
        title: PropTypes.string.isRequired,
        confirm: PropTypes.any,
    }

    state = {
        navState: false, // 导航栏是否显示
    }

    // 切换左侧导航栏状态
    toggleNav = () => {
        console.log('click', this.state.navState);
        return this.setState({navState: !this.state.navState});
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
    }

    render() {
        return (
            <header className="header-container">
                <span className="header-slide-icon icon-catalog" onClick={this.toggleNav}></span>
                <span className="header-title" onClick={this.toggleNav}>{this.props.title}</span>
                {
                this.props.record&&<NavLink to="/record" exact className="header-link icon-jilu"></NavLink>
                }
                {
                this.props.confirm&&<NavLink to="/" exact className="header-link header-link-confim">确定</NavLink>
                }
                <TransitionGroup>
                    {
                        this.state.navState && 
                        <CSSTransition
                            key='nav-slide'
                            timeout={300}
                            classNames="nav"
                        >
                            <aside className="nav-slide-list" onClick={this.toggleNav}>
                                <NavLink to="/" exact className="nav-link icon-jiantou-copy-copy">首页</NavLink>
                                <NavLink to="/brokerage" exact className="nav-link icon-jiantou-copy-copy">提现</NavLink>
                                <NavLink to="/helpcenter" exact className="nav-link icon-jiantou-copy-copy">帮助中心</NavLink>
                            </aside>
                        </CSSTransition>
                    }
                </TransitionGroup>
            </header>
        );
    }
}