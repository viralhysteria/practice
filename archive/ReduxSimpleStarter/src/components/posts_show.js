import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost, deletePost} from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const {id} = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const {id} = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const {post} = this.props;

    if(!post) {
      return (
        <div>
          <p>
            The requested page was not found,<br/>
            Please return to the <Link to='/'>homepage</Link>
          </p>
        </div>
      );
    }

    return (
      <div style={{marginTop:'10px'}}>
        <Link to='/' className='btn btn-link' style={{float:'right'}}>homepage</Link>
        <button
          className='btn btn-danger pull-xs-right'
          onClick={(this.onDeleteClick.bind(this))}
        >delete</button>
        <div style={{marginTop:'10px'}}>
          <h3>{post.title}</h3>
          <h5>{post.categories}</h5>
          <p>{post.content}</p>
        </div>
      </div>
    );
  };
}

function mapStateToProps({posts}, ownProps) {
  return {post:posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);