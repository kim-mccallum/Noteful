import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import './NoteItem.css'

// Refactor to be a functional component and implement DELETE button
function NoteItem(props) {
    return (
      <Link to={`/note/${props.note.name}`}>
        <li className='NoteItem'>
          <h2>{props.note.name}</h2>
          <p>{props.note.modified}</p>
          <button>
            Delete
          </button>
        </li>
      </Link>
    )
};

export default withRouter(NoteItem);