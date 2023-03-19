import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children?: ReactNode;
}

const TopBarStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.8rem;
`;

export default function TopBar({ children }: Props) {
  return <TopBarStyled>{children}</TopBarStyled>;
}
