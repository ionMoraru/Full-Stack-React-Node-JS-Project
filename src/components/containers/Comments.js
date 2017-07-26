import React, { Component } from 'react';
import Comment from '../presentation/Comment';

class Comments extends Component {
  constructor() {
    super();
    this.state = {
      comment: {
        username: '',
        body: ''
      },
      list: [
        {body: 'Comment 1', username: 'va', timestamp: 10},
        {body: 'Comment 2', username: 'da', timestamp: 10},
        {body: 'Comment 3', username: 're', timestamp: 10},
        {body: 'Comment 4', username: 'vb', timestamp: 10},
      ]
    }

    this.submitComment = this.submitComment.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }
  submitComment(e) {
    e.preventDefault(e);
    console.log('body: ' + JSON.stringify(this.state.comment));
    let updatedList = Object.assign([], this.state.list);
    updatedList.push(this.state.comment);

    this.setState({
      list: updatedList
    })
  }

  handleUsername(e) {
    console.log(e.target.value);
    let updatedComment = Object.assign({}, this.state.comment);
    updatedComment['username'] = e.target.value;

    this.setState({
      comment: updatedComment
    })
  }

  handleComment(e) {
    console.log(e.target.value);
    let updatedComment = Object.assign({}, this.state.comment);
    updatedComment['body'] = e.target.value;

    this.setState({
      comment: updatedComment
    })
  }

  render() {
    const listItems = this.state.list.map((comment, i) => {
      return <li key={i}><Comment comment={comment} /></li>
    })

    return (
      <div>
        <h2>Comment: Zone 1</h2>
        <ul>
          {listItems}
        </ul>

        <form>
            <input onChange={this.handleUsername} className="form-control" type="text" name="username" placeholder="username"  />
            <input onChange={this.handleComment} className="form-control" type="text" name="body" placeholder="comment"  />
            <button onClick={this.submitComment} className="btn btn-succes">post</button>
        </form>
      </div>
    )
  }
}

export default Comments;
