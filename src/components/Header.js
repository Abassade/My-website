import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
          <div>
         <nav id="header" className="black" role="navigation">
            <div className="nav-wrapper container">
                <a id="logo-container" href="/" className="brand-logo blue-text"><i className="material-icons">ac_unit</i>Softnet</a>
                <ul className="right hide-on-med-and-down">
                    <li><a href="/">Home</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a className="smoothscroll" href="/#knowus">Know us</a></li>
                </ul>

                <ul id="nav-mobile" className="sidenav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a className="smoothscroll" href="/#knowus">Know us</a></li>
                </ul>
                <a href="/" data-target="nav-mobile" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
            </div>
        </nav>
      </div>
      </React.Fragment>
    )
  }
}
