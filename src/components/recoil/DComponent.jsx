import React from 'react';
import FComponent from './FComponent';
import useListAtom from '../../recoil/list/atom';
import useModalAtom from '../../recoil/modal/atom';

const DComponent = () => {
  const {
    useList: { list },
    addList,
    deleteList,
  } = useListAtom();
  const { setModalInfo, useModal } = useModalAtom();

  const [inputValue, setInputValue] = React.useState('');

  const props = {
    list,
    inputValue,
    onChangeAddInputHander: e => {
      setInputValue(e.target.value);
    },
    onClickSubmitHandler: () => {
      if (!inputValue) {
        return alert('입력을 하셔야 추가할수있습니다.');
      }
      addList(inputValue);
      setInputValue('');
    },
    deleteItemFunc: id => deleteList(id),
    openModalFunc: selectedInfo => setModalInfo(selectedInfo),
    useModal,
  };
  return <DComponentView {...props} />;
};

const DComponentView = ({
  list,
  inputValue,
  onChangeAddInputHander,
  onClickSubmitHandler,
  deleteItemFunc,
  openModalFunc,
  useModal,
}) => {
  console.log('DComponent');
  return (
    <div style={{ border: '2px solid blue' }}>
      D컴포넌트
      {list?.map((value, index) => (
        <div key={index}>
          <span>{value.id}</span>
          {value.title}
          <button onClick={openModalFunc.bind(null, value)}>상세</button>
          <button onClick={deleteItemFunc.bind(null, value.id)}>삭제</button>
        </div>
      ))}
      <input value={inputValue} onChange={onChangeAddInputHander} />
      <button onClick={onClickSubmitHandler}>전송</button>
      {!!useModal.selectedInfo?.id && <FComponent />}
    </div>
  );
};

export default DComponent;
