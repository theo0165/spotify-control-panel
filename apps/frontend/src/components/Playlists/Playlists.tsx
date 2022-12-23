import { FC, useEffect, useRef, useState } from 'react';
import usePlaylists from '../../hooks/usePlaylists';
import SpeakerIcon from '../icons/SpeakerIcon';
import Playlist from '../Playlist/Playlist';
import TextStyles from '../TextStyles';
import * as S from './Playlists.style';

const Playlists: FC = () => {
  const [userPlaylists] = usePlaylists();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const keyDownHandler = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'd':
        setSelectedIndex(val => val + 1);
        break;
      case 'a':
        setSelectedIndex(val => val - 1);
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  useEffect(() => {
    if (!wrapperRef.current) return;

    wrapperRef.current.scrollTo({
      top: 0,
      left: selectedIndex * 232,
      behavior: 'smooth',
    });
  }, [selectedIndex]);

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
