import { FC } from 'react';
import SpotifyIcon from '../icons/SpotifyIcon';
import TextStyles from '../TextStyles';
import * as S from './LoginButton.styles';

const LoginButton: FC = () => (
  <S.Wrapper>
    <SpotifyIcon color="white" />
    <TextStyles as="span">Connect with Spotify</TextStyles>
  </S.Wrapper>
);

export default LoginButton;
