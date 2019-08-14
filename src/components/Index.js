import React, { Component } from 'react'

export default class Index extends Component {

  greet = ()=>{
    let timeOfTheDay = 'day';
    const hour = new Date().getHours();

    if(hour <12){
      timeOfTheDay = 'morning';
    }
    else if(hour >=12 && hour < 17){
      timeOfTheDay = 'afternoon';
    }
    else{
      timeOfTheDay = 'evening';
    }
    return `says good ${timeOfTheDay}`;
  }

  render() {
    return (
        <div id="index-banner" className="index">
        <div className="section no-pad-bot">
          <div className="container">
            <br></br>
            <h1 className="header center blue-text text-darken-3">Softnet {this.greet()}</h1>
            <br></br>
            <div className="row center">
              <h4 className="header col s12 light white-text">All about changing the World</h4>
            </div>
            <br></br>
            <br></br>
            <div className="row center">
              <a href="/#knowus" className="btn-large waves-effect waves-light blue darken-3 white-text">Know Us Better </a>
            </div>
            <br></br>
          </div>
        </div>
      </div>
    )
  }
}
