import React from 'react';
import { Carousel, Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import PropTypes from 'prop-types';
import API from '@/api/api';
import { getBasicInfo, getAvatar } from '@/store/home91/action';
import { getMenuData } from '@/store/menu/action';
import Top from '@/components/Top/top';
import Menu from '@/components/Menu/menu';
import mixin, { padStr } from '@/utils/mixin';
import './home91.css';

@mixin({padStr})
class Home91 extends React.Component {
    static propTypes = {
        basicData: PropTypes.object.isRequired,
    }

    state = {
        data: [],
        height: 150,
    }

    initBasicData = props => {
        this.props.getBasicInfo();
    }

    initMenuData = props => {
        this.props.getMenuData();
    }

    getCurrentUser = async () => {
        let result = await API.getCurrentUser();
        if (result.tip) {
            Toast.info(result.tip, 2, null, false);
            this.props.getAvatar('http://thirdwx.qlogo.cn/mmopen/vi_32/iccGxFpaaGnaTvU5AC8Be7S2kLVtZDiaeNTNUFrBREtlssQwQnNmXEDSJ9KrZnOt7AWpZmNvX3rXoBwOoZ9YCvYQ/132');
        } else {
            this.props.getAvatar(result.UserPosterUrl);
            Toast.info(result.msg, 2, null, false);
        }
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
        this.getCurrentUser();
        this.initBasicData(this.props);
        this.initMenuData(this.props);
        this.setState({
            data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        });
    }

    render() {
        return (
            <main className="home-container">
                <Top basicData={this.props.basicData}/>
                <Menu menuData={this.props.menuData.menuList} />
                <div className="index-footerTitle">最新活动</div>
                <Carousel className="space-carousel"
                    frameOverflow="visible"
                    cellSpacing={10}
                    slideWidth={0.8}
                    autoplay
                    infinite
                >
                {this.state.data.map((val, index) => (
                    <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{
                            display: 'block',
                            position: 'relative',
                            height: this.state.imgHeight,
                            boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                        }}
                    >
                    <img
                        src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top', height: '120px' }}
                        onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    </a>
                ))}
                </Carousel>
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
    getAvatar,
})(Home91);