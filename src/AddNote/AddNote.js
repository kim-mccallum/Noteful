import React, { Component } from 'react'
import NotefulContext from '../NotefulContext';

export default class AddNote extends Component {
    // Refactor this so that each property also has a 'touched' property
    constructor(props){
        super(props);
        this.state = {
            name: '',
            modified:'',
            folderId: '' ,
            content:''
        }
    }

    inputHandler = (e) => {
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
                    <form className="addNoteForm" onSubmit={(e) => {
                        e.preventDefault();
                        context.handleSubmitNote(
                            // Pass the entire state object?
                            this.state
                        )
                        this.props.routeProps.history.push('/')
                        }}>
                        {/* A SELECT MENU WITH ATTRIBUTES TO MATCH TO THE FOLDER ID */}
                        {/* IF YOU GET HERE FROM THE FOLDER PAGE, CAN I GET THE FOLDER NAME TO USE AS A DEFAULT VALUES?  */}
                        <label>
                            Select a folder 
                            <select onChange={this.inputHandler} name='folderId' value={this.state.folderId}>
                                {context.folders.map(fldr => {
                                    return <option name='folderId' key={`${fldr.id}`} value={`${fldr.id}`}>{`${fldr.name}`}</option>
                                })}
                            </select>

                        </label>

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
                                // send you back 
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
