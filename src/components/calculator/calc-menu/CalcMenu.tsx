import styled from 'styled-components';
import Result from './Result';

interface Props {
  result: string;
}

const CalcMenuStyled = styled.div`
  background-color: #467f89;
  border: 0.4rem solid #5d2b02;
  margin-bottom: 3rem;
  padding: 1rem;
`;

export default function CalcMenu({ result }: Props) {
  return (
    <CalcMenuStyled>
      <Result result={result} />
    </CalcMenuStyled>
  );
}
