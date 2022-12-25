import styled, { css } from 'styled-components';
import TextStyles from '../../components/TextStyles';
import { WrapperProps } from './Player.types';

export const Wrapper = styled.div<WrapperProps>`
  background-color: ${({ theme }) => theme.colors.black};
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  transform: translateY(100vh);
  transition: transform ${({ theme }) => theme.transitions.fast};

  display: grid;
  grid-template-columns: 350px calc(100vw - 350px);
  grid-template-rows: calc(100vh - 75px) 75px;

  ${({ isActive }) =>
    isActive &&
    css`
      transform: translateY(0);
    `}
`;

export const Artwork = styled.div`
  justify-self: center;
  align-self: center;

  > img {
    width: 250px;
    height: 250px;
    object-fit: cover;
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContextName = styled(TextStyles)`
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: 16px;
`;

export const SongName = styled(TextStyles)`
  font-size: 32px;
  margin: 8px 0 12px 0;
`;

export const ArtistName = styled(TextStyles)`
  font-weight: ${({ theme }) => theme.fontWeights.light};
`;

export const BottomContent = styled.div`
  grid-area: 2 / 1 / 3 / 3;
`;
