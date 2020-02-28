import React from 'react';

export default function NotePageSideNav(props){
    return (
        <nav className='NotePage_SideNav'>
            <h1>{props.folderName}</h1>

            <button onClick={()=> props.routeProps.history.goBack()} >
            Go Back
            </button>

        </nav>
    )
}