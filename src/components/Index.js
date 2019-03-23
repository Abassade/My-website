import React, { Component } from 'react'

export default class Index extends Component {
  render() {
    return (
        <div id="index-banner" className="index">
        <div className="section no-pad-bot">
          <div className="container">
            <br></br>
            <h1 className="header center blue-text text-darken-3">Softnet</h1>
            <br></br>
            <div className="row center">
              <h4 className="header col s12 light white-text">All about changing the World</h4>
            </div>
            <br></br>
            <br></br>
            <div className="row center">
              <a href="/" id="download-button" className="btn-large waves-effect waves-light blue darken-3 white-text">Know Us Better </a>
            </div>
            <br></br>
          </div>
        </div>
        {/* <div className="parallax"><img src="background1.jpg" alt="index bck"/></div> */}
      </div>
    )
  }
}
