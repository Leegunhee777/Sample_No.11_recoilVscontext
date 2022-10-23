const modalInitState = {
    selectedInfo: {
        id:0,
        title:''
    },
}

const modalReducer = (state, action) =>{
    switch(action.type){
        case "OPEN_MODAL":
            return {
                selectedInfo: action.payload
            }
        case "INIT":
            return {  
                selectedInfo: {
                    id:0,
                    title:''
                },
            }
        default:
            throw new Error()
    }
}

export const openModalThunk = (dispatch, selectedInfo)=>{
    dispatch({type:'OPEN_MODAL', payload: selectedInfo})
}

export const initModalThunk = (dispatch)=>{
    dispatch({ type:'INIT' })
}

export {modalInitState, modalReducer}