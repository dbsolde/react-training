import React, { Component } from 'react';
import Header from './components/Header'
import Routes from './services/router'
import { AppWrapper } from './styled/common'

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <Routes />
      </AppWrapper>
    );
  }
}

export default App;
