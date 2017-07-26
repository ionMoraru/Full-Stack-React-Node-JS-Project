import React, { Component } from 'react';
import styles from '../styles'

class Comment extends Component {
  render() {
    const { comment } = this.props
    return (
      <div style={styles.container}>
        <h2 style={styles.header}>{comment.username}</h2>
        <span>{comment.body}</span><br />
        <span>{comment.timestamp} comments</span>
      </div>
    )
  }
}

export default Comment;
