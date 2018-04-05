import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { List } from 'antd-mobile';
import PropTypes from 'prop-types';
import Back from '@/components/back/back';
import { initNotice } from '@/store/notice/action';
import './notice.css';

const Item = List.Item;
const Brief = Item.Brief;

class Notice extends React.Component {
    static propTypes = {
        notice: PropTypes.object.isRequired,
    }

    state = {
    }

    componentWillMount() {
        document.title = '系统公告'

        this.initNotice();
    }

    initNotice = async () => {
        this.props.initNotice();
    }

    showDetailsNotice = (index) => {
        this.props.history.push(`/noticeDetails/${index}`);
    }

    render() {
        return (
            <div className='main'>
              <List> 
                {
                  this.props.noticeStore.noticeList.map((item, index) => {
                    return (
                      <Item
                        thumb="/static/images/notice/notice_icon.png"
                        arrow="horizontal"
                        onClick={() => {this.showDetailsNotice(index)}}
                      >
                        {item.NoticeTitle}
                        <Brief>{item.NoticeTime}</Brief>
                      </Item>
                    );
                  })
                }
              </List>
              <Back />
            </div>
        );
    }
}

const convertUnitTimeToDate = (notice) => {
    if (notice.noticeList) {
        notice.noticeList.map((item) => {
            return item.NoticeTime = new Date(item.NoticeTime*1000).toString();
        });
    }
    return notice;
}

// data input
function mapStateToProps(state) {
  return {
      // connect store [state.notice] to compoments's props.noticeStore
      // if store's notice [state.notice] changed, props.noticeStore will changed, and rerenderer.
      noticeStore: convertUnitTimeToDate(state.notice)
  };
}
// data output to store, bind the store[notice]'s method to compoment's props
// so compoment can call method of the store[notice]
// or we can define owner function here, and use dispatch() to store
const mapDispatchToProps = {
    initNotice,
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Notice));
