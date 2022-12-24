import styled, { css } from 'styled-components';
import { DeviceWrapperProps } from './Device.types';

export const Wrapper = styled.div<DeviceWrapperProps>`
  display: grid;
  column-gap: 8px;
  grid-template-columns: 32px 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'icon name'
    'icon isActive';
  padding: 4px;

  ${({ isActive }) =>
    isActive &&
    css`
      border: 3px solid ${({ theme }) => theme.colors.green};
      border-radius: ${({ theme }) => theme.borderRadius.normal};
    `}
`;

export const DeviceIconWrapper = styled.div`
  grid-area: icon;
  color: red;
  align-self: center;
`;

export const Name = styled.div`
  grid-area: name;
  text-align: left;
  display: inline-block;
`;
