import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>select a book</div>;
    }

    return (
      <div>
        <p>more info:</p>
        <div>title: {this.props.book.title}</div>
        <div>pages: {this.props.book.pg}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);