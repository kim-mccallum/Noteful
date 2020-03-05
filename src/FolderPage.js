import React, { useContext } from 'react';
import SideNav from './SideNav';
import NoteList from './NoteList';
import NotefulContext from './NotefulContext';

export default function FolderPage(props){
    // Use the match params to get the id
    const routePath = props.routeProps.match.params.id;
    // Find the note with a folderId that matches the routePah
    // const notes = props.store.notes.filter(note => note.folderId === routePath);

    const notes = useContext(NotefulContext).notes.filter(note => note.folderId === routePath);
    return (
      <>
        <nav className="App_nav">
          {/* <SideNav folders={props.store.folders} selectedFolder={folderName}/> */}
          <SideNav folders={useContext(NotefulContext).folders} selectedFolder={routePath}/>
        </nav>
          <NoteList notes={notes}/>
      </>
    )
}