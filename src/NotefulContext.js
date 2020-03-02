import React from 'react';

const NotefulContext = React.createContext({
    folders:[],
    notes:[],
    deleteNoteHandler: () => {},
});

export default NotefulContext;