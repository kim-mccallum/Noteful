import React from 'react';
import { NavLink } from 'react-router-dom';
import './FolderItem.css'

export default function FolderItem(props){
    return (
      <li className='FolderItem'>
        <NavLink exact to={`/folder/${props.folderName}`}>{props.folderName}</NavLink>
      </li>
    )
}