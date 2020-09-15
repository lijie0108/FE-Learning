import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'


class SisterItem extends Component {
  // 生命周期：在某一时刻，可以自动执行的函数

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  // 组件第一次存在于DOM中，函数是不会被执行的
  // 如果已经存在于DOM中，函数才会被执行

  componentWillReceiveProps() {
    console.log('--- componentWillReceiveProps....')
  }
  componentWillUnmount() {
    console.log('componentWillUnmount...')
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('9999999', nextProps)
    if(nextProps.content !== this.props.content) {
      return true;
    }
    return false;
  }
  componentDidMount() {
    // axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda').then((res) => {
    //   console.log('res', res);
    // }).catch((error) => {
    //   console.log('error', error);
    // })
  }
  render() {
    console.log('777 - child - render')
    return (
      <li onClick={this.handleClick}>{this.props.name} - {this.props.content}</li>
    );
  }
  handleClick() {
    console.log(this.props.index)
    // this.props.list = []
    // 单向数据流
    this.props.deleteItem(this.props.index)
  }
}
SisterItem.propTypes = {
  contet: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
SisterItem.defaultProps = {
  name: 'DaPang'
}
export default SisterItem;

// npm install axios; // 下载到node_modules,不会添加在pakeage.json
// npm install -g axios;  // 安装到全局
// npm install --save axios;  // 下载到node_modules,添加在pakeage.json  dependencies
// npm install --save -dev axios; // 开发环境使用的 dev dependencies