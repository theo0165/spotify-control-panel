import { FC } from 'react';
import TextStyles from '../../components/TextStyles';
import useMe from '../../hooks/useMe';
import useProtectedRoute from '../../hooks/useProtectedRoute';

const HomePage: FC = () => {
  const [me] = useMe();
  useProtectedRoute();

  return <TextStyles as="h1">{`Hello ${me?.name}`}</TextStyles>;
};

export default HomePage;
