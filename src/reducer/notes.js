import React, { createContext } from 'react';

export const NotesContext = createContext({});

export const initialState = {
    author1: "Alan",
    author2: "Alice",
    hobiesAuthor1: ["React", "JS", "MongoDb"],
    hobiesAuthor2: ["PHP", "Symfony", "SQL"],
    notes: [],
    notes2: [],
    number: '',
    number2: '',
    message: '',
    average : 0,
    average2: 0,
    active: false,
    active2: false
};

export const MAX_NOTES = 2;

export const reducer = (state, action) => {

    switch (action.type) {

        

        case "active": 

        return {
            ...state,
            active: !state.active

            //message: "Impossible d'afficher les passion" 
            

        }
        case "active2": 

        return {
            ...state,
            active2: !state.active2

            //message: "Impossible d'afficher les passion" 
            

        }

    

        case "SET_NUMBER":

            return {
                ...state,
                number: action.number,
                message: ''
            }

        case "SET_NUMBER2":

            return {
                ...state,
                number2: action.number2,
                message: ''
            }




        case "AVERAGE":

            if(state.notes.length <= 1){



                return {
                    ...state,
                    message : "Attention on ne peut pas calculer la moyenne"
                }
            }

            let sum = state.notes.reduce((curr, acc) => curr + acc )/(state.notes.length);
            sum = Math.floor(sum * 100) / 100;

            return {
                ...state,
                average : sum
            }


            case "AVERAGE2":

                if(state.notes2.length <= 1){
    
    
    
                    return {
                        ...state,
                        message : "Attention on ne peut pas calculer la moyenne"
                    }
                }
    
                let sum2 = state.notes2.reduce((curr, acc) => curr + acc )/(state.notes2.length);
                sum2 = Math.floor(sum2 * 100) / 100;
    
                return {
                    ...state,                    average2 : sum2
                }






        case "ADD_NUMBER": {

            if (state.number.trim() === '' || isNaN(state.number)) {

                return {
                    ...state,
                    message: "Attention ce n'est pas un nombre"
                }
            }

            if (state.notes.length >= MAX_NOTES) {

                return {
                    ...state,
                    message: "Attention vous ne pouvez plus ajouter de notes"
                }
            }

            return {
                ...state,
                notes: state.notes.concat(Number( state.number ) ), // concat renvoie un nouveau tableau nouvelle référence
                number: ''
            }
        }

        case "ADD_NUMBER2": {

            if (state.number2.trim() === '' || isNaN(state.number2)) {

                return {
                    ...state,
                    message: "Attention ce n'est pas un nombre"
                }
            }

            if (state.notes2.length >= MAX_NOTES) {

                return {
                    ...state,
                    message: "Attention vous ne pouvez plus ajouter de notes"
                }
            }

            return {
                ...state,
                notes2: state.notes2.concat(Number( state.number2 ) ), // concat renvoie un nouveau tableau nouvelle référence
                number2: ''
            }
        }


        default:

            return state;
    }

}
