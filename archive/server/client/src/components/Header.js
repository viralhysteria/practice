import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
    return <li><a href='/auth/google'>Login with Google</a></li>;
      default:
        return [
          <li key='1'><Payments/></li>,
          <li 
            key='2'
            style={{margin:'0 10px'}}
          >
            Balance: {this.props.auth.tokens}
          </li>,
          <li key='3'><a href='/api/logout'>Log Out</a></li>
        ];
    }
  }

  render () {
    return (
      <nav>
        <div className='nav-wrapper'>
            <Link 
              to={this.props.auth?'/surveys':'/'}
              className='left brand-logo' 
              style={{marginLeft: '15px'}}
            >
              Deemsters
            </Link>
          <ul className='right'>
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({auth}) {
  return {auth};
}

export default connect(mapStateToProps)(Header);