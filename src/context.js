import {createContext, useReducer} from 'react'

export const ModeContext = createContext();

const INITIAL_STATE = {darkMode: false};

const ModeReducer = (state, action) => {
    switch(action.type){
        case "TOGGLE":
            return{ darkMode: !state.darkMode};
            default:
                return state;
    }
};

export const ModeProvider = props => {
    const [state, dispatch] = useReducer(ModeReducer, INITIAL_STATE)

    return (
        <ModeContext.Provider value={{state, dispatch}}>
            {props.children}
        </ModeContext.Provider>
    )
}