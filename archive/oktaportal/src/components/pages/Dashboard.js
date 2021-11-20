import React, { Component } from 'react'

class Dashboard extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: ''
  }

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  render() {
    const { currentUserEmail, currentUserName } = this.state;

    return (
      <div>
        <h3>Welcome {currentUserName}</h3>
        <p>{currentUserEmail}</p>
      </div>
    )
  }
}

export default Dashboard;