import React from 'react';
import NoteItem from './NoteItem'
import './NoteList.css'

// Refactor to be a functional component
export default function NoteList(props){
    const notes = props.notes.map((note) => {
      return <NoteItem className="noteItem" note={note} key={note.id}/>
    })
    // Could/should I add logic to call NoteItem if there is only one note? 
    return (
      <section className='NoteList_main'>
          <ul>
            {notes}
            <button className="addNoteBtn">
              Add Note
            </button>
          </ul>
      </section>
    )
}