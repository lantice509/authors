import React, { useContext } from 'react';

import { NotesContext} from '../reducer/notes';
//import Passion1 from './Passion1'


export const Hobies = () => {
    const [state, dispatch] = useContext(NotesContext);
    const {hobiesAuthor1, hobiesAuthor2, active, active2} = state;



    return (
        <div> 
            <button className="hobies1" onClick={() => dispatch({type: "active" })}>passion auteur1</button>
           { active   &&  hobiesAuthor1.map((passions, i) => <p key={i}>{passions}</p>) }

           <button className="hobies2" onClick={() => dispatch({type: "active2"})}>passion auteur2</button>
    {active2 && hobiesAuthor2.map((passion, i) => <p key={i}>{passion}</p>) }
             
        </div>
    );
}

export default Hobies;