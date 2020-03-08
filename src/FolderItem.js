import React from 'react';
import { NavLink } from 'react-router-dom';
import NotefulContext from './NotefulContext';
import PropTypes from 'prop-types'
import './FolderItem.css'

export default function FolderItem(props){
    console.log(props)
    return (
      <NotefulContext.Consumer>
        {(context) => (
        <li className='FolderItem'>
          {/* <NavLink exact to={`/folder/${props.folderName}`}>{props.folderName}</NavLink> */}
          <NavLink to={`/folder/${props.id}`}>
            {props.name}
          </NavLink>
          <NavLink to={`/`}>
              <button className='deleteFldrBtn' onClick={() => {
                    context.deleteFolderHandler(
                      props.id
                    )
              }}>         
                Delete
              </button>
          </NavLink>
        </li>
        )}
        </NotefulContext.Consumer>
    )
}

PropTypes.FolderItem = { 
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}