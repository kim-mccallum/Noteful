import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import HomePage from './HomePage'
import FolderPage from './FolderPage'
import NotePage from './NotePage'
import NotFoundPage from './NotFoundPage'
import STORE from './dummy-store';
import './App.css'

export default class App extends Component {
  // Set state here - Use this later when the app is ready - Change this to fake 
  state = {
    notes: [],
    folders: []
  };

  componentDidMount() {
      // fake date loading from API call
      this.setState(STORE);
  }
  
  render() {
    // console.log(this.state.folders);
    return (
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
    )
  }
}

