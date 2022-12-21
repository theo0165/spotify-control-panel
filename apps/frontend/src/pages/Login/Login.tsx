import { urlBuilder } from '@scp/utils';
import { FC } from 'react';
import LoginButton from '../../components/LoginButton';
import TextStyles from '../../components/TextStyles';
import * as S from './Login.styles';

const LoginPage: FC = () => (
  <S.Wrapper>
    <TextStyles as="h1" fontWeight="light">
      Controller for Spotify
    </TextStyles>
    <a href={urlBuilder('/auth/login')}>
      <LoginButton />
    </a>
  </S.Wrapper>
);

export default LoginPage;
