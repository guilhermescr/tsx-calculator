import styled from 'styled-components';

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

export default function Result() {
  return (
    <ResultStyledDiv>
      <ResultStyled>00</ResultStyled>
    </ResultStyledDiv>
  );
}
