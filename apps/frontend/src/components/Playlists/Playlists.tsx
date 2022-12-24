import { startPlaying } from '@scp/utils';
import { FC, useEffect, useRef, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import usePlaylists from '../../hooks/usePlaylists';
import { switchModule } from '../../store/slices/applicationSlice';
import SpeakerIcon from '../icons/SpeakerIcon';
import Playlist from '../Playlist/Playlist';
import TextStyles from '../TextStyles';
import * as S from './Playlists.style';

const Playlists: FC = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(state => state.application.currentModule);
  const [userPlaylists] = usePlaylists();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  // TODO: selectedIndex not updating
  const startPlaylist = async () => {
    if (selectedIndex <= 0) return;

    const shouldPlay = userPlaylists[selectedIndex];
    // TODO: Change to currently selected device
    const couldStartPlaying = await startPlaying(
      `spotify:playlist:${shouldPlay.id}`,
      '3dd16d1b59e7b463f199dbd03d8a05c058bea2fc',
    );

    if (couldStartPlaying) {
      dispatch(switchModule('player'));
    }
  };

  const keyDownHandler = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'd':
        setSelectedIndex(val => val + 1);
        break;
      case 'a':
        setSelectedIndex(val => val - 1);
        break;
      case 'Enter':
        startPlaylist();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [selectedIndex]);

  useEffect(() => {
    if (!wrapperRef.current) return;

    wrapperRef.current.scrollTo({
      top: 0,
      left: selectedIndex * 232,
      behavior: 'smooth',
    });
  }, [selectedIndex]);

  useEffect(() => {
    setTimeout(() => setSelectedIndex(0), 200);
  }, [currentPage]);

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.DeviceMenu>
        <S.DeviceMenuInner isSelected={selectedIndex === 0}>
          {/* TODO: Display current device */}
          <SpeakerIcon color="white" width="96px" height="96px" />
          <TextStyles fontWeight="bold" fontSize="large">
            Devices
          </TextStyles>
        </S.DeviceMenuInner>
      </S.DeviceMenu>
      {userPlaylists.map((playlist, index) => (
        <Playlist
          key={`playlist-${playlist.id}`}
          data={playlist}
          isSelected={selectedIndex === index + 1}
        />
      ))}
    </S.Wrapper>
  );
};

export default Playlists;
