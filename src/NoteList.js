import React from 'react';
import NoteItem from './NoteItem'
import NotefulContext from './NotefulContext';
import './NoteList.css'

export default function NoteList(props){
    // This could/should be a context consumer? 
    // const notes = useContext(NotefulContext).notes.map((note) => {
    //   return <NoteItem className="noteItem" note={note} key={note.id}/>
    // })

    const notes = props.notes.map((note) => {
      return <NoteItem className="noteItem" note={note} key={note.id}/>
    })

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