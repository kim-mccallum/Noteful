import React from 'react';
import SideNav from './SideNav';
import NoteList from './NoteList';

export default function HomePage(props){
    // console.log(props.store.folders);
    return (
      <>
        <nav className="App_nav">
          <SideNav folders={props.store.folders}/>
        </nav>
          {/* Pass the list of all notes to NoteList which will call NoteItem for each */}
          <NoteList notes={props.store.notes}/>
      </>
    )
}