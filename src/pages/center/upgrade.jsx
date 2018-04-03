import React from 'react';
import { connect } from 'react-redux';
import { Toast } from 'antd-mobile';
import { withRouter } from 'react-router-dom';
import { setUpgrade, setRules, deleteSelectedRules, getUserlevel } from '@/store/upgrade/action';
import './upgrade.css';

class Upgrade extends React.Component {
    state = {
        currentSelect: ''
    }

    componentWillMount () {
        document.title = '会员升级';
        this.props.getUserlevel();
        this.props.setUpgrade(this.props.user.userInfo.UserLevel);
        // this.props.setRules();
    }

    selectRules = (id) => {
        console.log(id);
        this.props.setRules(id);
        this.setState({
            currentSelect: id
        });
    }

    deleteSelected = () => {
        this.props.deleteSelectedRules();
        this.setState({
            currentSelect: ''
        });
    }

    jumpToUpgradeConfirm = () => {
        if (this.state.currentSelect === '') {
            Toast.fail('请先选择需要升级的会员级别，再到下一步哦!', 2);
            return;
        }
        this.props.history.push('/upgradeConfirm');
    }

    render () {
        return (
            <div className="upgrade-nav">
                <div className="upgrade-title">
                    当前会员等级
                </div>
                <div className="upgrade">
                    { 
                        this.props.steps.stepsList.map((val, index) => 
                            <div key={val.id} className="step-nav">
                                <div className="step-head">
                                    <div className="step-line"></div>
                                    <div className={val.selected ? 'is-process step-icon' : 'step-icon'}></div>
                                </div>
                                <div className={val.seleted ? 'selected step' : 'step'}>
                                    <div className="step-main">
                                        <div className={val.selected ? 'step-main-selected' : ''}>{val.name}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="upgrade-card">
                    <div className="upgrade-card__title">继续升级，您可以享受更多服务</div>
                    {
                        this.props.steps.rules.map((val, index) => 
                            val.UserLevel !== 0 && val.UserLevel < this.props.user.userInfo.UserLevel && <div className="upgrade-card__nav" key={val.UserLevel} onClick={(e) => this.selectRules(val.UserLevel, e)}>
                            <div className="upgrade-card__nav-top">
                                <img className="upgrade-card__nav-top-img" src={val.IconUrl} alt="" />
                                <div className="upgrade-card__nav-top-title">
                                    <div className="upgrade-card__nav-top-title-name">{val.Name}</div>
                                    <div className="upgrade-card__nav-top-title-desc">{val.Desc}</div>
                                </div>
                                <div className="upgrade-card__nav-top-money">
                                    <span className="upgrade-card__nav-top-money-price">{val.UpgradeMoney}元</span>
                                    {
                                        val.selected && <i className="upgrade-card__nav-top-money-icon iconfont icon-ico1"></i>
                                    }
                                    {
                                        !val.selected && <i className="upgrade-card__nav-top-money-icon iconfont icon-ico2"></i>
                                    }
                                </div>
                            </div>
                            <div className="upgrade-card__nav-bottom">
                                权限：{val.Limitation}
                            </div>
                        </div>
                        )
                    }
                    {
                        this.props.steps.rules.length > 0 && <div className="upgrade-card__nav" onClick={this.deleteSelected}>
                            <div className="upgrade-card__nav-top">
                                <img className="upgrade-card__nav-top-img" src={this.props.steps.rules[this.props.steps.rules.length - 1].IconUrl} alt="" />
                                <div className="upgrade-card__nav-top-title">
                                    <div className="upgrade-card__nav-top-title-name">{this.props.steps.rules[this.props.steps.rules.length - 1].Name}</div>
                                    <div className="upgrade-card__nav-top-title-desc">{this.props.steps.rules[this.props.steps.rules.length - 1].Desc}</div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="upgrade-rule" onClick={() => this.props.history.push('/upgradeRule')}>
                        <i className="upgrade-rule__icon iconfont icon-iconfontwenhao"></i>
                        <span>会员规则</span>
                    </div>
                    <div className="upgrade-btn-nav">
                        <div className="upgrade-btn__desc">会员标识是您尊贵、奢华的身份与地位的象征</div>
                        <button className="upgrade-btn" onClick={this.jumpToUpgradeConfirm}>立即升级</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(state => ({
    user: state.user,
    steps: state.steps,
}), {
    setUpgrade,
    setRules,
    deleteSelectedRules,
    getUserlevel
})(Upgrade));
