import { User } from '@scp/types';
import { fetchWithCredentials, urlBuilder } from '@scp/utils';
import { useEffect, useState } from 'react';
import { setUser } from '../store/slices/userSlice';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

const useMe = (): [User | null, boolean] => {
  const dispatch = useAppDispatch();
  const { user, isLoggedIn } = useAppSelector(state => state.user);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (!!user || isLoggedIn) {
      setIsLoading(false);
      return;
    }

    (async () => {
      const userRequest = await fetchWithCredentials(urlBuilder('/user/me'));

      if (!userRequest.ok) {
        setIsLoading(false);
        return;
      }

      const userData = await userRequest.json();

      if (!userData || userData.error) {
        setIsLoading(false);
        return;
      }

      dispatch(setUser(userData));
      setIsLoading(false);
    })();
  }, []);

  return [user, isLoading];
};

export default useMe;
