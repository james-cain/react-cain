import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { is, fromJS } from 'immutable';
import PropTypes from 'prop-types';
// import API from '@/api/api';
// import envconfig from '@/envconfig/envconfig';
import { saveFormData, saveImg, clearData } from '@/store/home/action';
import { clearSelected } from '@/store/production/action';
import PublicHeader from '@/components/header/header';
// import PublicAlert from '@/components/alert/alert';
// import TouchableOpacity from '@/components/TouchableOpacity/TouchableOpacity';
import mixin, { padStr } from '@/utils/mixin';
import './home.css';

@mixin({padStr})
class Home extends React.Component {
    static propTypes = {
        formData: PropTypes.object.isRequired,
        saveFormData: PropTypes.func.isRequired,
        saveImg: PropTypes.func.isRequired,
        clearData: PropTypes.func.isRequired,
        clearSelected: PropTypes.func.isRequired
    }

    state = {
        alertStatus: false, // 弹框状态
        alertTip: '', // 弹框提示文字
    }

    // 已选择的商品数据
    selectedProList = [];

    // 将表单数据保存至redux，保留状态
    handleInput = (type, event) => {
      let value = event.target.value;
      switch (type) {
        case 'orderSum':
          value = value.replace(/\D/g, '');
          break;
        case 'name':
          break;
        case 'phoneNo':
          value = this.padStr(value.replace(/\D/g, ''), [3, 7], ',', event.target);
          break;
        default:;
      }
      this.props.saveFormData(value, type);
    }

    // 上传图片，并将图片地址保存到redux，保留状态
    uploadImg = async event => {
      try {
        let formData = new FormData();
        formData.append('file', event.target.files[0]);
        // let result = await API.uploadImg({data: formData});
        // this.props.saveImg(envconfig.imgURL + result.image_path);
        // console.log(result);
      } catch (err) {
        console.error(err);
      }
    }

    // 提交表单
    sumitForm = () => {
    //   const {orderSum, name, phone} = this.props.formData;
      const {orderSum} = this.props.formData;
      let alertTip = '';
      if (!orderSum.toString().length) {
        alertTip = '请填写金额';
      } else {
        alertTip = '添加数据成功';
        // this.props.clearSelected();
        // this.props.clearData();
      }
      this.setState({
        alertStatus: true,
        alertTip,
      })
    }

    // 关闭弹框
    closeAlert = () => {
      this.setState({
        alertStatus: false,
        alertTip: '',
      })
    }

    initData = props => {
      this.selectedProList = {};
      props.proData.dataList.forEach(item => {
        if (item.selectStatus && item.selectNum) {
          this.selectedProList.push(item);
        }
      })
    }

    componentWillReceiveProps(nextProps) {
      if (!is(fromJS(this.props.proData), fromJS(nextProps.proData))) {
        this.initData(nextProps);
      }
    }

    shouldComponentUpdate(nextProps, nextState) {
      return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState));
    }

    componentWillMount() {
      console.log(this.props);
      this.initData(this.props);
    }

    render() {
      return (
        <main className="home-container">
          <PublicHeader title="首页" record />
        </main>
      );
    }
}

export default connect(state => ({
  formData: state.formData,
  proData: state.proData,
}), {
  saveFormData,
  saveImg,
  clearData,
  clearSelected,
})(Home);
