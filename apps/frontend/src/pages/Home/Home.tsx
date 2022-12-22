import { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import useProtectedRoute from '../../hooks/useProtectedRoute';
import FrontPage from '../../modules/FrontPage';
import Player from '../../modules/Player';

const HomePage: FC = () => {
  useProtectedRoute();
  const currentModule = useAppSelector(state => state.application.currentModule);

  return (
    <>
      <FrontPage />
      <Player isActive={currentModule === 'player'} />
    </>
  );
};

export default HomePage;
