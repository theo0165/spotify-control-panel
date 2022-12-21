import { Playlist } from '@scp/types';
import { fetchWithCredentials, urlBuilder } from '@scp/utils';
import { useEffect, useState } from 'react';
import { setPlaylists } from '../store/slices/userSlice';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

const usePlaylists = (): [Playlist[], boolean] => {
  const dispatch = useAppDispatch();
  const { playlists } = useAppSelector(state => state.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (!playlists) {
      setIsLoading(false);
      return;
    }

    (async () => {
      const playlistRequest = await fetchWithCredentials(urlBuilder('/user/playlists'));

      if (!playlistRequest.ok) {
        setIsLoading(false);
        return;
      }

      const playlistData = await playlistRequest.json();

      if (!playlistData || playlistData.error) {
        setIsLoading(false);
        return;
      }

      dispatch(setPlaylists(playlistData));
      setIsLoading(false);
    })();
  }, []);

  return [playlists, isLoading];
};

export default usePlaylists;
