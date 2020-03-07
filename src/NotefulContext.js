import React from 'react';

const NotefulContext = React.createContext({
    folders:[],
    notes:[],
    deleteNoteHandler: () => {},
    deleteFolderHandler: () => {},
    handleSubmitFolder: () => {},
    handleSubmitNote: () => {},
});

export default NotefulContext;