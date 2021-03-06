import React, { Component } from 'react'
import NotefulContext from '../NotefulContext';
import ValidationError from '../ValidationError'

export default class AddNote extends Component {
    // Refactor this so that each property also has a 'touched' property
    constructor(props){
        super(props);
        this.state = {
            name: {
                value:'',
                touched: false
            },
            folderId: {
                value:'',
                touched: false
            } ,
            content:{
                value:'',
                touched: false
            }
        }
    }

    inputHandler = (e) => {
        // use square brackets for dynamic key name
        this.setState({[e.target.name]: {
            value: e.target.value, touched: true}
        })
    }

    validateName(){
        const name = this.state.name.value.trim();
        if (name.length === 0){
            return "Note name is required";
        } 
    }

    validateContent(){
        const content = this.state.content.value.trim();
        if (content.length === 0){
            return "Notes cannot be empty";
        } 
    }
    // not working yet
    validateFolderId(){
        const folderId = this.state.folderId.value.trim();
        if (folderId.length === 0){
            return "Please select a folder from the list";
        } 
    }
    
    render() {
        const nameError = this.validateName();
        const contentError = this.validateContent();
        const folderError = this.validateFolderId();
        return (
            <NotefulContext.Consumer>
                {(context) => (
                <div className="addNote">
                    <h2>Add Note</h2>
                    <form className="addNoteForm" onSubmit={(e) => {
                        e.preventDefault();
                        context.handleSubmitNote(
                            this.state
                        )
                        this.props.routeProps.history.push('/')
                        }}>
                        <label>
                            Select a folder 
                            <select onChange={this.inputHandler} name='folderId' value={this.state.folderId.value}>        
                            {/* <option selected="selected" value="Please select a folder">Please select a folder</option> */}
                            <option value="" selected disabled hidden>Choose here</option>
                            {context.folders.map(fldr => {
                                return <option name='folderId' key={`${fldr.id}`} value={`${fldr.id}`}>{`${fldr.name}`}</option>
                            })}
                            </select>
                            {/* THIS ISN'T WORKING HOW I WANT */}
                            {this.state.folderId.touched && <ValidationError message={folderError} />} 
                        </label>

                        <br></br>
                        <label htmlFor="name">Note name:</label>
                        <input 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="note name"
                            onChange={this.inputHandler}/>
                        {this.state.name.touched && <ValidationError message={nameError} />}
                        {/* TEXTAREA FOR THE NOTE ITSELF */}
                        <label>
                            Note text:
                            <textarea 
                                name="content" 
                                placeholder="type note here"
                                onChange={this.inputHandler} />
                                {this.state.content.touched && <ValidationError message={contentError} />}
                        </label>

                        <div className="addNoteBtn">
                            <button onClick={(e) => {
                                // Stop the reload
                                e.preventDefault();
                                // send you back 
                                this.props.routeProps.history.goBack()
                            }}>Cancel</button>

                            <button 
                                type="submit"
                                disabled={
                                    !this.state.folderId.touched || folderError ||
                                    !this.state.name.touched || nameError || 
                                    !this.state.content.touched || contentError
                                } 
                            >Save Note</button>
                        </div>  
                    </form>
                </div>
                )}
        </NotefulContext.Consumer>
        )
    }
}
