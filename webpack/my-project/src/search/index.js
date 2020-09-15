'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import './search.less';

import '../../common/index.js';
import Logo from '../images/22.jpg';
import back from '../images/back.png';

import {a, b} from './tree-shaking';

if(false) {
  b();
}

class Search extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      Text: null
    };
  }


  loadComponent() {
    import('./text.js').then((Text) => {
      this.setState({
        Text: Text.default
      });
    });
  }
  render() {
    // debugger;
    const funcA = a();
    return <div className="search-text">{funcA}Search Text 112

    {/* {Text ? <Text/> : null} */}
    <img src={Logo} onClick={this.loadComponent.bind(this)}/>
    <img src={back} />
    </div>;
  }
}

ReactDOM.render(
  <Search/>,
  document.getElementById('root')
);