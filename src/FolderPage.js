import React, { useContext } from 'react';
import SideNav from './SideNav';
import NoteList from './NoteList';
import NotefulContext from './NotefulContext';

export default function FolderPage(props){
    // Use the match params to get the id - this will give us a string!
    const routePath = props.routeProps.match.params.id;
    // Find the note with a folderId that matches the routePah
    const notes = useContext(NotefulContext).notes.filter(note => note.folderId === parseInt(routePath));
    // console.log(routePath, typeof(routePath))
    // console.log(useContext(NotefulContext).notes)
    return (
      <>
        <nav className="App_nav">
          <SideNav />
        </nav>
          <NoteList notes={notes}/>
      </>
    )
}

