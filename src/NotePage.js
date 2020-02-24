import React, { Component } from 'react';
import NoteList from './NoteList';

export default class NotePage extends Component {
  render() {
    // Use the match params to get the id
    const noteName = this.props.routeProps.match.params.id;
    const noteId = this.props.notes.find(n => n.name === noteName).id;
    const notes = this.props.notes.filter(note => note.id === noteId);
    // Always 1 item - Do something with this
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