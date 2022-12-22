import styled, { css } from 'styled-components';
import { WrapperProps } from './Player.types';

export const Wrapper = styled.div<WrapperProps>`
  background-color: red;
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  transform: translateY(100vh);
  transition: transform ${({ theme }) => theme.transitions.fast};

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateY(0);
    `}
`;
