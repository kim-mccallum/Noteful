import React, { Component } from 'react'

export default class NoteItem extends Component {
  render() {
    return (
      <li className='NoteItem'>
        <h2>{this.props.note.name}</h2>
        <p>{this.props.note.modified}</p>
        <button>
          Delete
        </button>
      </li>
    )
  }
}