import React from 'react';
import { Link } from 'react-router-dom';
import NotefulContext from './NotefulContext';
import './NoteItem.css'

function NoteItem(props) {
    // const date = props.note.modified.split('T')[0]
    const date = new Date(props.note.modified).toDateString() 
    return (
      <NotefulContext.Consumer>
        {(context) => (
            <li className='NoteItem'>
              <Link to={`/note/${props.note.id}`}>
                <h2>{props.note.name}</h2>
              </Link>
              <p>{`Date modified: ${date}`}</p>
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