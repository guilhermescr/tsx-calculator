import styled from 'styled-components';
import BrownBar from './BrownBar';

const AirExitStyles = styled.div`
  background-color: #837b70;
  border: 0.8rem solid #5d2b02;
  height: 4.9rem;
  position: relative;
  width: 15rem;
`;

export default function AirExit() {
  return (
    <AirExitStyles>
      <BrownBar left="10%" />
      <BrownBar left="25%" />
      <BrownBar left="40%" />
      <BrownBar left="56%" />
      <BrownBar left="71%" />
      <BrownBar left="86.5%" />
    </AirExitStyles>
  );
}
