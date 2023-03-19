import styled from 'styled-components';
import CalcButton from './CalcButton';

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

export default function CalcButtons() {
  return (
    <CalcButtonsStyled>
      <CalcButton value="7" />
      <CalcButton value="8" />
      <CalcButton value="9" />
      <CalcButton value="/" />

      <CalcButton value="4" />
      <CalcButton value="5" />
      <CalcButton value="6" />
      <CalcButton value="x" />

      <CalcButton value="1" />
      <CalcButton value="2" />
      <CalcButton value="3" />
      <CalcButton value="-" />

      <CalcButton value="0" />
      <CalcButton value="," />
      <CalcButton value="=" />
      <CalcButton value="+" />
    </CalcButtonsStyled>
  );
}
