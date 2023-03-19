import { useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from './global';
import './fonts/fonts.css';

import Calculator from './components/calculator/Calculator';
import TopBar from './components/calculator/top-bar/TopBar';
import ClearEntry from './components/calculator/top-bar/ClearEntry';
import AirExit from './components/calculator/top-bar/air-exit/AirExit';

import CalcMenu from './components/calculator/calc-menu/CalcMenu';
import CalcButtons from './components/calculator/calc-buttons/CalcButtons';

import { MyGlobalContext } from './MyGlobalContext';
import { getResult } from './components/calculator/calc-menu/Result';

const MainElement = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

function App() {
  const [result, setResult] = useState<string>(getResult('0'));

  return (
    <MyGlobalContext.Provider value={{ result: result, setResult: setResult }}>
      <MainElement>
        <GlobalStyles />

        <section className="calculator-help-center"></section>

        <Calculator>
          <TopBar>
            <ClearEntry setResult={setResult} />
            <AirExit />
          </TopBar>

          <CalcMenu result={result} />

          <CalcButtons result={result} setResult={setResult} />
        </Calculator>

        <section className="credits"></section>
      </MainElement>
    </MyGlobalContext.Provider>
  );
}

export default App;
