import React from 'react';
import { connect } from 'react-redux';
import { getTeam } from '@/store/team/action';
import Back from '@/components/back/back';
import './team.css';

class Team extends React.Component {
    state = {
        selected: 0,
    }

    componentDidMount() {
        document.title = '我的团队';
        this.props.getTeam();
    }

    changeTab = (id) => {
        this.setState({
            selected: id
        });
    }

    render() {
        return (
            <div className="team-nav">
                <ul className="team-ul">
                    <li className={this.state.selected === 0 ? 'selected' : ''} onClick={(e) => this.changeTab(0, e)}>
                        <div className="team-title">直推</div>
                        <div className="team-num">{this.props.team ? this.props.team.teamChild.length : 0}人</div>
                    </li>
                    <li className={this.state.selected === 1 ? 'selected' : ''} onClick={(e) => this.changeTab(1, e)}>
                        <div className="team-title">间接</div>
                        <div className="team-num">{this.props.team ? this.props.team.teamGrandChild.length : 0}人</div>
                    </li>
                </ul>
                {
                    this.state.selected === 0 && this.props.team &&
                    <table className="data-grid-table" cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                            <tr className="data-grid-title">
                                <td>用户名</td>
                                <td>会员等级</td>
                                <td>注册时间</td>
                            </tr>
                            {
                                this.props.team.teamChild.map((item) => 
                                    <tr className="data-grid-data" >
                                        <td>{item.UserPhone ? item.UserPhone : item.UserName}</td>
                                        <td>普卡会员</td>
                                        <td>{item.UserAddTime}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                }
                {
                    this.state.selected === 1 && this.props.team &&
                    <table className="data-grid-table" cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                            <tr className="data-grid-title">
                                <td>用户名</td>
                                <td>会员等级</td>
                                <td>注册时间</td>
                            </tr>
                            {
                                this.props.team.teamGrandChild.map((item) => 
                                    <tr className="data-grid-data" >
                                        <td>{item.UserPhone ? item.UserPhone : item.UserName}</td>
                                        <td>普卡会员</td>
                                        <td>{item.UserAddTime}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                }
                
                <Back />
            </div>
        );
    }
}

export default connect(state => ({
    team: state.teamInfo
}), {
    getTeam,
})(Team);