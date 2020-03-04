import React from 'react';
import FolderItem from './FolderItem'
import { NavLink } from 'react-router-dom';
import './SideNav.css'

export default function SideNav(props){
    const folders = props.folders.map((folder) => {
      return <FolderItem className="FolderItem" id={folder.id} key={folder.id} name={folder.name}/>
    });
    return (
      <>
        {/* Pass the folder list to sidebar which will call Folder List and then FolderItem for each */}
        <ul className="FolderNav_list">
          {folders}
          <li className="AddFolderItem">
            {/* HOW TO WIRE THIS BTN UP TO LINK TO AddFolder component? */}
            {/* Use Link to got to AddFolder form */}
            <NavLink to={`/add-folder`}>Add Folder</NavLink>
          </li>
        </ul>
      </>
    )
}