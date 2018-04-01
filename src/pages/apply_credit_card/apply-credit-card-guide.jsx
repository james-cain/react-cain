import React from 'react';
import './apply-credit-card-guide.css';

class ApplyCreditCardGuide extends React.Component {
    render() {
        return (
            <div className="creditcard-guide">
                <img src="/static/images/creditcard/create_card_guide_step_1.png" alt="" />
                <img src="/static/images/creditcard/create_card_guide_step_2.png" alt="" />
                <img src="/static/images/creditcard/create_card_guide_step_3.png" alt="" />
            </div>
        );
    }
}

export default ApplyCreditCardGuide;