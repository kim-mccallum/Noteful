import React, { Component } from 'react';
import Sidebar from './SideBar';
import NoteList from './NoteList';
import STORE from './dummy-store';

export default function HomePage(){
  // console.log(STORE.folders);
    return (
      <div className='HomePage'>
        <h1>Home Page</h1>
          {/* Pass the folder list to sidebar which will call FolderItem for each */}
          <Sidebar folders={STORE.folders}/>
          {/* Pass the list of all notes to NoteList which will call NoteItem for each */}
          <NoteList notes={STORE.notes}/>
      </div>
    )
}