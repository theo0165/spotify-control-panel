import { QrData } from '@scp/types';
import { fetchWithCredentials, urlBuilder } from '@scp/utils';
import QRCode from 'qrcode';
import { FC, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import TextStyles from '../../components/TextStyles';
import { useAppSelector } from '../../hooks/useAppSelector';
import * as S from './Login.styles';

const LoginPage: FC = () => {
  const title = useAppSelector(state => state.application.name);
  const [qrData, setQrData] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const qrRequest = await fetchWithCredentials(urlBuilder('/auth/qr/get'));

      if (qrRequest.ok) {
        const qrResponse: QrData = await qrRequest.json();

        setQrData(
          await QRCode.toDataURL(qrResponse.url, {
            width: 180,
            margin: 1,
          }),
        );
      }
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>{`Login | ${title}`}</title>
      </Helmet>
      <S.Wrapper>
        <TextStyles as="h1" fontWeight="light">
          Controller for Spotify
        </TextStyles>
        {qrData && <img src={qrData} width={180} height={180} />}
      </S.Wrapper>
    </>
  );
};

export default LoginPage;
