import React, { useContext } from 'react';

import { NotesContext } from '../reducer/notes';

const Average2 = (props) => {
    const [state, dispatch] = useContext(NotesContext);

    const { average2 } = state;

    const handleAverage = () => {
        dispatch({ type: "AVERAGE2" });
    }

    return (
        <div className="average">
           <p>{average2}</p>
           <p><button onClick={handleAverage} >Average</button></p>
        </div>
    );
}

export default Average2;