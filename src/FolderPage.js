import React, { Component } from 'react';
import SideNav from './SideNav';
import NoteList from './NoteList';

export default class FolderPage extends Component {
  render() {
    // Use the match params to get the id
    const folderName = this.props.routeProps.match.params.id;
    const folderId = this.props.store.folders.find(f => f.name === folderName).id;
    const notes = this.props.store.notes.filter(note => note.folderId === folderId);
    return (
      <>
        <nav className="App_nav">
          <SideNav folders={this.props.store.folders} selectedFolder={folderName}/>
        </nav>
          <NoteList notes={notes}/>
      </>
    )
  }
}