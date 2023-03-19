import styled from 'styled-components';

interface Props {
  setResult: (result: string) => void;
}

const CEButton = styled.button`
  background-color: #fadda1;
  border: 0.4rem solid #5d2b02;
  color: #323232;
  cursor: pointer;
  font: normal normal 400 3rem 'Anybody', cursive;
  padding-inline: 2.2rem;
  padding-top: 0.7rem;
  padding-bottom: 0.2rem;
  &:hover {
    background-color: #f8e5aa;
  }
  &:active {
    background-color: #eed5a4;
  }
`;

export default function ClearEntry({ setResult }: Props) {
  return <CEButton onClick={() => setResult('0')}>CE</CEButton>;
}
