import React from 'react';
import useListAtom from '../../recoil/list/atom';
import useModalAtom from '../../recoil/modal/atom';
import { useState } from '../../context/GlobalContextProvider';
import EEComponent from './EEComponent';

const EComponent = () => {
  const {
    useModal: { selectedInfo },
  } = useModalAtom();

  // console.log(selectedInfo,'12121221')
  console.log('EComponent');
  return (
    <div style={{ border: ' 2px solid red', height: '500px' }}>
      E컴포넌트
      <EEComponent />
    </div>
  );
};

export default EComponent;
