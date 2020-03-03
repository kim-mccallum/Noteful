import React from 'react';
import FolderItem from './FolderItem'
import './SideNav.css'

export default function SideNav(props){
    const folders = props.folders.map((folder) => {
      // return <FolderItem className="FolderItem" folderName={folder.name} key={folder.id}/>
      return <FolderItem className="FolderItem" id={folder.id} key={folder.id} name={folder.name}/>
    });
    // Use the props to add a custom class for styling the selected folder - className="FolderItem Selected"
    return (
      <>
        {/* Pass the folder list to sidebar which will call Folder List and then FolderItem for each */}
        <ul className="FolderNav_list">
          {folders}
          <li className="AddFolderItem">
            <button className="addFolderBtn">
              Add Folder
            </button>
          </li>
        </ul>
      </>
    )
}