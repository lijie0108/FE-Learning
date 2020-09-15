import React, { Component } from 'react';

import {CSSTransition} from 'react-transition-group'

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    }
    this.toToggle = this.toToggle.bind(this)
  }
  render() {
    return (
      <div>
         <div className={`box ${this.state.isShow ? 'showBox' : 'hideBox'}`}>Box级人物 -- 孙武路</div>
         <button onClick={this.toToggle}>召唤Box</button>

         <CSSTransition
          in={this.state.isShow}
          timeout={2000}
          classNames="boss-text"
         >
           <div>Hello !!!!!</div>
         </CSSTransition>
      </div>
    );
  }
  toToggle() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}

export default Box;