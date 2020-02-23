import React, { Component } from 'react';
import SideNav from './SideNav';
import NoteList from './NoteList';
import STORE from './dummy-store';

export default function HomePage(){
  // console.log(STORE.folders);
    return (
      <>
        <h1>Home Page</h1>
          {/* Pass the list of all notes to NoteList which will call NoteItem for each */}
          <NoteList notes={STORE.notes}/>
      </>
    )
}