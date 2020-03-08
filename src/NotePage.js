import React from 'react';
import NotePageSideNav from './NotePageSideNav';
import NotefulContext from './NotefulContext';
import BrokenComponent from './BrokenComponent';
import './NotePage.css'

export default function NotePage(props){
    const { routeProps } = props;
    const { routeProps: {match:{params:{id}}}} = props;

    // Use the match params to get the id and look up the folder and note
    const noteId = id;
    // console.log(noteId)
    const note = props.store.notes.find(item => item.id === noteId);
    const folder = props.store.folders.find(f => f.id === note.folderId);
    // How can I split the date up when it's undefined on the first render?
    // const date = props.note.modified.split('T')[0];
    
    return (
      <NotefulContext.Consumer>
      {(context) => (
      <>
        <NotePageSideNav folderName={folder ? folder.name : ''} {...props}/>
        <section className="singleNoteSection">
          <h2>{note ? note.name : ''}</h2>
          <p>{`Date modified: ${note ? note.modified.split('T')[0] : ''}`}</p>
          <button onClick={(e) => {
            // Stop the reload
            e.preventDefault();
            context.deleteNoteHandler(
              noteId
            )
            // send you back to the home URL 
            routeProps.history.push('/')
          }}>
            Delete
          </button>
          <p className="Note_text">{note ? note.content: ''}</p>
          <BrokenComponent />
        </section>       
      </>
    )}
    </NotefulContext.Consumer>
    )
}