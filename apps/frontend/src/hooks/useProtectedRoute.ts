import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useMe from './useMe';

const useProtectedRoute = () => {
  const navigate = useNavigate();
  const [user, isUserLoading] = useMe();

  useEffect(() => {
    if (!isUserLoading && !user) navigate('/login');
  }, [isUserLoading, user]);
};

export default useProtectedRoute;
