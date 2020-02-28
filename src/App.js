import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import HomePage from './HomePage'
import FolderPage from './FolderPage'
import NotePage from './NotePage'
import NotFoundPage from './NotFoundPage'
import STORE from './dummy-store';
import NotefulContext from './NotefulContext';
import './App.css'

export default class App extends Component {
  // Set state here - Use this later when the app is ready 
  state = {
    notes: [],
    folders: []
  };

  // Get the data from the API and use setState to reset
  componentDidMount() {
      // Implement 2 fetch request to 2 endpoints 
      const folderURL = 'http://localhost:9090/folders'
      const noteURL = 'http://localhost:9090/notes'
      // fake date loading from API call
      this.setState(STORE);
  }

  // DELETE note request should make a request to /notes/<note-id> - likely needs headers
  deleteHandler = () => {
    //add the logic ot delete 
    // If it's a note do one thing, if it's a note delete that
  }

  render() {
    // create value object here
    return (
      // Provider
      <div className='App'>
        <>
          <Header />
        </>
        <>
          <Switch>
            {/* Pass the props here as a component. Use a function that returns/renders a component */}
            {/* explicitly pass the props - off autopilot */}
            <Route exact path="/" component={routeProps => <HomePage routeProps={routeProps} store={STORE}/>} />
            <Route path='/folder/:id' component={routeProps => <FolderPage routeProps={routeProps} store={STORE} />} />
            <Route path='/note/:id' component={routeProps => <NotePage routeProps={routeProps} store={STORE} />}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </>
      </div>
      // Provider
    )
  }
}

