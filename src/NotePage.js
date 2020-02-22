import React, { Component } from 'react';
import Sidebar from './SideBar';
import NoteList from './NoteList';
import Note from './Note';

export default class NotePage extends Component {
  render() {
    return (
      <div className='FolderPage'>
          {/* Pass the folder list to sidebar which will call FolderItem for each */}
          <Sidebar />
          {/* Pass the list of all notes to NoteList which will call NoteItem for each */}
          <NoteList />
          {/* Display the text for the selected note */}
          <Note />
      </div>
    )
  }
}