import { FC } from 'react';
import LoginButton from '../../components/LoginButton';
import TextStyles from '../../components/TextStyles';
import * as S from './Login.styles';

const LoginPage: FC = () => (
  <S.Wrapper>
    <TextStyles as="h1" fontWeight="light">
      Controller for Spotify
    </TextStyles>
    <LoginButton />
  </S.Wrapper>
);

export default LoginPage;
