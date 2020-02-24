import React, { Component } from 'react'
import FolderItem from './FolderItem'
import './SideNav.css'

export default class SideNav extends Component {
  render() {
    const folders = this.props.folders.map((folder) => {
      return <FolderItem className="FolderItem" folderName={folder.name} key={folder.id}/>
    });
    return (
      <div className='SideNav'>
          {/* Pass the folder list to sidebar which will call Folder List and then FolderItem for each */}
          <ul className="NoteListNav_list">
            {folders}
          </ul>
          <button>
            Add folder
          </button>
      </div>
    )
  }
}