import { translateTime } from '@scp/utils';
import { FC, useEffect, useRef, useState } from 'react';
import Controls from '../../components/Controls';
import SongLoading from '../../components/loading/SongLoading';
import TextStyles from '../../components/TextStyles';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import useAverageColor from '../../hooks/useAverageColor';
import { stateShouldUpdate } from '../../store/slices/playstateSlice';
import * as S from './Player.style';
import { PlayerProps } from './Player.types';

const Player: FC<PlayerProps> = ({ isActive }) => {
  const dispatch = useAppDispatch();
  const playState = useAppSelector(state => state.playstate);
  const [duration, setDuration] = useState(playState.duration);
  const [progress, setProgress] = useState(playState.progress);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(true);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [color, isDark] = useAverageColor(imageRef?.current, playState);

  useEffect(() => {
    setDuration(playState.duration);
    setProgress(playState.progress);

    setIsPlaying(playState.isPlaying);
    setIsShuffle(playState.shuffle);
    setIsRepeat(playState.repeat !== 'off');

    const timer = setInterval(() => {
      if (isPlaying) {
        setProgress(prog => prog + 1000);
      }

      if (progress >= duration) {
        dispatch(stateShouldUpdate(true));
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      setProgress(0);
    };
  }, [playState, isPlaying, isShuffle, duration, isRepeat]);

  return (
    <S.Wrapper isActive={isActive} background={color} isDark={isDark}>
      {!playState.song.name || !playState.song.id ? (
        <SongLoading />
      ) : (
        <>
          <S.Artwork>
            <img
              ref={imageRef}
              src={playState.song.image ?? 'https://via.placeholder.com/350'}
              alt={
                playState.song.name
                  ? `Artwork for the song ${playState.song.name}`
                  : 'Placeholder album artwork'
              }
            />
          </S.Artwork>
          <S.Meta>
            {typeof playState.context === 'object' && playState.context?.name && (
              <S.ContextName>{playState.context.name}</S.ContextName>
            )}
            {playState.song.name && <S.SongName>{playState.song.name}</S.SongName>}
            {playState.artists.length > 0 && (
              <S.ArtistName>{playState.artists[0].name}</S.ArtistName>
            )}
            <TextStyles fontWeight="light" fontSize="small">
              {`${translateTime(progress)} - ${translateTime(duration)}`}
            </TextStyles>
          </S.Meta>
        </>
      )}
      <S.BottomContent>
        <Controls
          progress={progress}
          duration={duration}
          isPlaying={isPlaying}
          isShuffle={isShuffle}
          isRepeat={isRepeat}
          background={color}
        />
      </S.BottomContent>
    </S.Wrapper>
  );
};

export default Player;
