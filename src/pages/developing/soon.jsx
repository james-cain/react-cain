import React from 'react';
import Back from '@/components/back/back';
import './soon.css';

class Soon extends React.Component {
    state = {
        height: 0
    }

    componentDidMount() {
        this.setState({
            height: document.body.clientHeight
        });
    }

    render () {
        return (
            <div className="soon-nav" style={{height: `${this.state.height}px`}}>
                <img src={require("../../assets/svg/comeUpSoon.svg")} alt="" />
                <Back />
            </div>
        )
    }
}

export default Soon;