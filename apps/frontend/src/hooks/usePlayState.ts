import { PlaybackState } from '@scp/types';
import { fetchWithCredentials, urlBuilder } from '@scp/utils';
import { useEffect } from 'react';
import { initialPlaybackState, setIsTrueState, setPlayState } from '../store/slices/playstateSlice';
import { useAppDispatch } from './useAppDispatch';

const usePlayState = (withUpdates: boolean) => {
  const dispatch = useAppDispatch();

  const updateState = async () => {
    const stateRequest = await fetchWithCredentials(urlBuilder('/music/state'));

    if (stateRequest.status === 204) {
      dispatch(setPlayState(initialPlaybackState));
      dispatch(setIsTrueState(true));
      return;
    }

    const newState: PlaybackState = await stateRequest.json();

    dispatch(setPlayState(newState));
    dispatch(setIsTrueState(true));
  };

  useEffect(() => {
    let timer: NodeJS.Timer;

    (async () => {
      if (withUpdates) {
        timer = setInterval(updateState, 15 * 1000);
      } else {
        await updateState();
      }
    })();

    return () => {
      withUpdates && clearInterval(timer);
    };
  }, []);
};

export default usePlayState;
