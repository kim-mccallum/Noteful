import React, { Component } from 'react'
import FolderItem from './FolderItem'
import './SideNav.css'

export default class SideNav extends Component {
  render() {
    const folders = this.props.folders.map((folder) => {
      return <FolderItem className="FolderItem" folderName={folder.name} key={folder.id}/>
    });
    // Use the props to add a custom class for styling the selected folder - className="FolderItem Selected"
    return (
      <>
        {/* Pass the folder list to sidebar which will call Folder List and then FolderItem for each */}
        <ul className="FolderNav_list">
          {folders}
        </ul>
        <button className="addFolderBtn">
          Add folder
        </button>
      </>
    )
  }
}