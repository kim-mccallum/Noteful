import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import NotefulContext from '../NotefulContext';

// Change this to functional compoent
export default function AddFolder(props) {
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
                            props.routeProps.history.push('/')
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
