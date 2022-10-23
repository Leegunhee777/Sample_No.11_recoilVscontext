import React from 'react'
import { useState, useDispatch } from '../../context/GlobalContextProvider'
import { initModalThunk } from '../../context/modalReducer';
import { updateListThunk } from '../../context/listReducer';
const CComponent = ()=>{
    const {  modalState } = useState();
    const {  modalDispatch, listDispatch } = useDispatch()

    const [updateValue, setUpdateValue] = React.useState('')

    React.useEffect(()=>{
        setUpdateValue(modalState.selectedInfo.title)
    },[modalState.selectedInfo])

    const onChangeUpdateInputHander = (e)=>{
        setUpdateValue(e.target.value)
    }

    const onClickUpdateHandler =()=>{
        if(!updateValue){
            return alert('빈값을 업데이트할수없습니다.')
        }
        updateListThunk(listDispatch,modalState.selectedInfo?.id, updateValue)
        initModalThunk(modalDispatch)
    }
    return <div style={{border:'2px solid blue', position:'fixed',top:0, backgroundColor:'beige',width:'50%',height:'50%',}}>
        <h3>CComponent</h3>
    updateValue:
     <input 
        value={updateValue}
        onChange={onChangeUpdateInputHander}
    />
    <div>
    <button onClick={initModalThunk.bind(null,modalDispatch)}>취소</button> <button onClick={onClickUpdateHandler}>변경</button>
    </div>

    </div>
}

export default CComponent