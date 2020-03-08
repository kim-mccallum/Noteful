import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import HomePage from './HomePage'
import FolderPage from './FolderPage'
import NotePage from './NotePage'
import AddFolder from './AddFolder/AddFolder';
import AddNote from './AddNote/AddNote';
import NotFoundPage from './NotFoundPage';
import NotefulContext from './NotefulContext';
import NotefulError from './NotefulError';
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
        // console.log(folders);
        this.setState({
          notes:notes, 
          folders:folders
        })
      })
      .catch(err => {
        console.log(`Handling the error here: ${err}`)
      })
  }
  // Method to add a new folder form submission - make POST request in here - called by AddFolder
  handleSubmitFolder = folderName => {
    fetch(`http://localhost:9090/folders`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify({name:folderName})
    })
    .then(res => {
      // console.log(res);
      return res.json()
    })
    .then(response => {
      // console.log(response)
      let newState = this.state.folders;
      newState.push({name:folderName, id:response.id})
      this.setState({folders: newState})
    })
    .catch(err => console.log(err))
    }
  // Method to add a new folder form submission - make POST request in here - called by AddFolder
  handleSubmitNote = noteObject => {
    fetch(`http://localhost:9090/notes`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json'
    },
    // Change this to get all the attributes
    body: JSON.stringify({
      id: noteObject.id,
      name: noteObject.name.value,
      // HOW DO I GET THE DATE? 
      modified: noteObject.modified.value,
      folderId: noteObject.folderId.value,
      content: noteObject.content.value
    })
    })
    .then(res => {
      // success/error message?
      console.log(res);
      return res.json()
    })
    .then(response => {
      console.log(response)
      let newState = this.state.notes;
      newState.push(response)
      this.setState({notes: newState})
    })
    .catch(err => console.log(err))
    }

  // Called by in NoteItem
  deleteNoteHandler = noteId => {
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

  deleteFolderHandler = (folderId) => {
    console.log('delete this one: ', folderId)
    fetch(`http://localhost:9090/folders/${folderId}`, {
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
        const newFolders = this.state.folders.filter(folder =>
          folder.id !== folderId)
        this.setState({
          folders: newFolders
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
      deleteNoteHandler: this.deleteNoteHandler, 
      deleteFolderHandler: this.deleteFolderHandler, 
      handleSubmitFolder: this.handleSubmitFolder,
      handleSubmitNote: this.handleSubmitNote
    }
    return (
      <NotefulError>
      {/* // Provider - Wrap everything up so that the descendents have access */}
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
              <Route path='/folder/:id' component={routeProps => <FolderPage routeProps={routeProps} />} />
              <Route path='/note/:id' component={routeProps => <NotePage routeProps={routeProps} store={this.state} />}/>
              {/* ADD NEW ROUTES FOR ADDFOLDER AND ADDNOTE FORM VIEWS */}
              {/* Pass the functions to add folders/notes as props */}
              <Route path='/add-folder' component={routeProps => <AddFolder routeProps={routeProps} />} />
              <Route path='/add-note' component={routeProps => <AddNote routeProps={routeProps} />} />
              <Route component={NotFoundPage}/>
            </Switch>
          </>
        </div>
      </NotefulContext.Provider>
      </NotefulError>
    )
  }
}

