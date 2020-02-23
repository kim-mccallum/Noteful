import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import HomePage from './HomePage'
import FolderPage from './FolderPage'
import NotePage from './NotePage'
import NotFoundPage from './NotFoundPage'
// import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path='/folder' component={FolderPage} />
            <Route path='/note' component={NotePage} />
            <Route component={NotFoundPage}/>
          </Switch>
        </main>
      </div>
    )
  }
}

