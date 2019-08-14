import React, { Component } from 'react'

export default class Blog extends Component {
  render() {

    const container = {
      "margin-left": "50px",
      "margin-right": "50px"
    }

    const leftStyle = {
      background: "grey",
      width: "50%",
      margin:"24px",
      "border-radius": "10px",
      "display": "flex",
      "padding": "54px 54px 44px 54px",
      "margin-top": "50px",
      // "margin-left": "50px",
      "margin-right": "30px"
    }

    const rightStyle = {
      "height": "100%",
      "background-color": "red",
      "position": "fixed",
      // "margin-right": "30px",
      "width": "22%"
    }

    const imgStyle = {
      width: "200px",
      height: "250px",
      "margin-right": "34px",
      "border-radius": "6px",
      "max-height": "220px"
    }

    const titleStyle = {
      // "margin-top": "1em",
      "font-size": "1.5rem",
      "margin-right": "2em",
      "text-align": "justify",
      "margin-top": "0px"
    }

    // const rightColumn = {
    //   "margin-top": "20px"
    // }

    return (
      <div className="row center" style={container}>
      <div className="col s12 m9" style={leftStyle}>
      <div>
      <img src="https://lorempixel.com/100/190/nature/6" style={imgStyle} className="background" alt="back"/>
      </div>
      <div>
      <h5 style={titleStyle}>This is the very first title, and it is glorious, yes i know This is the very first title, and it is glorious, yes i know</h5>
      <p>The content of the title is that Segzpair is around and we are celebrationg today. Yeah, Iti s glorious..
        The content of the title is that Segzpair is around and we are celebrationg today. Yeah, Iti s glorious..
        The content of the title is that Segzpair is around and we are celebrationg today. Yeah, Iti s glorious..
        The content of the title is that Segzpair is around and we are celebrationg today. Yeah, Iti s glorious..
      </p>
      </div>
      </div>
      <div className="col s12 m3">
        <h5>Second one</h5>
        <div style={rightStyle}>
        Just a div
        </div>
      </div>
      </div> 
     ) 
  }
}
