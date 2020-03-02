import React from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from './NotefulContext';
import './NoteItem.css'

// implement DELETE button
function NoteItem(props) {
    return (
      <NotefulContext.Consumer>
        {(context) => (
            <li className='NoteItem'>
              <Link to={`/note/${props.note.id}`}>
                <h2>{props.note.name}</h2>
              </Link>
              <p>{props.note.modified}</p>
              <button onClick={() => {
                    context.deleteNoteHandler(
                      props.note.id
                    )
              }}>
                Delete
              </button>
            </li>
        )}
    </NotefulContext.Consumer>
)};

export default NoteItem;