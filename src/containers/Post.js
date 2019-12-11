import React, { Component } from 'react'
import Axios from 'axios';
import Comment from '../components/Comment';

class Post extends Component {

  state = {
      comments: [],
      newComment: ''
  };

  getComments () {
      Axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${this.props.post.id}`).then(res => {
          this.setState({comments: res.data});
      })
  }

  componentDidMount() {
      this.getComments();
  }

  // handleChange(e) {
  //   this.setState({newComment: e.target.value})
  //   console.log('e.target.value:', e.currentTarget.value)
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const x = [...this.state.comments, this.state.newComment]
  //   this.setState({comments: x})
  // }

  render() {
    return (
      <>
        <h4>{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
        <h5>comments</h5>
        <h6>Add comment</h6>
        {/* <form action="" onSubmit={this.handleSubmit}>
            <input type="text" name="" id="" onChange={this.handleChange} />
            <input type="submit" value="Submit"/>
        </form> */}
        {this.state.comments.map(comment => (
            <Comment comment={comment} key={comment.id}/>
        ))}
      </>
    )
  }
}

export default Post