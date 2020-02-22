import React, { Component } from 'react';
import Sidebar from './SideBar';
import NoteList from './NoteList';

export default class HomePage extends Component {
  render() {
    return (
      <div className='HomePage'>
          {/* Pass the folder list to sidebar which will call FolderItem for each */}
          <Sidebar />
          {/* Pass the list of all notes to NoteList which will call NoteItem for each */}
          <NoteList />
      </div>
    )
  }
}