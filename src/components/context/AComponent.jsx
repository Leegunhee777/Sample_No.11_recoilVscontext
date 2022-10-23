import React from 'react';
import CComponent from './CComponent';
import { useState, useDispatch } from '../../context/GlobalContextProvider';
import { addListThunk, deleteListThunk } from '../../context/listReducer';
import { openModalThunk } from '../../context/modalReducer';

//VAC 패턴 적용 MVVM 느낌의 패턴임,
//M: context 비지니스로직, VM UI로직, V 순수뷰
const AComponent = () => {
  const {
    listState: { list },
    modalState: { selectedInfo },
  } = useState();
  const { listDispatch, modalDispatch } = useDispatch();

  const [inputValue, setInputValue] = React.useState('');

  const props = {
    list,
    selectedInfo,
    inputValue,
    onChangeInputHander: e => {
      setInputValue(e.target.value);
    },
    deleteItemFunc: id => deleteListThunk(listDispatch, id),
    addItemFunc: () => {
      if (!inputValue) {
        return alert('입력을 하셔야 추가할수있습니다.');
      }
      addListThunk(listDispatch, inputValue, list);
      setInputValue('');
    },
    openModalFunc: value => openModalThunk(modalDispatch, value),
  };
  return <AComponentView {...props} />;
};

const AComponentView = ({
  list,
  selectedInfo,
  inputValue,
  onChangeInputHander,
  deleteItemFunc,
  addItemFunc,
  openModalFunc,
}) => {
  console.log('AComponent');
  return (
    <div style={{ border: '2px solid red' }}>
      AComponent
      {list?.map((value, index) => (
        <div key={index}>
          <span>{value.id}</span>
          {value.title}
          <button onClick={openModalFunc.bind(null, value)}>상세</button>
          <button onClick={deleteItemFunc.bind(null, value.id)}>삭제</button>
        </div>
      ))}
      <input value={inputValue} onChange={onChangeInputHander} />
      <button onClick={addItemFunc}>전송</button>
      {!!selectedInfo.id && <CComponent />}
    </div>
  );
};

export default AComponent;
