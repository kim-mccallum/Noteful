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
        <nav className="SideNav"></nav>

        <main>
          <Switch>
            {/* Pass the props here as a component. Use a function that returns/renders a component */}
            {/* explicitly pass the props - off autopilot */}
            <Route exact path="/" component={(routeProps) => <HomePage routeProps={routeProps} store={STORE}/>} />
            <Route path='/folder/:id' component={(routeProps) => <FolderPage routeProps={routeProps} store={STORE} />} />
            <Route path='/note/:id' component={(routeProps) => <NotePage routeProps={routeProps} store={STORE} />}/>
            <Route component={NotFoundPage}/>
          </Switch>
        </main>
        <footer></footer>
      </div>
    )
  }
}

