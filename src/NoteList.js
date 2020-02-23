import React, { Component } from 'react'
import NoteItem from './NoteItem'

export default class NoteList extends Component {
  render() {
    const notes = this.props.notes.map((note) => {
      return <NoteItem className="noteItem" note={note} key={note.id}/>
    })
    return (
      <section className='NoteList_main'>
          {/* Pass the folder list to sidebar which will call Folder List and then FolderItem for each */}
          <ul>
            {notes}
          </ul>
          <button>
            Add Note
          </button>
      </section>
    )
  }
}