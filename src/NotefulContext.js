import React from 'react';

const NotefulContext = React.createContext({
    folders:[],
    notes:[],
    deleteNoteHandler: () => {},
    handleSubmitFolder: () => {},
});

export default NotefulContext;