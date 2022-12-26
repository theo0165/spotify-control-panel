import { FC } from 'react';
import useApplication from '../hooks/useApplication';
import useDevices from '../hooks/useDevices';
import useEvents from '../hooks/useEvents';
import useMe from '../hooks/useMe';
import usePlaylists from '../hooks/usePlaylists';
import usePlayState from '../hooks/usePlayState';

const Bootstrap: FC = () => {
  useApplication();
  useMe();
  usePlaylists();
  useDevices();
  usePlayState(true);
  useEvents();

  return null;
};

export default Bootstrap;
