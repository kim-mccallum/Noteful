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
        console.log('look at the target', e.target)
        // use square brackets for dynamic key name - make the names match!
        this.setState({
            [e.target.name]:e.target.value,
        })
    }
    render() {
        // CREATE A LIST OF OPTIONS FROM THE FOLDERS
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
                            this.state
                        )
                        this.props.routeProps.history.push('/')
                        }}>
                        {/* A SELECT MENU WITH ATTRIBUTES TO MATCH TO THE FOLDER ID -HARDCODE NOW BUT GET FOLDERS FROM CONTEXT AND MAP */}
                        <label>
                            Select a folder 
                            <select>
                                {/* <option name="folderId" value="111-222">Folder1</option>
                                <option name="folderId">Folder2</option> */}
                                {context.folders.map(fldr => {
                                    return `<option name=${fldr.id}>${fldr.name}</option>`
                                })}
                            </select>
                        </label>

                        {/* GET CURRENT TIME/DATE MODIFIED - LIKELY IN THE FUNCTION NOT HERE */}

                        {/* NOTE NAME */}
                        <br></br>
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

                            <button type="submit">Save Note</button>
                        </div>  
                    </form>
                </div>
                )}
        </NotefulContext.Consumer>
        )
    }
}
