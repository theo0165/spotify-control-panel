import styled, { css } from 'styled-components';
import { DeviceMenuProps } from './Playlists.types';

export const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  column-gap: 32px;
  margin-left: 24px;

  & > div:last-child {
    margin-right: 24px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DeviceMenu = styled.div`
  width: 200px;
  min-width: 200px;
  max-width: 200px;
`;

export const DeviceMenuInner = styled.div<DeviceMenuProps>`
  width: 200px;
  min-width: 200px;
  max-width: 200px;

  height: 200px;
  min-height: 200px;
  min-width: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border: 3px solid ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.normal};

  ${({ isSelected }) =>
    isSelected &&
    css`
      border-color: ${({ theme }) => theme.colors.green};
    `}
`;
