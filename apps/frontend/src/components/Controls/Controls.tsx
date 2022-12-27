import { fetchWithCredentials, urlBuilder } from '@scp/utils';
import { FC, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import useEventConsumer from '../../hooks/useEventConsumer';
import { setEvent } from '../../store/slices/eventSlice';
import { stateShouldUpdate } from '../../store/slices/playstateSlice';
import BackwardIcon from '../icons/BackwardIcon';
import ForwardIcon from '../icons/ForwardIcon';
import PauseIcon from '../icons/PauseIcon';
import PlayIcon from '../icons/PlayIcon';
import RepeatIcon from '../icons/RepeatIcon';
import ShuffleIcon from '../icons/ShuffleIcon';
import * as S from './Controls.styles';
import { ControlsProps } from './Controls.types';

const Controls: FC<ControlsProps> = ({ duration, progress, isPlaying, isShuffle, isRepeat }) => {
  const dispatch = useAppDispatch();
  const [selectedIndex, setSelectedIndex] = useState(2);
  const currentPage = useAppSelector(state => state.application.currentModule);
  const [events, eventsActive] = useEventConsumer(currentPage === 'player');
  const devices = useAppSelector(state => state.devices);

  const handlePlayPause = async () => {
    await fetchWithCredentials(urlBuilder(`/music/${isPlaying ? 'pause' : 'play'}`), {
      method: 'POST',
    });

    dispatch(stateShouldUpdate(true));
  };

  const handleNext = async () => {
    await fetchWithCredentials(urlBuilder('/music/next'), {
      method: 'POST',
    });

    dispatch(stateShouldUpdate(true));
  };

  const handlePrev = async () => {
    await fetchWithCredentials(urlBuilder('/music/previous'), {
      method: 'POST',
    });

    dispatch(stateShouldUpdate(true));
  };

  const handleToggleShuffle = async () => {
    await fetchWithCredentials(urlBuilder('/music/shuffle'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        state: !isShuffle,
      }),
    });

    dispatch(stateShouldUpdate(true));
  };

  const handleToggleRepeat = async () => {
    await fetchWithCredentials(urlBuilder('/music/repeat'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        state: !isRepeat,
      }),
    });

    dispatch(stateShouldUpdate(true));
  };

  useEffect(() => {
    if (!eventsActive) return;

    if (events.click) {
      switch (selectedIndex) {
        case 0:
          handleToggleShuffle();
          break;
        case 1:
          handlePrev();
          break;
        case 2:
          handlePlayPause();
          break;
        case 3:
          handleNext();
          break;
        case 4:
          handleToggleRepeat();
          break;
      }

      dispatch(setEvent({ name: 'click', value: false }));
    }

    if (events.right && selectedIndex < 4) {
      setSelectedIndex(val => val + 1);
      dispatch(setEvent({ name: 'right', value: false }));
    }

    if (events.left && selectedIndex > 0) {
      setSelectedIndex(val => val - 1);
      dispatch(setEvent({ name: 'left', value: false }));
    }
  }, [selectedIndex, currentPage, events, eventsActive]);

  useEffect(() => {
    setSelectedIndex(2);
  }, [currentPage]);

  return (
    <S.Wrapper>
      <S.Timeline>
        <S.TimelineInner width={progress / duration} />
      </S.Timeline>
      <S.Controls>
        <S.Shuffle isActive={isShuffle} isSelected={selectedIndex === 0}>
          <ShuffleIcon width="32px" height="32px" color={isShuffle ? 'green' : 'inherit'} />
        </S.Shuffle>
        <S.ContentControls>
          <S.Backward isSelected={selectedIndex === 1}>
            <BackwardIcon width="26px" height="26px" />
          </S.Backward>
          <S.PlayPause isSelected={selectedIndex === 2} isPlay={isPlaying}>
            {isPlaying ? (
              <PauseIcon width="26px" height="26px" />
            ) : (
              <PlayIcon width="26px" height="26px" />
            )}
          </S.PlayPause>
          <S.Forward isSelected={selectedIndex === 3}>
            <ForwardIcon width="26px" height="26px" />
          </S.Forward>
        </S.ContentControls>
        <S.Repeat isActive={isRepeat} isSelected={selectedIndex === 4}>
          <RepeatIcon width="32px" height="32px" color={isRepeat ? 'green' : 'inherit'} />
        </S.Repeat>
      </S.Controls>
    </S.Wrapper>
  );
};

export default Controls;
