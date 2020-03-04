import React, { Component } from 'react'

export default class AddFolder extends Component {
    // Initialize state for folder item
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          id: "",
        };
      }
    // Methods to set the state (name, id)
    nameChanged(name) {
    this.setState({
        name
    });
    }
    // HOW DO I GENERATE THE ID? 
    idChanged(id) {
    this.setState({
        id
    });
    }
    // Method to handle the form submission - POST to the API
    handleSubmit(){

    }

    render() {
        return (
      <div className="addbookmark">
        <h2>Add Bookmark</h2>
        { error }
        <form className="addFolderForm" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="folderName">Folder name:</label>
          <input 
            type="text" 
            name="folderName" 
            id="folderName" 
            placeholder="folder name"
            value={this.state.name}
            onChange={e => this.idChanged(e.target.value)}/>

            {/* SHOULD I HAVE AN INPUT FOR ID OR GENERATE A UNIQUE ONE SOMEHOW? */}
          <label htmlFor="folderId">Folder ID:</label>  
          <input 
            type="text" 
            name="folderId" 
            id="folderId" 
            placeholder="folderId"
            value={this.state.url}
            onChange={e => this.urlChanged(e.target.value)}/>

          <div className="addFolderBtn">
            <button onClick={e => this.props.showForm(false)}>Cancel</button>
            <button type="submit" >Save</button>
          </div>  
        </form>
      </div>
        )
    }
}
