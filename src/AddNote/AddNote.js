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
            modified:{
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
    
    render() {
        const nameError = this.validateName();
        const contentError = this.validateContent();
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
                            <select onChange={this.inputHandler} name='folderId' value={this.state.folderId.value}>
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
                                disabled={!this.state.name.touched || nameError || !this.state.content.touched || contentError} 
                            >Save Note</button>
                        </div>  
                    </form>
                </div>
                )}
        </NotefulContext.Consumer>
        )
    }
}
