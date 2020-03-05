import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NotefulContext from '../NotefulContext';

// Does this have to be an RCC?? Nope - No state or lifecycle methods required
export default class AddFolder extends Component {
    handleFormSubmit = () => {
        this.context.handleSubmitFolder(this.state.folderName) //THIS CALLS THE FUNCTION handleSubmitFolder IN App.js
   } 

   render() {
    // Just two things in the form - Folder name input and Submit button
    return (
            <NotefulContext.Consumer>
                {(context) => (
                <div className="addFolder">
                    <h2>Add Folder</h2>
                    {/* { error } */}
                    {/* get the routeProps.handleSubmitFolder */}
                    <form className="addFolderForm" onSubmit={() => {
                        context.handleSubmitFolder(
                            // Get the folder name from the form here and pass it
                        "testing"
                        )
                        }}>
                        <label htmlFor="folderName">Folder name:</label>
                        <input 
                            type="text" 
                            name="folderName" 
                            id="folderName" 
                            placeholder="folder name"/>

                        <div className="addFolderBtn">
                            <button onClick={(e) => {
                                // Stop the reload
                                e.preventDefault();
                                // send you back to the home URL 
                                this.props.routeProps.history.push('/')
                            }}>Cancel</button>

                            {/* ATTACH A LISTENER HERE TO THIS? NOT NECESSARY SINCE I HAVE AN ONSUBMIT LISTENER ABOVE??? */}
                            <button type="submit" >Save</button>
                        </div>  
                    </form>
                </div>
                )}
        </NotefulContext.Consumer>
        )
    }
}
