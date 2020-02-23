import React, { Component } from 'react'

export default class FolderItem extends Component {
  render() {
    return (
      <li className='FolderItem'>
        {this.props.folderName}
      </li>
    )
  }
}