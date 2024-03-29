import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var resumeDownload = this.props.data.resumedownload;

      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id='home'>
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>

          <ul id='nav' className='nav'>
            <li className='current'>
              <a className='smoothscroll' href='#home'>
                Home
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#portfolio'>
                Projects
              </a>
            </li>
            {/* <li>
              <a className='smoothscroll' href='#resume'>
              <a href={resumeDownload} target='_blank'>
                Resume
              </a>
            </li> */}
          </ul>
        </nav>

        <div className='row banner'>
          <div className='banner-text'>
            <h1 className='responsive-headline'>Hi! I'm Benny.</h1>
            <hr />
            <ul className='social' style={{ color: "#525252" }}>
              {networks}
            </ul>
          </div>
        </div>

        <div>
          <p className='scrolldown'>
            <a className='smoothscroll' href='#about'>
              <i className='fa fa-chevron-down'></i>
            </a>
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
