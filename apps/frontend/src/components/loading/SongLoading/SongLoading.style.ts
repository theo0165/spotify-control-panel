import styled from 'styled-components';

export const Artwork = styled.div`
  justify-self: center;
  align-self: center;

  > img {
    width: 250px;
    height: 250px;
    object-fit: cover;
  }
`;

export const Meta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContextName = styled.div``;

export const SongName = styled.div`
  margin: 8px 0 12px 0;
`;

export const ArtistName = styled.div``;

export const Progress = styled.div``;
