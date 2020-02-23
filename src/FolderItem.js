import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FolderItem.css'

export default class FolderItem extends Component {
  render() {
    return (
      <li className='FolderItem'>
        <Link to={`/folder/${this.props.folderName}`}>{this.props.folderName}</Link>
      </li>
    )
  }
}