import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <ul className="my-list">
        <li>{true ? 'React': 'Vue'}</li>
        <li>React</li>
        <li>Angular</li>
      </ul>
    )
    // var child1 = React.createElement('ul', null, 'vue')
  }
}

export default App;