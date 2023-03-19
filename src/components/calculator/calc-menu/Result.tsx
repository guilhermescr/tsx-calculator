import styled from 'styled-components';

interface Props {
  result: string;
}

const ResultStyledDiv = styled.div`
  background-color: #c5d4d9;
  padding-right: 1rem;
`;

const ResultStyled = styled.p`
  color: #6d7073;
  font-family: 'Digital7';
  font-size: 6rem;
  text-align: end;
`;

export const getResult = (parameterTest: string): string => {
  return parameterTest;
};

export default function Result({ result }: Props) {
  return (
    <ResultStyledDiv>
      <ResultStyled>{result}</ResultStyled>
    </ResultStyledDiv>
  );
}
