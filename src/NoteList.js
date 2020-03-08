import React from 'react';
import NoteItem from './NoteItem';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NoteList.css';

export default function NoteList(props){
    const notes = props.notes.map((note) => {
      return <NoteItem className="noteItem" note={note} key={note.id}/>
    })

    return (
      <section className='NoteList_main'>
          <ul>
            {notes}
            <li className="addNoteBtn">
              <NavLink to={`/add-note`}>Add Note</NavLink>
            </li>
          </ul>
      </section>
    )
}

NoteList.propTypes = {
  value: PropTypes.array.isRequired
};