import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
  render() {
    return (
        <div className='container'>
          <nav className='nav navbar-inverse navbar-fixed-top'>
            <Link to ='/' className = 'btn btn-secondary btn-default navbar-btn'>H</Link>
          </nav>
          <div id = 'main'>{this.props.children}</div>
          </div>
    )
  }
}
