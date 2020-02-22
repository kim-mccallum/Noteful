import React, { Component } from 'react'

export default class Note extends Component {
  render() {
    return (
      <div className='Note'>
          {/* Pass the folder list to sidebar which will call Folder List and then FolderItem for each */}
          <h1>Just show the text of the selected note here</h1>
      </div>
    )
  }
}