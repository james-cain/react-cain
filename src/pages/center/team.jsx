import React from 'react';
import { connect } from 'react-redux';
import './team.css';

class Team extends React.Component {
    componentDidMount() {
        document.title = '我的团队';
    }

    render() {
        return (
            <div className="team-nav">
                <ul>
                    <li>
                        <div className="team-title">直推</div>
                        <div className="team-num>">100人</div>
                    </li>
                    <li>
                        <div className="team-title">间接</div>
                        <div className="team-num">100人</div>
                    </li>
                </ul>
                <table>
                    <tr className="data-grid-title">
                        <td>用户名</td>
                        <td>会员等级</td>
                        <td>注册时间</td>
                    </tr>
                    <tr className="data-grid-data">
                        <td>15960129120</td>
                        <td>普卡会员</td>
                        <td>2018-02-08</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default connect( state => ({
    team: state.team,
}))(Team);