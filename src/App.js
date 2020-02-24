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
  // Set state here - Remove
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
        <nav className="App_nav">
          <SideNav folders={STORE.folders}/>
        </nav>

        <main>
          <Switch>
            {/* How can I pass props/state to components here? routeProps!  */}
            <Route exact path="/" component={HomePage} />
            <Route path='/folder/:id' component={FolderPage} />
            <Route path='/note/:id' component={NotePage} />
            <Route component={NotFoundPage}/>
          </Switch>
        </main>
      </div>
    )
  }
}

