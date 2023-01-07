import { QrData } from '@scp/types';
import { fetchWithCredentials, urlBuilder } from '@scp/utils';
import QRCode from 'qrcode';
import { FC, useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Navigate } from 'react-router-dom';
import TextStyles from '../../components/TextStyles';
import { SocketContext } from '../../context/socket';
import { useAppSelector } from '../../hooks/useAppSelector';
import * as S from './Login.styles';

const LoginPage: FC = () => {
  const title = useAppSelector(state => state.application.name);
  const [qrData, setQrData] = useState<string | null>(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const socket = useContext(SocketContext);
  const socketId = socket.io.engine.id;

  useEffect(() => {
    if (!socketId) return;
    (async () => {
      const qrRequest = await fetchWithCredentials(
        `${urlBuilder('/auth/qr/get')}?socketid=${socketId}`,
      );

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

  useEffect(() => {
    (async () => {
      socket.on('qr_callback', async ({ user, token }) => {
        const setUserRequest = await fetchWithCredentials(urlBuilder('/auth/qr/set'), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user,
            token,
          }),
        });

        if (setUserRequest.ok) {
          setShouldRedirect(true);
        }
      });
    })();
  }, [socket]);

  if (shouldRedirect) {
    return <Navigate to="/" />;
  }

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
