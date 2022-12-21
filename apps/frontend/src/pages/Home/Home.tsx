import { FC } from 'react';
import TextStyles from '../../components/TextStyles';
import useMe from '../../hooks/useMe';
import usePlaylists from '../../hooks/usePlaylists';
import useProtectedRoute from '../../hooks/useProtectedRoute';

const HomePage: FC = () => {
  const [me] = useMe();
  const [playlists] = usePlaylists();
  useProtectedRoute();

  return (
    <>
      <TextStyles as="h1">{`Hello ${me?.name}`}</TextStyles>
      {playlists.map(playlist => (
        <div>
          <img
            src={playlist.image || 'https://via.placeholder.com/300'}
            width="300px"
            height="300px"
          />
          <p>{playlist.name}</p>
        </div>
      ))}
    </>
  );
};

export default HomePage;
