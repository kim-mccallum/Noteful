import React from 'react';
import NotePageSideNav from './NotePageSideNav';
import './NotePage.css'

// Refactor to be functional component
// Implement the delete button on the note page, if the delete is successful, redirect to the / path.
export default function NotePage(props){
    // Use the match params to get the id
    const noteName = props.routeProps.match.params.id;

    const note = props.store.notes.find(note => note.name === noteName);
    // find the folder name of the folder containing the note
    const folder = props.store.folders.find(f => f.id === note.folderId);

    return (
      // DISCUSS WITH JORGE - How React works and why things are undefined the first time
      // I've add conditional logic to deal with the fact that things are undefined on the first render
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