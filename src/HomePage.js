import React from 'react';
import SideNav from './SideNav';
import NoteList from './NoteList';

import './HomePage.css'

export default function HomePage(props){
    return (
      <>
        <nav className="App_nav">
          <SideNav />
        </nav>
        <main>
          <NoteList notes={props.store.notes}/>
        </main>
      </>
    )
}