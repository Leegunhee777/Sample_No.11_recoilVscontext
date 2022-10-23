const listInitState = {
    isLoading: false,
    list: [
        { id: 1, title: 'apple'},
        { id: 2, title: 'banana'},
        { id: 3 , title: 'orange'}],
    title: '이것은 전체 리스트입니다.'
}

const listReducer = (state, action) => {
    switch(action.type){
        case "START_FETCHING_LIST":
            return {
                ...state,
                isLoading: true
            }
        case "SUCCESS_FETCHING_LIST":
            return {
                ...state,
                isLoading: false,
                list: action.payload
            }
        case "FAIL_FETCHING_LIST":
            return {
                ...state,
                isLoading: false,
                list: []
            }
        case "ADD_LIST":
            return{
                ...state,
                list: [...state.list, action.payload]
            }
        case "UPDATE_LIST":
            const updateList = state.list.map(value => {
                if(value.id === action.payload.id){
                 console.log( {...value, title: action.payload.title},'payload')
                    return { ...value, title: action.payload.title}
                }
                return value;
            })
            return{
                ...state,
                list: updateList
            }
        case "REMOVE_LIST":
            const removeList = state.list.filter(value=>  value.id !== action.payload)
            return{
                ...state,
                list: removeList
            }
        default :
        throw new Error()
    }
}


export const addListThunk = (dispatch, inputValue, list) =>{
        const temp = {
            id: list[list.length - 1].id +1,
            title: inputValue
        }
        dispatch({type:'ADD_LIST', payload: temp})
    
}

export const deleteListThunk = (dispatch, id) =>{
    dispatch({type:'REMOVE_LIST', payload: id})
}

export const updateListThunk = (dispatch, selectedInfoId, updateInputValue) =>{
    dispatch({type:'UPDATE_LIST', payload: {
        id: selectedInfoId,
        title: updateInputValue
    }})
};

// //회원가입관련이다.
// const register = ({email, password, firstName, lastName}) => {
//     return async (dispatch) => {
//       const response = await axios.post('/api/account/register', {
//         email,
//         password,
//         firstName,
//         lastName,
//       })
//       const {accessToken, user} = response.data
  
//       window.localStorage.setItem('accessToken', accessToken)
//       dispatch(slice.actions.registerSuccess({user}))
//     }
//   }
  
// export const getBooks = async (dispatch, id) => {
//     toggleIsLoadingBook(dispatch);
//     console.log('in bookActions.js [getBooks]')
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/todos/${id}`
//     );
//     const payload = await response.json();
//     console.log({ payload })
//     setTimeout(() => {
//       dispatch({ type: types.GET_BOOKS, payload });
//       toggleIsLoadingBook(dispatch);
//     }, 100);
//   };
  
export {listInitState, listReducer}