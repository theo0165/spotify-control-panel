import { FC } from 'react';
import Playlists from '../../components/Playlists';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import usePlaylists from '../../hooks/usePlaylists';
import { switchModule } from '../../store/slices/applicationSlice';
import * as S from './FrontPage.style';

const FrontPage: FC = () => {
  const dispatch = useAppDispatch();
  const [playlists] = usePlaylists();
  const switchPage = () => {
    dispatch(switchModule('player'));
  };

  return (
    <S.Wrapper>
      <Playlists />
    </S.Wrapper>
  );
};

export default FrontPage;
