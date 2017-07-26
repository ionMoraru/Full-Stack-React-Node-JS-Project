import React, { Component } from 'react';
import styles from '../styles'

class Zone extends Component {
  render() {
    const { zone } = this.props
    return (
      <div style={styles.container}>
        <h2 style={styles.header}><a href="#" style={styles.title}>{zone.name}</a></h2>
        <span>{zone.zipCodes[0]}</span><br />
        <span>{zone.numComments} comments</span>
      </div>
    )
  }
}

export default Zone;
