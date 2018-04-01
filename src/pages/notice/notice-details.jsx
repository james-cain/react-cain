import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './notice-details.css';
import { getNoticeByNo } from '@/store/notice/action';

class NoticeDetails extends React.Component {

    state = {
       noticeItem: {}
    }

    componentWillMount() {
        document.title = '公告详情';
        this.setState({
            noticeItem: this.props.getNoticeByNo(this.props.match.params.no)
        })
        console.log(this.state.noticeItem)
    }

    render() {
        return (
          <div className='main'>
            <div className='title'> {this.state.noticeItem.NoticeTitle}</div>
            <div className='subtitle'>{this.state.noticeItem.NoticeTime} </div>
            <div className='content'>{this.state.noticeItem.NoticeContent}  </div>
            <div className='image'>
              <img src={this.state.noticeItem.NoticeImageUrl} />
            </div>
          </div>
        );
    }
}

// data input
function mapStateToProps(state) {
}

const mapDispatchToProps = {
    getNoticeByNo,
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(NoticeDetails));
