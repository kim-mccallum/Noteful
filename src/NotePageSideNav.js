import React from 'react';
import './NotePageSideNav.css'

export default function NotePageSideNav(props){
    return (
        <nav className='NotePage_SideNav'>
            <h1>Folder: </h1>
            <h2>{props.folderName}</h2>

            <button className="notePageGoBack" onClick={()=> props.routeProps.history.goBack()} >
            Go Back
            </button>

        </nav>
    )
}