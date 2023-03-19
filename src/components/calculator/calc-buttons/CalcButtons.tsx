import styled from 'styled-components';
import CalcButton from './CalcButton';

interface Props {
  result: string;
  setResult: (result: string) => void;
}

const CalcButtonsStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 1.8rem;
  grid-row-gap: 1.8rem;

  @media (max-width: 510px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }
`;

export default function CalcButtons({ result, setResult }: Props) {
  return (
    <CalcButtonsStyled>
      <CalcButton result={result} setResult={setResult} value="7" />
      <CalcButton result={result} setResult={setResult} value="8" />
      <CalcButton result={result} setResult={setResult} value="9" />
      <CalcButton result={result} setResult={setResult} value="/" />

      <CalcButton result={result} setResult={setResult} value="4" />
      <CalcButton result={result} setResult={setResult} value="5" />
      <CalcButton result={result} setResult={setResult} value="6" />
      <CalcButton result={result} setResult={setResult} value="x" />

      <CalcButton result={result} setResult={setResult} value="1" />
      <CalcButton result={result} setResult={setResult} value="2" />
      <CalcButton result={result} setResult={setResult} value="3" />
      <CalcButton result={result} setResult={setResult} value="-" />

      <CalcButton result={result} setResult={setResult} value="0" />
      <CalcButton result={result} setResult={setResult} value="," />
      <CalcButton result={result} setResult={setResult} value="=" />
      <CalcButton result={result} setResult={setResult} value="+" />
    </CalcButtonsStyled>
  );
}
