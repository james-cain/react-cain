import React from 'react';
import './tabControl.css';

class TabsControl extends React.Component {
    constructor() {
        super();
        this.state = {
            currentIndex: 0
        }
    }

    checkTitleIndex = (index) => {
        return index === this.state.currentIndex ? 'tab_title active' : 'tab_title';
    }

    checkItemIndex = (index) => {
        return index === this.state.currentIndex ? 'tab_item show' : 'tab_item';
    }

    render() {
        return (
            <div>
                <div className="tab_title_wrap">
                    {
                        React.Children.map(this.props.children, (element, index) => {
                            return (
                                <div onClick={() => {this.setState({currentIndex: index})}}
                                    className={this.checkTitleIndex(index)}>
                                    <i className={element.props.classes}></i>
                                    <span>{element.props.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="tab_item_wrap">
                    {
                        React.Children.map(this.props.children, (element, index) => {
                            return (
                                <div className={this.checkItemIndex(index)}>
                                    {element}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default TabsControl;
