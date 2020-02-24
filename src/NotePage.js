import React, { Component } from 'react';
import NotePageSideNav from './NotePageSideNav';

export default class NotePage extends Component {
  render() {
    // Use the match params to get the id
    const noteName = this.props.routeProps.match.params.id;
    const noteId = this.props.store.notes.find(n => n.name === noteName).id;
    // note is an array of 1
    const note = this.props.store.notes.filter(note => note.id === noteId);

    // find the folder name of the folder containing the note
    const folderName = this.props.store.folders.find(f => f.id === note[0].folderId).name;
    console.log(folderName)
    return (
      <>
        <NotePageSideNav folderName={folderName}/>
        <h2>{note[0].name}</h2>
        <p>{`Date modified: ${note[0].modified}`}</p>
        <button className="NotePage_delete">
          Delete Note
        </button>
        <p className="Note_text">{note[0].content}</p>
      </>
    )
  }
}