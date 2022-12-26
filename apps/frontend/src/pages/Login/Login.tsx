import { urlBuilder } from '@scp/utils';
import { FC } from 'react';
import { Helmet } from 'react-helmet';
import LoginButton from '../../components/LoginButton';
import TextStyles from '../../components/TextStyles';
import { useAppSelector } from '../../hooks/useAppSelector';
import * as S from './Login.styles';

const LoginPage: FC = () => {
  const title = useAppSelector(state => state.application.name);

  return (
    <>
      <Helmet>
        <title>{`Login | ${title}`}</title>
      </Helmet>
      <S.Wrapper>
        <TextStyles as="h1" fontWeight="light">
          Controller for Spotify
        </TextStyles>
        <a href={urlBuilder('/auth/login')}>
          <LoginButton />
        </a>
      </S.Wrapper>
    </>
  );
};

export default LoginPage;
