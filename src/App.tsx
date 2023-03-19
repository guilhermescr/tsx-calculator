import ClearEntry from './components/calculator/top-bar/ClearEntry';
import Calculator from './components/calculator/Calculator';
import GlobalStyles from './global';
import styled from 'styled-components';
import AirExit from './components/calculator/top-bar/air-exit/AirExit';
import TopBar from './components/calculator/top-bar/TopBar';
import CalcMenu from './components/calculator/calc-menu/CalcMenu';

import './fonts/fonts.css';
import CalcButtons from './components/calculator/calc-buttons/CalcButtons';

const MainElement = styled.main`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

function App() {
  return (
    <MainElement>
      <GlobalStyles />

      <section className="calculator-help-center"></section>

      <Calculator>
        <TopBar>
          <ClearEntry />
          <AirExit />
        </TopBar>

        <CalcMenu />

        <CalcButtons />
      </Calculator>

      <section className="credits"></section>
    </MainElement>
  );
}

export default App;
