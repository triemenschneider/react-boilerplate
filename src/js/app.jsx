import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';
import Header from './components/Header';

import '../scss/styles.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      someState: 42
    };
    this.onCountChange = this.onCountChange.bind(this);
  }
  onCountChange(delta) {
    this.setState({
      count: this.state.count + delta
    });
  }
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
