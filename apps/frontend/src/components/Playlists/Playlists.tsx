import { FC, useState } from 'react';
import usePlaylists from '../../hooks/usePlaylists';
import Playlist from '../Playlist/Playlist';
import * as S from './Playlists.style';

const Playlists: FC = () => {
  const [userPlaylists] = usePlaylists();
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <S.Wrapper>
      {userPlaylists.map((playlist, index) => (
        <Playlist
          key={`playlist-${playlist.id}`}
          data={playlist}
          isSelected={selectedIndex === index}
        />
      ))}
    </S.Wrapper>
  );
};

export default Playlists;
