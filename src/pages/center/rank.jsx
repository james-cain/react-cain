import React from 'react';
import { connect } from 'react-redux';
import { getRank } from '@/store/rank/action';
import Back from '@/components/back/back';
import './rank.css';

class Rank extends React.Component {
    state = {
        selected: 0,
    }

    componentDidMount() {
        document.title = '我的排行';
        this.props.getRank();
    }

    changeTab = (id) => {
        this.setState({
            selected: id
        });
    }

    render() {
        return (
            <div className="rank-nav">
                <div className="rank-user-nav">
                    <img className="rank-user_avatar" src={this.props.user.userInfo.UserPosterUrl} alt="" />
                    <div className="rank-user_name">{this.props.user.userInfo.UserName}</div>
                </div>
                <ul className="rank-ul">
                    <li className={this.state.selected === 0 ? 'selected' : ''} onClick={(e) => this.changeTab(0, e)}>
                        <img className="team-title" src="/static/images/rank/recommend_count.png" alt="" />
                        <div className="team-num team-num1">{this.props.user.userInfo.UserChildCount ? this.props.user.userInfo.UserChildCount : 0}人</div>
                    </li>
                    <li className={this.state.selected === 1 ? 'selected' : ''} onClick={(e) => this.changeTab(1, e)}>
                        <img className="team-title" src="/static/images/rank/buy_card_count.png" alt="" />
                        <div className="team-num team-num2">{this.props.user.userInfo.UserBuyCardCount ? this.props.user.userInfo.UserBuyCardCount : 0}人</div>
                    </li>
                    <li className={this.state.selected === 2 ? 'selected' : ''} onClick={(e) => this.changeTab(2, e)}>
                        <img className="team-title" src="/static/images/rank/loan_count.png" alt="" />
                        <div className="team-num team-num3">{this.props.user.userInfo.UserLoanCount ? this.props.user.userInfo.UserLoanCount : 0}人</div>
                    </li>
                </ul>
                {
                    this.state.selected === 0 && this.props.rank &&
                    <table className="data-grid-table" cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                            <tr className="data-grid-title">
                                <td>名次</td>
                                <td>用户名</td>
                                <td>人数</td>
                            </tr>
                            {
                                this.props.rank.userrank.map((item, idx) => 
                                    <tr className="data-grid-data" >
                                        <td>{idx + 1}</td>
                                        <td>{item.UserName}</td>
                                        <td>{item.UserChildCount}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                }
                {
                    this.state.selected === 1 && this.props.rank &&
                    <table className="data-grid-table" cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                            <tr className="data-grid-title">
                                <td>名次</td>
                                <td>用户名</td>
                                <td>人数</td>
                            </tr>
                            {
                                this.props.rank.cardrank.map((item, idx) => 
                                    <tr className="data-grid-data" >
                                        <td>{idx + 1}</td>
                                        <td>{item.UserName}</td>
                                        <td>{item.UserBuyCardCount}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                }
                {
                    this.state.selected === 2 && this.props.rank &&
                    <table className="data-grid-table" cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                            <tr className="data-grid-title">
                                <td>名次</td>
                                <td>用户名</td>
                                <td>人数</td>
                            </tr>
                            {
                                this.props.rank.loanrank.map((item, idx) => 
                                    <tr className="data-grid-data" >
                                        <td>{idx + 1}</td>
                                        <td>{item.UserName}</td>
                                        <td>{item.UserLoanCount}</td>
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
    rank: state.rank,
    user: state.user,
}), {
    getRank,
})(Rank);