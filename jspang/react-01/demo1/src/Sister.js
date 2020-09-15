import React, {Component, Fragment} from 'react'
import SisterItem from './SisterItem'
import './style.css'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import Box from './Box'
//  {/* dangerouslySetInnerHTML = {{__html: item}} */}

class Sister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      list: ['基础按摩', '肩颈按摩']
    }
  }
  componentWillMount() {
    console.log('componentWillMount....');
  }
  componentDidMount() {
    console.log('componentDidMount...')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate...')
    return true;
  }
  componentWillUpdate() {
    console.log('componentWillUpdate...')
  }
  componentDidUpdate() {
    console.log('componentDidUpdate...')
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps....')
  }
  render() {
    console.log('render...')
    return (
      <Fragment>
      {/* 第一次写注释 */}
      <label htmlFor="jspang">增加服务</label>
        <input id='jspang'
        type='text'
        value={this.state.inputVal}
        onChange={this.inputChange.bind(this)}
        className="text"
        ref={(input) => {this.input=input}}
        />
        <button onClick={this.addList.bind(this)}>增加服务</button>
        <ul ref={(ul) => this.ul=ul}>
        <TransitionGroup>
        {
            this.state.list.map((item, index) => {
              return (
               <CSSTransition
                timeout={2000}
                classNames='boss-text'
                unmountOnExit
                key={index+item}
                appear={true}
               >
               <SisterItem content={item} key={index+item} index={index} deleteItem={this.deleteItem.bind(this)} list={this.state.list}/>
               </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        </ul>
        <hr/>
        <Box />
      </Fragment>
    )
  }
  inputChange() {
    console.log(this);
    this.setState({
      inputVal: this.input.value
    })
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputVal],
      inputVal: ''
    }, () => {
      console.log(this.ul.querySelectorAll('li').length)
    })
  }
  deleteItem(index) {
    console.log('99999', index)
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
}

export default Sister;