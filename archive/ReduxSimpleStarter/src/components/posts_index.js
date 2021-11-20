import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (
        <li className='list-group-item' key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div style={{marginTop:'10px'}}>
        <div className='align-middle text-xs-right'>
          <Link 
            className='btn btn-primary' 
            to='/posts/new'
            style={{float:'right'}}>
            create post
          </Link>
        </div>
        <h3>react router + redux form blog app</h3>
        <ul className='list-group' style={{paddingTop:'10px'}}>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {posts:state.posts};
}

export default connect(mapStateToProps,{fetchPosts})(PostsIndex);