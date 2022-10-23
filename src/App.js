import logo from './logo.svg';
import './App.css';
import AComponent from './components/context/AComponent';
import BComponent from './components/context/BComponent';
import { GlobalContextProvider } from './context/GlobalContextProvider';

import { RecoilRoot } from 'recoil';
import DComponent from './components/recoil/DComponent';
import EComponent from './components/recoil/EComponent';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <GlobalContextProvider>
          <AComponent />
          <BComponent />
        </GlobalContextProvider>
      </div>
      <div style={{ width: '50%' }}>
        <RecoilRoot>
          <DComponent />
          <EComponent />
        </RecoilRoot>
      </div>
    </div>
  );
}

export default App;
