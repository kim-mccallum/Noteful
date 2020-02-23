import React, { Component } from 'react';
import Sidebar from './SideBar';
import NoteList from './NoteList';
import Note from './Note';
import STORE from './dummy-store';

export default class NotePage extends Component {
  render() {
    const exampleFolder = [STORE.folders[0]];
    const exampleNote = [STORE.notes[0]];
    console.log(exampleNote)
    return (
      <div className='NotePage'>
        <h1>Note Page</h1>
          {/* Pass the folder list to sidebar which will call FolderItem for each */}
          <Sidebar folders={exampleFolder}/>
          {/* Pass the list of all notes to NoteList which will call NoteItem for each */}
          <NoteList notes={exampleNote}/>
          {/* Display the text for the selected note */}
          <p>{exampleNote.content}</p>
      </div>
    )
  }
}