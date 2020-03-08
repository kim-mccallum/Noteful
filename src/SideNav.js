import React , { useContext } from 'react';
import FolderItem from './FolderItem'
import { NavLink } from 'react-router-dom';
import NotefulContext from './NotefulContext';
import './SideNav.css'

// Since I don't use props, I guess I don't need props? 
export default function SideNav(){
    // This could use context instead - I am using Hooks even though I didn't officially learn them. Is that okay? 
    const folders = useContext(NotefulContext).folders.map((folder) => {
      return <FolderItem className="FolderItem" id={folder.id} key={folder.id} name={folder.name}/>
    });

    return (
      <>
        {/* Pass the folder list to sidebar which will call Folder List and then FolderItem for each */}
        <ul className="FolderNav_list">
          {folders}
          <li className="AddFolderItem">
            {/* Use Link to go to AddFolder form */}
            <NavLink to={`/add-folder`}>Add Folder</NavLink>
          </li>
        </ul>
      </>
    )
}

