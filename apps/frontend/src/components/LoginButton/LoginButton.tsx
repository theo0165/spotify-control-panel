import { FC } from 'react';
import SpotifyIcon from '../icons/SpotifyIcon';
import * as S from './LoginButton.styles';

const LoginButton: FC = () => (
  <S.Wrapper>
    <SpotifyIcon color="white" />
    Connect with Spotify
  </S.Wrapper>
);

export default LoginButton;
