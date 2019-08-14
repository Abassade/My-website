import React, { Component } from 'react'
import Index from './Index';
import Icon from './Icon';
import Knowus from './Knowus';
import Footer from './Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
            <div className="App">
                <Index/>
                <Icon/>
                <Knowus/>
                <Footer/>
            </div>
      </div>
    )
  }
}

