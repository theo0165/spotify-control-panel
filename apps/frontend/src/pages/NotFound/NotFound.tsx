import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useAppSelector } from '../../hooks/useAppSelector';

const NotFound: FC = () => {
  const title = useAppSelector(state => state.application.name);
  return (
    <>
      <Helmet>
        <title>{`Not found | ${title}`}</title>
      </Helmet>
      Not Found
    </>
  );
};

export default NotFound;
