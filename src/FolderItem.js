import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './FolderItem.css'

export default class FolderItem extends Component {
  render() {
    return (
      <li className='FolderItem'>
        <NavLink exact to={`/folder/${this.props.folderName}`}>{this.props.folderName}</NavLink>
      </li>
    )
  }
}