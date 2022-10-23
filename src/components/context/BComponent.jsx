import React, { memo } from 'react';
import { useState } from '../../context/GlobalContextProvider';
import BBComponent from './BBComponent';

const BComponent = () => {
  const {
    modalState: { selectedInfo },
  } = useState();

  console.log('BComponent');
  //context의useState()를 아예 호출안하면 B,BBComponent rerender되지않겠지만, list가 아닌 다른 value(modalState)를 사용하려는 의도가있어도
  //add를 하면 useState안의 list가 변경되므로 해당 context에 포함되어있는 modalState도 영향을받아
  //modalState만! 사용하려는 니즈가있어도 리렌더링이 생겨 B,BB 컴포넌트도 reredner되게 된다.
  const [value, setValue] = React.useState('23123');
  return (
    <div style={{ border: '2px solid blue', height: '500px' }}>
      <div style={{ border: '2px solid black' }}>
        BComponent
        {/* {list.map(value=>(<div>{value.title}</div>))} */}
        <BBComponent />
      </div>
    </div>
  );
};

export default BComponent;
