import { fetchWithCredentials, urlBuilder } from '@scp/utils';
import { useEffect } from 'react';
import { setUser } from '../store/slices/userSlice';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

const useMe = () => {
  const dispatch = useAppDispatch();
  const { user, isLoggedIn } = useAppSelector(state => state.user);

  useEffect(() => {
    if (!!user || isLoggedIn) return;

    (async () => {
      const userRequest = await fetchWithCredentials(urlBuilder('/user/me'));

      if (!userRequest.ok) return;

      const userData = await userRequest.json();

      if (!userData || userData.error) return;

      dispatch(setUser(userData));
    })();
  }, []);

  return user;
};

export default useMe;
