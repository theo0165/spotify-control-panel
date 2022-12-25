import { FC } from 'react';
import PauseIcon from '../icons/PauseIcon';
import PlayIcon from '../icons/PlayIcon';
import RepeatIcon from '../icons/RepeatIcon';
import ShuffleIcon from '../icons/ShuffleIcon';
import * as S from './Controls.styles';
import { ControlsProps } from './Controls.types';

const Controls: FC<ControlsProps> = ({ duration, progress, isPlaying, isShuffle, isRepeat }) => (
  <S.Wrapper>
    <S.Timeline>
      <S.TimelineInner width={progress / duration} />
    </S.Timeline>
    <S.Controls>
      <S.Shuffle>
        <ShuffleIcon width="48px" height="48px" color={isShuffle ? 'green' : 'white'} />
      </S.Shuffle>
      <S.ContentControls>
        <S.Backward width="32px" height="32px" />
        <S.PlayPause>
          {isPlaying ? (
            <PauseIcon width="36px" height="36px" />
          ) : (
            <PlayIcon width="36px" height="36px" />
          )}
        </S.PlayPause>
        <S.Forward width="32px" height="32px" />
      </S.ContentControls>
      <S.Repeat>
        <RepeatIcon width="48px" height="48px" color={isRepeat ? 'green' : 'white'} />
      </S.Repeat>
    </S.Controls>
  </S.Wrapper>
);

export default Controls;
