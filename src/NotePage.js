import React, { Component } from 'react';
import NoteList from './NoteList';
import STORE from './dummy-store';

export default class NotePage extends Component {
  render() {
    // Use the match params to get the id
    const noteName = this.props.match.params.id;
    // console.log(noteName);
    const noteId = STORE.notes.find(n => n.name === noteName).id;
    // console.log(noteId);
    const notes = STORE.notes.filter(note => note.id === noteId);
    console.log(notes.length);
    return (
      <>
        <h1>Note Page</h1>
          {/* Pass the list of all notes to NoteList which will call NoteItem for each */}
          <NoteList notes={notes}/>
          {/* Display the text for the selected note */}
          <p className="Note_text">{notes[0].content}</p>
      </>
    )
  }
}