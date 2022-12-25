import { FC } from 'react';
import ContentLoader from 'react-content-loader';
import colors from '../../../theme/colors';
import * as S from './SongLoading.style';

const SongLoading: FC = () => {
  const loaderColors = {
    backgroundColor: '#262222',
    foregroundColor: colors.black,
  };

  return (
    <>
      <S.Artwork>
        <ContentLoader speed={2} width={250} height={250} viewBox="0 0 250 250" {...loaderColors}>
          <rect x="0" y="0" rx="0" ry="0" width="250" height="250" />
        </ContentLoader>
      </S.Artwork>
      <S.Meta>
        <S.ContextName>
          <ContentLoader speed={2} width={150} height={18} viewBox="0 0 150 18" {...loaderColors}>
            <rect x="0" y="0" rx="0" ry="0" width="150" height="18" />
          </ContentLoader>
        </S.ContextName>
        <S.SongName>
          <ContentLoader speed={2} width={300} height={38} viewBox="0 0 300 38" {...loaderColors}>
            <rect x="0" y="0" rx="0" ry="0" width="300" height="38" />
          </ContentLoader>
        </S.SongName>
        <S.ArtistName>
          <ContentLoader speed={2} width={200} height={18} viewBox="0 0 200 18" {...loaderColors}>
            <rect x="0" y="0" rx="0" ry="0" width="200" height="18" />
          </ContentLoader>
        </S.ArtistName>
        <S.Progress>
          <ContentLoader speed={2} width={150} height={18} viewBox="0 0 150 18" {...loaderColors}>
            <rect x="0" y="0" rx="0" ry="0" width="150" height="18" />
          </ContentLoader>
        </S.Progress>
      </S.Meta>
    </>
  );
};

export default SongLoading;
