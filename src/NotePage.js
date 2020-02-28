import React, { Component } from 'react';
import NotePageSideNav from './NotePageSideNav';
import './NotePage.css'

// Refactor to be functional component
// Implement the delete button on the note page, if the delete is successful, redirect to the / path.
export default function NotePage(props){
    // Use the match params to get the id
    const noteName = props.routeProps.match.params.id;
    const noteId = props.store.notes.find(n => n.name === noteName).id;
    // note is an array of 1
    const note = props.store.notes.filter(note => note.id === noteId);

    // find the folder name of the folder containing the note
    const folderName = props.store.folders.find(f => f.id === note[0].folderId).name;
    return (
      <>
        <NotePageSideNav folderName={folderName} {...props}/>
        <section className="singleNoteSection">
          <h2>{note[0].name}</h2>
          <p>{`Date modified: ${note[0].modified}`}</p>
          <button className="deleteNoteBtn">
            Delete Note
          </button>
          <p className="Note_text">{note[0].content}</p>
        </section>
        
      </>
    )
}