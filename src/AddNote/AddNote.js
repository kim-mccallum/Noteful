import React, { Component } from 'react'
import NotefulContext from '../NotefulContext';

export default class AddNote extends Component {
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
        // This prints out all the folders not just the one I selected?!?
        console.log(e.target)
        // debugger;
        if (e.target.name === 'folderId'){
            this.setState({
                [e.target.name]:e.target.key,
            })
        }
        if (e.target.name !== 'folderId'){
            this.setState({
                [e.target.name]:e.target.value,
            })
        }
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
                            <select onChange={this.inputHandler} name='folderId'>
                                {context.folders.map(fldr => {
                                    return <option name='folderId' key={`${fldr.id}`}>{`${fldr.name}`}</option>
                                })}
                            </select>
                            {/* <select 
                                multiple = {true}
                                value= {
                                    context.folders.map(fldr => fldr.name)                               
                                }
                            ></select> */}

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

                            {/* How about a listener and handler to add the date upon save?  */}
                            <button type="submit">Save Note</button>
                        </div>  
                    </form>
                </div>
                )}
        </NotefulContext.Consumer>
        )
    }
}
