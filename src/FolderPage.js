import React, { Component } from 'react';
// import SideNav from './SideNav';
import NoteList from './NoteList';
import STORE from './dummy-store';


export default class FolderPage extends Component {
  render() {
    const folderName = this.props.match.params.id;
    
    const folderId = STORE.folders.find(f => f.name === folderName).id;
    const notes = STORE.notes.filter(note => note.folderId === folderId);

    // Change this to get the selected folder and render NoteList for only selected folders
    return (
      <>
        <h1>Folder Page</h1>
          {/* Pass the list of all notes to NoteList which will call NoteItem for each */}
          <NoteList notes={notes}/>
      </>
    )
  }
}