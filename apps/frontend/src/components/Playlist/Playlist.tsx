import { FC } from 'react';
import TextStyles from '../TextStyles';
import * as S from './Playlist.styles';
import { PlaylistProps } from './Playlist.types';

const Playlist: FC<PlaylistProps> = ({ data, isSelected }) => {
  const { name, image, owner } = data;

  return (
    <S.Wrapper isSelected={isSelected}>
      <S.CoverImage
        src={image ?? 'https://via.placeholder.com/300'}
        alt={`Cover image for ${name}`}
      />
      <S.MetaWrapper>
        <TextStyles fontWeight="bold" fontSize="normal">
          {name}
        </TextStyles>
        {/* TODO: Show is playing instead of name is playlist is currently playing */}
        {owner && (
          <TextStyles fontWeight="light" fontSize="normal">
            {owner}
          </TextStyles>
        )}
      </S.MetaWrapper>
    </S.Wrapper>
  );
};

export default Playlist;
