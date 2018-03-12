import React from 'react';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import PropTypes from 'prop-types';
import { getBasicInfo } from '@/store/home91/action';
import { getMenuData } from '@/store/menu/action';
import Top from '@/components/Top/top';
import Menu from '@/components/Menu/menu';
import mixin, { padStr } from '@/utils/mixin';

@mixin({padStr})
class Home91 extends React.Component {
    static propTypes = {
        basicData: PropTypes.object.isRequired,
    }

    initBasicData = props => {
        this.props.getBasicInfo();
    }

    initMenuData = props => {
        this.props.getMenuData();
    }

    componentWillReceiveProps(nextProps) {
        if (!is(fromJS(this.props.basicData), fromJS(nextProps.basicData))) {
            this.initBasicData(nextProps);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(this.nextProps));
    }

    componentWillMount() {
        this.initBasicData(this.props);
        this.initMenuData(this.props);
    }

    render() {
        return (
            <main className="home-container">
                <Top basicData={this.props.basicData}/>
                <Menu menuData={this.props.menuData.menuList} />
            </main>
        );
    }
}

export default connect(state => ({
    basicData: state.basicData,
    menuData: state.menuData,
}), {
    getBasicInfo,
    getMenuData,
})(Home91);