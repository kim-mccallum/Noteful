import React, { Component } from 'react';
import SideNav from './SideNav';
import NoteList from './NoteList';
import Note from './Note';
import STORE from './dummy-store';

export default class NotePage extends Component {
  render() {
    const exampleFolder = [STORE.folders[0]];
    const exampleNote = [STORE.notes[0]];
    console.log(exampleNote)
    return (
      <>
        <h1>Note Page</h1>
          {/* Pass the list of all notes to NoteList which will call NoteItem for each */}
          <NoteList notes={exampleNote}/>
          {/* Display the text for the selected note */}
          <p className="Note_text">{exampleNote.content}</p>
      </>
    )
  }
}