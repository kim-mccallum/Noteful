import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import HomePage from './HomePage'
import FolderPage from './FolderPage'
import NotePage from './NotePage'
import NotFoundPage from './NotFoundPage'
import NotefulContext from './NotefulContext';
import './App.css'

export default class App extends Component {
  state = {
    notes: [],
    folders: []
  };

  // Get the data from the API and use setState to reset
  componentDidMount() {
      // Implement 2 fetch request to 2 endpoints 
      const folderURL = 'http://localhost:9090/folders'
      const noteURL = 'http://localhost:9090/notes'
      Promise.all([
        fetch(noteURL),
        fetch(folderURL),
      ])
      .then(([notesRes, foldersRes]) => {
        if (!notesRes.ok){ 
          return notesRes.json().then(e => Promise.reject(e));
        }
        if (!foldersRes.ok){
          return foldersRes.json().then(e => Promise.reject(e));
        }
        return Promise.all([notesRes.json(), foldersRes.json()]);
      })
      .then(([notes, folders]) => {
        this.setState({
          notes:notes, 
          folders:folders
        })
      })
      .catch(err => {
        console.log(`Handling the error here: ${err}`)
      })
  }

  // Called by the Delete Request in NoteItem
  deleteNoteHandler = noteId => {
    // DELETE note request should make a request to /notes/<note-id>
    // HELP ME UNDERSTAND/FIX THIS FUNCTION
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }
      })
      .then(res => {
        if (!res.ok) {
          // get the error message from the response,
          return res.json().then(error => {
            // then throw it
            throw error
          })
        }
        return res.json()
      })
      .then(data => {
        // logic to delete - Later make the fn handle notes and folders - If it's a note do one thing, if it's a folder do the other
        const newNotes = this.state.notes.filter(note =>
          note.id !== noteId)
        this.setState({
          notes: newNotes
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    // create value object from context here
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNoteHandler: this.deleteNoteHandler
    }
    return (
      // Provider - Wrap everything up so that the descendents have access
      <NotefulContext.Provider
        value={contextValue}>
        <div className='App'>
          <>
            <Header />
          </>
          <>
            <Switch>
              {/* Pass the props here as a component. Use a function that returns/renders a component */}
              {/* explicitly pass the props - "off autopilot" */}
              <Route exact path="/" component={routeProps => <HomePage routeProps={routeProps} store={this.state}/>} />
              <Route path='/folder/:id' component={routeProps => <FolderPage routeProps={routeProps} store={this.state} />} />
              <Route path='/note/:id' component={routeProps => <NotePage routeProps={routeProps} store={this.state} />}/>
              {/* ADD NEW ROUTES FOR ADDFOLDER AND ADD NOTE FORM VIEWS??? */}
              <Route component={NotFoundPage}/>
            </Switch>
          </>
        </div>
      </NotefulContext.Provider>
    )
  }
}

