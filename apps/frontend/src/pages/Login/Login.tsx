import { FC } from 'react';
import LoginButton from '../../components/LoginButton';
import * as S from './Login.styles';

const LoginPage: FC = () => (
  <S.Wrapper>
    <LoginButton />
  </S.Wrapper>
);

export default LoginPage;
