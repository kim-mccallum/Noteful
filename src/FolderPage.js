import React from 'react';
import SideNav from './SideNav';
import NoteList from './NoteList';

export default function FolderPage(props){
    // Use the match params to get the id
    const folderName = props.routeProps.match.params.id;
    const folderId = props.store.folders.find(f => f.name === folderName).id;
    const notes = props.store.notes.filter(note => note.folderId === folderId);
    return (
      <>
        <nav className="App_nav">
          <SideNav folders={props.store.folders} selectedFolder={folderName}/>
        </nav>
          <NoteList notes={notes}/>
      </>
    )
}