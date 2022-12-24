import styled, { css } from 'styled-components';
import { WrapperProps } from './DeviceSelector.types';

export const Wrapper = styled.div<WrapperProps>`
  background-color: blue;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  transform: translateY(-100vh);
  transition: transform ${({ theme }) => theme.transitions.fast};
  text-align: center;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateY(0);
    `}
`;

export const Devices = styled.div``;
