import React from 'react';
import './upgrade-rule.css';

class UpgradeRule extends React.Component {
    componentDidMount () {
        document.title = '会员规则';
    }
    render () {
        return (
            <div className="upgrade-rule-nav">
                <img src="/static/images/upgrade/upgrade_rules.png" alt="" />
            </div>
        )
    }
}

export default UpgradeRule;