import { FC, useEffect, useState } from 'react';
import Controls from '../../components/Controls';
import TextStyles from '../../components/TextStyles';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { switchModule } from '../../store/slices/applicationSlice';
import * as S from './Player.style';
import { PlayerProps } from './Player.types';

const Player: FC<PlayerProps> = ({ isActive }) => {
  const dispatch = useAppDispatch();
  const playState = useAppSelector(state => state.playstate);
  const switchMod = () => dispatch(switchModule('homepage'));
  const [duration, setDuration] = useState(playState.duration);
  const [progress, setProgress] = useState(playState.progress);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(true);
  const [isRepeat, setIsRepeat] = useState(false);

  useEffect(() => {
    setDuration(playState.duration);
    setProgress(playState.progress);

    // setIsPlaying(playState.isPlaying);
    // setIsShuffle(playState.shuffle);
    // setIsRepeat(playState.repeat !== "off");

    const timer = setInterval(() => {
      setProgress(prog => prog + 1000);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [playState]);

  return (
    <S.Wrapper isActive={isActive}>
      <S.Artwork>
        <img
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
        {playState.artists.length > 0 && <S.ArtistName>{playState.artists[0].name}</S.ArtistName>}
        <TextStyles>{`${progress} ${duration}`}</TextStyles>
      </S.Meta>
      <S.BottomContent>
        <Controls
          progress={progress}
          duration={duration}
          isPlaying={isPlaying}
          isShuffle={isShuffle}
          isRepeat={isRepeat}
        />
      </S.BottomContent>
    </S.Wrapper>
  );
};

export default Player;
