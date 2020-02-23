import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NoteItem extends Component {
  render() {
    return (
      <Link to={`/note/${this.props.note.name}`}>
        <li className='NoteItem'>
          <h2>{this.props.note.name}</h2>
          <p>{this.props.note.modified}</p>
          <button>
            Delete
          </button>
        </li>
      </Link>
    )
  }
}