import styled, { css } from 'styled-components';
import { WrapperProps } from './Playlist.types';

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  ${({ isSelected }) =>
    isSelected &&
    css`
      > img {
        border: 3px solid ${({ theme }) => theme.colors.green};
        border-radius: ${({ theme }) => theme.borderRadius.normal};
      }
    `}
`;

export const CoverImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  display: block;
`;

export const MetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;
`;
