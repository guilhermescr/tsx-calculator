import styled from 'styled-components';

interface Props {
  left?: string;
}

const BrownBarStyles = styled.div<Props>`
  background-color: #5d2b02;
  height: 100%;
  left: ${({ left }) => left};
  position: absolute;
  width: 0.5rem;
`;

export default function BrownBar({ left }: Props) {
  return <BrownBarStyles left={left}></BrownBarStyles>;
}
