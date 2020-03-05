import React, { Component } from 'react'
import NotefulContext from '../NotefulContext';

export default class AddNote extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            modified:'',
            folderId:'',
            content:''
        }
    }

    // Controlled form - just changes state from input itself
    inputHandler = (e) => {
        // use square brackets for dynamic key name - make the names match!
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    render() {
        return (
            <NotefulContext.Consumer>
                {(context) => (
                <div className="addNote">
                    <h2>Add Note</h2>
                    {/* { error } */}
                    <form className="addNoteForm" onSubmit={(e) => {
                        e.preventDefault();
                        context.handleSubmitNote(
                            // Pass the entire state object?
                            this.state.folderName
                        )
                        this.props.routeProps.history.push('/')
                        }}>
                        {/* MAKE THIS A SELECT MENU AND USE LOGIC TO GET THE FOLDER NAMES AND MATCH TO THE FOLDER ID */}
                        {/* FOLDER */}

                        {/* GET CURRENT TIME/DATE MODIFIED - LIKELY IN THE FUNCTION NOT HERE */}

                        {/* NOTE NAME */}
                        <label htmlFor="name">Note name:</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="note name"
                            onChange={this.inputHandler}/>

                        {/* TEXTAREA FOR THE NOTE ITSELF */}
                        <label>
                            Note text:
                            <textarea 
                                name="content" 
                                placeholder="type note here"
                                onChange={this.inputHandler} />
                        </label>

                        <div className="addNoteBtn">
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
