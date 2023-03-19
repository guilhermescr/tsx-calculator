import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children?: ReactNode;
}

const CalculatorSection = styled.section`
  background-color: #b2ffff;
  border: 1.2rem solid #78cfe0;
  max-width: 50rem;
  padding: 3rem;
  width: 100%;
`;

export default function Calculator({ children }: Props) {
  return <CalculatorSection>{children}</CalculatorSection>;
}
