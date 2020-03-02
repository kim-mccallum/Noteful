import React from 'react';
import SideNav from './SideNav';
import NoteList from './NoteList';

export default function FolderPage(props){
    // Use the match params to get the id
    // const folderName = props.routeProps.match.params.id;
    const routePath = props.routeProps.match.params.id;

    // const folderId = props.store.folders.find(f => f.name === folderName).id;

    // const notes = props.store.notes.filter(note => note.folderId === folderId);
    const notes = props.store.notes.filter(note => note.folderId === routePath);
    return (
      <>
        <nav className="App_nav">
          {/* <SideNav folders={props.store.folders} selectedFolder={folderName}/> */}
          <SideNav folders={props.store.folders} selectedFolder={routePath}/>
        </nav>
          <NoteList notes={notes}/>
      </>
    )
}