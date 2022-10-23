import React, { useContext, useReducer} from 'react'
import {listInitState, listReducer} from './listReducer'
import {modalInitState, modalReducer} from './modalReducer'

export const ContextState = React.createContext();
export const ContextDispatch = React.createContext();

export const GlobalContextProvider = ({children}) => {
    const [listState, listDispatch] = useReducer(listReducer,listInitState);
    const [modalState, modalDispatch] = useReducer(modalReducer,modalInitState);

    return(
        <ContextState.Provider value={{listState, modalState}}>
            <ContextDispatch.Provider value={{ listDispatch, modalDispatch}}>
                {children}
            </ContextDispatch.Provider>
        </ContextState.Provider>
    )
}

export const useState= () => {
    const state = useContext(ContextState);
    if(!state) throw new Error('cannot find state')
    return state;
}

export const useDispatch = () => {
    const dispatch = useContext(ContextDispatch);
    if(!dispatch) throw new Error('cannot find Dispatch')
    return dispatch;
}


