import { FC } from 'react';
import useMe from '../hooks/useMe';
import usePlaylists from '../hooks/usePlaylists';

const Bootstrap: FC = () => {
  useMe();
  usePlaylists();

  return null;
};

export default Bootstrap;
