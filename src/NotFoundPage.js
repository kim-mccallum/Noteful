import React, { Component } from 'react';

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className='NotFoundPage'>
          <h1>Nothing to see here</h1>
          <p>That folder or note doesn't exist. Perhaps you would like to add a note or folder?</p>
      </div>
    )
  }
}