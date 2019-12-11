import React, { Component } from 'react'
import Axios from 'axios';
import Comment from '../components/Comment';

class Post extends Component {

  state = {
      comments: []
  };
  
  getComments () {
      Axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.post.id}`).then(res => {
          this.setState({comments: res.data});
      })
  }

  componentDidMount() {
      this.getComments();
  }
  

  render() {
    return (
      <>
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <h5>comments</h5>
        {this.state.comments.map(comment => (
            <Comment comment={comment} />
        ))}
      </>
    )
  }
}

export default Post