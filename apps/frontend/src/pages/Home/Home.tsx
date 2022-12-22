import { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import useMe from '../../hooks/useMe';
import usePlaylists from '../../hooks/usePlaylists';
import useProtectedRoute from '../../hooks/useProtectedRoute';
import FrontPage from '../../modules/FrontPage';
import Player from '../../modules/Player';

const HomePage: FC = () => {
  const currentModule = useAppSelector(state => state.application.currentModule);
  const [me] = useMe();
  const [playlists] = usePlaylists();
  useProtectedRoute();

  return (
    <>
      <FrontPage />
      <Player isActive={currentModule === 'player'} />
    </>
  );
};

export default HomePage;
