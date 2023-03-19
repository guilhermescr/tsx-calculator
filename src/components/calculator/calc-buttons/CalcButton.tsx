import styled from 'styled-components';
import { useGlobalContext } from '../../../MyGlobalContext';

interface Props {
  result: string;
  setResult: (result: string) => void;
  value: string;
}

const CalcButtonStyled = styled.button`
  background-color: #fadda1;
  border: 0.4rem solid #5d2b02;
  color: #323232;
  cursor: pointer;
  font: normal normal 400 4rem 'Anybody', cursive;
  padding: 1rem 2.2rem;
  vertical-align: middle;

  &:hover {
    background-color: #f8e5aa;
  }
  &:active {
    background-color: #eed5a4;
  }
`;

export default function CalcButton({ result, setResult, value }: Props) {
  const { result: copy } = useGlobalContext();

  function handleClick(e: any) {
    let newResult = String(Number(result) + Number(value));
    // e.target.innerHTML
    console.log(e, `Copy: ${copy}`);
    console.clear();

    setResult(newResult);

    if (newResult === 'NaN') {
      setResult('0');
    }
  }

  return <CalcButtonStyled onClick={handleClick}>{value}</CalcButtonStyled>;
}
