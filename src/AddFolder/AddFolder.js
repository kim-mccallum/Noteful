import React, { Component } from 'react';
import NotefulContext from '../NotefulContext';
import ValidationError from '../ValidationError'

export default class AddFolder extends Component {
    state = {
        folderName: {
            value:'',
            touched: false
        }
    };

    inputHandler = (e) => {
        // use square brackets for dynamic key name
        this.setState({[e.target.name]: {
            value: e.target.value, touched:true}
        })
    }

    validateName(){
        const name = this.state.folderName.value.trim();
        console.log(name)
        if (name.length === 0){
            return "Folder name is required";
        } 
    }

   render() {
    const nameError = this.validateName();
    return (
            <NotefulContext.Consumer>
                {(context) => (
                <div className="addFolder">
                    <h2>Add Folder</h2>
                    {/* { error } */}
                    <form className="addFolderForm" onSubmit={(e) => {
                        e.preventDefault();
                        console.log(this.state.folderName.value)
                        context.handleSubmitFolder(
                            // Get the folder name from the form here and pass it
                            this.state.folderName.value
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
                        {this.state.folderName.touched && <ValidationError message={nameError} />}

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
