import React, { Component } from 'react';
// import {Route} from 'react-router-dom';
import Header from './components/Header';
import Index from './components/Index';
import Icon from './components/Icon';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        {/* <Route/> */}
        <Index/>
        <Icon/>
        <Footer/>
      </div>
    );
  }
}

export default App;
