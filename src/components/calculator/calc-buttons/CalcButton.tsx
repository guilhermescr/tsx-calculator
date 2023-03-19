import styled from 'styled-components';

interface Props {
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

export default function CalcButton({ value }: Props) {
  function handleClick(e: any) {
    // e.target.innerHTML
  }

  return <CalcButtonStyled onClick={handleClick}>{value}</CalcButtonStyled>;
}
