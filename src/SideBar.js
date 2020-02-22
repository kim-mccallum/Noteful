import React, { Component } from 'react'

export default class SideBar extends Component {
  render() {
    return (
      <div className='SideBar'>
          {/* Pass the folder list to sidebar which will call Folder List and then FolderItem for each */}
          <h1>Right now I'm just a placeholder for SideBar. Eventually, I will call FolderList and FolderItem.</h1>
      </div>
    )
  }
}