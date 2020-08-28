
import React from 'react';

const NotesAuthor2 = ({ notes2 }) => {

    return (
        <ul>
            {notes2.map((note, i) => <li key={i}>{note}</li>)}
        </ul>
    );
}

export default NotesAuthor2;