import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NotefulContext from './NotefulContext';
import './NoteItem.css'

// DELETE note request should make a request to /notes/<note-id> - likely needs headers
// HELP ME UNDERSTAND/FIX THIS FUNCTIOON
function deleteNoteRequest(noteId, cb) {
  fetch(`http://localhost:9090/notes/${noteId}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    }
  })
    .then(res => {
      if (!res.ok) {
        // get the error message from the response,
        return res.json().then(error => {
          // then throw it
          throw error
        })
      }
      return res.json()
    })
    .then(data => {
      console.log(data)
      cb(noteId)
    })
    .catch(error => {
      console.log(error)
    })
}

// implement DELETE button
function NoteItem(props) {
    return (
      <NotefulContext.Consumer>
      {(context) => (
          <Link to={`/note/${props.note.name}`}>
            <li className='NoteItem'>
              <h2>{props.note.name}</h2>
              <p>{props.note.modified}</p>
              <button onClick={() => {
                    deleteNoteRequest(
                      props.id,
                      context.deleteNoteHandler,
                    )
              }}>
                Delete
              </button>
            </li>
          </Link>
      )}
    </NotefulContext.Consumer>
)};

export default withRouter(NoteItem);