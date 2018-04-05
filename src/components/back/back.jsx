import React from 'react';
import { withRouter } from 'react-router-dom';
import './back.css';

class Back extends React.Component {
    goHome = () => {
        this.props.history.push('/');
    }
    goBack = () => {
        this.props.history.goBack();
    }
    render () {
        return (
            <div className="back-tooltip">
                <ul>
                    <li onClick={this.goHome}>
                        <img src="/static/images/home.png" alt=""/>
                    </li>
                    <li onClick={this.goBack}>
                        <img src="/static/images/back.png" alt=""/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default withRouter(Back);