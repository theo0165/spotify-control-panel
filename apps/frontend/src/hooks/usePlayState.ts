import { PlaybackState } from '@scp/types';
import { fetchWithCredentials, urlBuilder } from '@scp/utils';
import { useEffect } from 'react';
import {
  initialPlaybackState,
  setIsTrueState,
  setPlayState,
  stateShouldUpdate,
} from '../store/slices/playstateSlice';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

const usePlayState = (withUpdates: boolean) => {
  const dispatch = useAppDispatch();
  const shouldUpdate = useAppSelector(state => state.playstate.shouldUpdate);

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
        await updateState();
        timer = setInterval(updateState, 15 * 1000);
      } else {
        await updateState();
      }
    })();

    return () => {
      withUpdates && clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (shouldUpdate) {
      updateState();
      dispatch(stateShouldUpdate(false));
    }
  }, [shouldUpdate]);
};

export default usePlayState;
