import React, { Component } from 'react';
import SideNav from './SideNav';
import NoteList from './NoteList';



export default class FolderPage extends Component {
  render() {
    // Use the match params to get the id
    const folderName = this.props.routeProps.match.params.id;
    // console.log(folderName);
    // Use find and filter methods to get the notes corresponding to the folder
    const folderId = this.props.store.folders.find(f => f.name === folderName).id;
    // console.log(folderId);
    const notes = this.props.store.notes.filter(note => note.folderId === folderId);
    return (
      <>
        <nav className="App_nav">
          <SideNav folders={this.props.store.folders}/>
        </nav>
          {/* Pass the list of all notes to NoteList which will call NoteItem for each */}
          <NoteList notes={notes}/>
      </>
    )
  }
}