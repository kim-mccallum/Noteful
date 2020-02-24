import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import SideNav from './SideNav';
import HomePage from './HomePage'
import FolderPage from './FolderPage'
import NotePage from './NotePage'
import NotFoundPage from './NotFoundPage'
import STORE from './dummy-store';
import './App.css'

export default class App extends Component {
  // Set state here - Use this later when the app is ready
  constructor(props) {
    super(props)
    this.state = {
      notes: [STORE.notes],
      folders: [STORE.folders]
  };
  }

  render() {
    console.log(this.state.folders);
    return (
      <div className='App'>
        <Header />
        {/* Call SideNav in the pages that need */}
        <nav className="App_nav">
          <SideNav folders={STORE.folders}/>
        </nav>

        <main>
          <Switch>
            {/* How can I pass props/state to components here? routeProps!  */}
            {/* no custom props neeed */}
            <Route exact path="/" component={HomePage} />
            {/* <Route path='/folder/:id' component={FolderPage} /> */}
            <Route path='/folder/:id' component={(routeProps) => <FolderPage routeProps={routeProps} store={STORE} />} />
            {/* Pass the props here as a component. Use a function that returns/renders a component */}
            {/* explicitly pass the props - off autopilot */}
            <Route path='/note/:id' component={(routeProps) => <NotePage routeProps={routeProps} notes={STORE.notes} />}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </main>
      </div>
    )
  }
}

