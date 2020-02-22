import React, { Component } from 'react'

export default class NoteList extends Component {
  render() {
    return (
      <div className='NoteList'>
          {/* Pass the folder list to sidebar which will call Folder List and then FolderItem for each */}
          <h1>Right now I'm just a placeholder for NoteList. Eventually, I will map over the notes and call NoteItem for each.</h1>
          <p>I will add an AddNote button here</p>
      </div>
    )
  }
}