import { FC } from 'react';
import useApplication from '../hooks/useApplication';
import useMe from '../hooks/useMe';
import usePlaylists from '../hooks/usePlaylists';

const Bootstrap: FC = () => {
  useApplication();
  useMe();
  usePlaylists();

  return null;
};

export default Bootstrap;
