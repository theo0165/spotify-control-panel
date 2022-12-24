import { FC } from 'react';
import useApplication from '../hooks/useApplication';
import useDevices from '../hooks/useDevices';
import useMe from '../hooks/useMe';
import usePlaylists from '../hooks/usePlaylists';

const Bootstrap: FC = () => {
  useApplication();
  useMe();
  usePlaylists();
  useDevices();

  return null;
};

export default Bootstrap;
