import React, { useContext } from 'react';

import { NotesContext, MAX_NOTES } from '../reducer/notes';
import Notes from './Notes';
import NotesAuthor2 from './NotesAuthor2';
import Message from './Message';
import Average from './Average';
import Average2 from './Average2';


const FormAuteur2 = () => {
    const [state, dispatch] = useContext(NotesContext);

    const { notes2, number2, message, average, author2 } = state;

    const handleSet = e => {
        const { value, name } = e.target;

        dispatch({ type : "SET_NUMBER2", number2 : value });
    }

    const handleSubmit = e => {
        e.preventDefault();

        dispatch({ type : "ADD_NUMBER2" });
    }


    return (
        <div className="form">
        <h2> Auteur2 :{author2}</h2>
        {message != '' && <Message message={message} />}
        <form onSubmit={handleSubmit}>
            <div><input className="input" type="text" name="number2" value={number2} onChange={handleSet} /></div>
            <div><button>Add Number</button></div>
        </form>
         {notes2.length >= MAX_NOTES && <Average2 />}
        { notes2.length > 0 && <NotesAuthor2 notes2={notes2} />}
        </div>

    );
}

export default FormAuteur2;