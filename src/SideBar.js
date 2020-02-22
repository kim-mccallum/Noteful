import React, { Component } from 'react'
import FolderItem from './FolderItem'

export default class SideBar extends Component {
  render() {
    const folders = this.props.folders.map((folder) => {
      return <FolderItem className="FolderItem" folderName={folder.name} key={folder.id}/>
    });
    return (
      <div className='SideBar'>
          {/* Pass the folder list to sidebar which will call Folder List and then FolderItem for each */}
          <h1>Right now I'm just a placeholder for SideBar. Eventually, I will call FolderList and FolderItem.</h1>
          <ul>
            {folders}
          </ul>
      </div>
    )
  }
}