import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'antd';
// import './Home.css';
import { ActionCreator, Type_Base, Type_Message, Type_Send } from '../../reducer/homeReducer';


class Home extends Component {
  constructor(props) {
    super(props);
    
    this.handleBase = this.handleBase.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.handleSend = this.handleSend.bind(this);
    
  }
  handleBase() {
    this.props.UpdateBase({ school: "广东交通职业技术学院" + Math.random() });
  }
  handleMessage() {
    this.props.UpdateMessage({ msg: "我的天啊" + Math.random() });
  }
  handleSend() {
    this.props.UpdateSend({ websocket: "这是发送到服务器端的消息" + Math.random() });
  }
  render() {
    return (
      <div className="App" style={{ padding: "100px" }}>
        <Button type="primary" onClick={this.handleBase}>Base</Button>
        <Button type="primary" onClick={this.handleMessage}>Message</Button>
        <Button type="primary" onClick={this.handleSend}>Send</Button>
        <p>Name:{this.props.name}</p>
        <p>Base:{this.props.base.school}</p>
        <p>Message:{this.props.message.msg}</p>
        <p>Send:{this.props.send.websocket}</p>
      </div>
    );
  }
}

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
  return state.home;
}

// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreator, dispatch);
}

// 连接上Redux
export default connect(mapStateToProps, mapDispatchToProps)(Home);