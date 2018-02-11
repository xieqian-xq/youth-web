import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreator, Type_Base, Type_Message, Type_Send } from '../../reducer/homeReducer';

import './home.css';
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Avatar,
  Row,
  Col,
  Button,
  Input,
  Card,
  Upload,
  Modal,
  Timeline
} from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;

const callback = key => {
  console.log(key);
}


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
      <Layout>
        <Header style={{ position: 'fixed', width: '100%', height: "46px", lineHeight: "46px", zIndex: 9999 }}>
          <Row className="area">
            <Col span={12}>
              <Menu
                defaultSelectedKeys={['1']}
                mode="horizontal"
                theme="dark"
              >
                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>青年晚报</span></span>}>
                  <Menu.Item key="1">雅俗共赏</Menu.Item>
                  <Menu.Item key="2">最佳歌手</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>不如吃茶去</span></span>}>
                  <Menu.Item key="5">山水之间</Menu.Item>
                  <Menu.Item key="6">惊鸿一面</Menu.Item>
                  <SubMenu key="sub3" title="七夕">
                    <Menu.Item key="7">弹指一挥间</Menu.Item>
                    <Menu.Item key="8">等到烟火清凉</Menu.Item>
                  </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>梦游计</span></span>}>
                  <Menu.Item key="9">对话老师</Menu.Item>
                  <Menu.Item key="10">全球变冷</Menu.Item>
                </SubMenu>
              </Menu>
            </Col>
            <Col span={12} style={{ textAlign: "right" }}>
              <Avatar style={{ backgroundColor: '#87d068', marginTop: "-3px" }} icon="user" />
            </Col>
          </Row>
        </Header>
        <Content className="area" style={{ marginTop: 46 }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>首页</Breadcrumb.Item>
            <Breadcrumb.Item>寻雾启示</Breadcrumb.Item>
            <Breadcrumb.Item>灰色头像</Breadcrumb.Item>
          </Breadcrumb>
          <Card title="灰色头像" bordered={false}>
            <Timeline>
              <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                <p>昨夜做了一个梦</p>
                <p>梦里我们回到手牵着手</p>
                <p>醒来的失落</p>
                <p>无法言说</p>
              </Timeline.Item>
              <Timeline.Item color="green">
                <p>打开了OICQ</p>
                <p>聊天记录停步去年的深秋</p>
                <p>最后的挽留</p>
                <p>没有说出口</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>我们还是朋友</p>
                <p>是那种最遥远的朋友</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>你给过的温柔</p>
                <p>在记录之中</p>
                <p>全部都保有</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>你灰色头像不会再跳动</p>
                <p>哪怕是一句简单的问候</p>
                <p>心贴心的交流一页页翻阅 多难过</p>
                <p>是什么 坠落 升空</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>又想起你曾说的陪我到最后</p>
                <p>暖色的梦变冰凉的枷锁</p>
                <p>如果时光倒流我们又能抓得住什么</p>
              </Timeline.Item>
            </Timeline>
          </Card>
        </Content>
      </Layout>
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