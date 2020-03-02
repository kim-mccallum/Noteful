import React from 'react';
import NotePageSideNav from './NotePageSideNav';
import './NotePage.css'

// Refactor to be functional component
// Implement the delete button on the note page, if the delete is successful, redirect to the / path.
export default function NotePage(props){
    // Use the match params to get the id
    const noteId = props.routeProps.match.params.id;
    // Sometimes this is defined and sometimes not???
    console.log(noteId)
    // find the actual note in store
    const note = props.store.notes.find(item => item.id === noteId);
    // Sometimes this is defined and sometimes not???
    console.log(note)
    // find the folder containing the note
    // debugger;
    const folder = props.store.folders.find(f => f.id === note.folderId);

    return (
      // DISCUSS - How React works and why things are undefined the first time
      // Ray Smith helped me and though I understand the syntax, I don't understand why we have to add conditional logic to deal with undef'd
      <>
        <NotePageSideNav folderName={folder ? folder.name : ''} {...props}/>
        <section className="singleNoteSection">
              <h2>{note ? note.name : ''}</h2>
              <p>{`Date modified: ${note ? note.modified : ''}`}</p>
              <button className="deleteNoteBtn">
                Delete Note
              </button>
              <p className="Note_text">{note ? note.content: ''}</p>

        </section>       
      </>
    )
}