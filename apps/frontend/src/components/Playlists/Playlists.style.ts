import styled, { css } from 'styled-components';
import { DeviceMenuProps } from './Playlists.types';

export const Wrapper = styled.div`
  overflow: scroll;
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

export const DeviceMenu = styled.div<DeviceMenuProps>`
  width: 200px;
  min-width: 200px;
  max-width: 200px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      > div {
        border: 3px solid ${({ theme }) => theme.colors.green};
        border-radius: ${({ theme }) => theme.borderRadius.normal};
      }
    `}
`;

export const DeviceMenuInner = styled.div`
  width: 200px;
  min-width: 200px;
  max-width: 200px;

  height: 200px;
  min-height: 200px;
  min-width: 200px;
`;
