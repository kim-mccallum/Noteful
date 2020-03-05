import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';

// Does this have to be an RCC?? Nope - No state or lifecycle methods required
export default class AddFolder extends Component {
    state = {
        folderName: ''
    };


    // Controlled form - just changes state from input itself
    inputHandler = (e) => {
        // use square brackets for dynamic key name
        this.setState({[e.target.name]:e.target.value})
    }

   render() {
    // Just two things in the form - Folder name input and Submit button
    console.log(this.state);
    return (
            <NotefulContext.Consumer>
                {(context) => (
                <div className="addFolder">
                    <h2>Add Folder</h2>
                    {/* { error } */}
                    <form className="addFolderForm" onSubmit={(e) => {
                        e.preventDefault();
                        context.handleSubmitFolder(
                            // Get the folder name from the form here and pass it
                            this.state.folderName
                        )
                        this.props.routeProps.history.push('/')
                        }}>
                        <label htmlFor="folderName">Folder name:</label>
                        <input 
                            type="text" 
                            name="folderName" 
                            id="folderName" 
                            placeholder="folder name"
                            onChange={this.inputHandler}/>

                        <div className="addFolderBtn">
                            <button onClick={(e) => {
                                // Stop the reload
                                e.preventDefault();
                                // send you back to the home URL 
                                this.props.routeProps.history.goBack()
                            }}>Cancel</button>

                            <button type="submit" >Save</button>
                        </div>  
                    </form>
                </div>
                )}
        </NotefulContext.Consumer>
        )
    }
}
