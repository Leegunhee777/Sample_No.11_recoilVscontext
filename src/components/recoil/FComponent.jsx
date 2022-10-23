import React from 'react';
import useModalAtom from '../../recoil/modal/atom';
import useListAtom from '../../recoil/list/atom';
const FComponent = () => {
  const { useModal, initModal } = useModalAtom();
  const { updateList } = useListAtom();
  const [updateValue, setUpdateValue] = React.useState('');

  React.useEffect(() => {
    setUpdateValue(useModal.selectedInfo?.title);
    //updateValue에 modalData 동기
  }, [useModal.selectedInfo?.title]);

  const props = {
    //인풋값
    updateValue,
    //인풋update핸들러
    onChangeInputHander: e => {
      setUpdateValue(e.target.value);
    },
    //모달닫기
    onClickModalClose: () => {
      initModal();
    },
    onClickUpdate: () => {
      if (!updateValue) {
        return alert('빈값을 업데이트할수 없습니다.');
      }
      updateList(useModal.selectedInfo?.id, updateValue);
      initModal();
    },
    //모달값 변경
    //
  };
  return <FComponentView {...props} />;
};

const FComponentView = ({
  updateValue,
  onChangeInputHander,
  onClickModalClose,
  onClickUpdate,
}) => {
  return (
    <div
      style={{
        border: '2px solid blue',
        position: 'fixed',
        top: 0,
        backgroundColor: 'beige',
        width: '50%',
        height: '50%',
      }}
    >
      <h3>FComponent</h3>
      updateValue:
      <input value={updateValue} onChange={onChangeInputHander} />
      <div>
        <button onClick={onClickModalClose}>취소</button>{' '}
        <button onClick={onClickUpdate}>변경</button>
      </div>
    </div>
  );
};
export default FComponent;
