import React, { Component } from 'react';
import NoteList from './NoteList';
import STORE from './dummy-store';


export default class FolderPage extends Component {
  render() {
    // Use the match params to get the id
    const folderName = this.props.match.params.id;
    // console.log(folderName);
    // Use find and filter methods to get the notes corresponding to the folder
    const folderId = STORE.folders.find(f => f.name === folderName).id;
    // console.log(folderId);
    const notes = STORE.notes.filter(note => note.folderId === folderId);
    return (
      <>
        <h1>Folder Page</h1>
          {/* Pass the list of all notes to NoteList which will call NoteItem for each */}
          <NoteList notes={notes}/>
      </>
    )
  }
}