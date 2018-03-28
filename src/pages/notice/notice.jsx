import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { List } from 'antd-mobile';
import PropTypes from 'prop-types';
import { getNoticeList } from '@/store/notice/action';
import './notice.css';

const Item = List.Item;
const Brief = Item.Brief;

class Notice extends React.Component {
    static propTypes = {
        noticeList: PropTypes.object.isRequired,
    }

    state = {
        noticeList: []
    }

    componentWillMount() {
        document.title = '系统公告'

        this.setState({
            noticeList: this.props.noticeList
        });

        this.initNotice();
    }

    initNotice = async () => {
        this.props.getNoticeList();
    }

    render() {

        return (
            <div className='main'>
              <List> 
                {
                  this.props.noticeList.map((item) => {
                    return (
                      <Item
                        thumb="/static/images/notice/notice_icon.png"
                        arrow="horizontal"
                        onClick={() => {}}
                      >
                        {item.NoticeTitle}
                        <Brief>{item.NoticeTime}</Brief>
                      </Item>
                    );
                  })
                }
              </List>
            </div>
        );
    }
}

export default withRouter(connect(state => ({
    noticeList: state.noticeList,
}), {
    getNoticeList,
})(Notice));
