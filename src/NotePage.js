import React from 'react';
import NotePageSideNav from './NotePageSideNav';
import NotefulContext from './NotefulContext';
import './NotePage.css'

export default function NotePage(props){
    const { routeProps, store } = props;
    const { routeProps: {match:{params:{id}}}} = props;

    // Use the match params to get the id and look up the folder and note
    const noteId = id;
    console.log(noteId)
    const note = props.store.notes.find(item => item.id === noteId);
    const folder = props.store.folders.find(f => f.id === note.folderId);

    return (
      <NotefulContext.Consumer>
      {(context) => (
      <>
        <NotePageSideNav folderName={folder ? folder.name : ''} {...props}/>
        <section className="singleNoteSection">
          <h2>{note ? note.name : ''}</h2>
          <p>{`Date modified: ${note ? note.modified : ''}`}</p>
          <button onClick={(e) => {
            // Stop the reload
            e.preventDefault();
            context.deleteNoteHandler(
              noteId
            )
            // send you back to URL 
            routeProps.history.push('/')
          }}>
            Delete
          </button>
          <p className="Note_text">{note ? note.content: ''}</p>
        </section>       
      </>
    )}
    </NotefulContext.Consumer>
    )
}