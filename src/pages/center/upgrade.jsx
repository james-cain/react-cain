import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setUpgrade, setRules, deleteSelectedRules } from '@/store/upgrade/action';
import './upgrade.css';

class Upgrade extends React.Component {
    state = {
        currentSelect: ''
    }

    componentWillMount () {
        document.title = '会员升级';
        this.props.setUpgrade(0);
        this.props.setRules();
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
                        <div className="upgrade-card__nav" key={val.id} onClick={(e) => this.selectRules(val.id, e)}>
                            <div className="upgrade-card__nav-top">
                                <img className="upgrade-card__nav-top-img" src={val.avatar} alt="" />
                                <div className="upgrade-card__nav-top-title">
                                    <div className="upgrade-card__nav-top-title-name">{val.name}</div>
                                    <div className="upgrade-card__nav-top-title-desc">{val.desc}</div>
                                </div>
                                <div className="upgrade-card__nav-top-money">
                                    <span className="upgrade-card__nav-top-money-price">{val.price}</span>
                                    {
                                        val.selected && <i className="upgrade-card__nav-top-money-icon iconfont icon-ico1"></i>
                                    }
                                    {
                                        !val.selected && <i className="upgrade-card__nav-top-money-icon iconfont icon-ico2"></i>
                                    }
                                </div>
                            </div>
                            <div className="upgrade-card__nav-bottom">
                                权限：{val.limitation}
                            </div>
                        </div>
                        )
                    }
                    <div className="upgrade-card__nav" onClick={this.deleteSelected}>
                        <div className="upgrade-card__nav-top">
                            <img className="upgrade-card__nav-top-img" src="/static/images/upgrade/black_gold.png" alt="" />
                            <div className="upgrade-card__nav-top-title">
                                <div className="upgrade-card__nav-top-title-name">黑金卡</div>
                                <div className="upgrade-card__nav-top-title-desc">超级合伙人最高级别，权益请咨询91卡哥客服</div>
                            </div>
                        </div>
                    </div>
                    <div className="upgrade-rule">
                        <i className="upgrade-rule__icon iconfont icon-iconfontwenhao"></i>
                        <span>会员规则</span>
                    </div>
                    <div className="upgrade-btn-nav">
                        <div className="upgrade-btn__desc">会员标识是您尊贵、奢华的身份与地位的象征</div>
                        <button className="upgrade-btn" onClick={() => this.props.history.push('/upgradeConfirm')}>立即升级</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(state => ({
    steps: state.steps,
}), {
    setUpgrade,
    setRules,
    deleteSelectedRules
})(Upgrade));
