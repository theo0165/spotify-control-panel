import { urlBuilder } from '@scp/utils';
import { useEffect } from 'react';
import { resolveApplication } from '../store/slices/applicationSlice';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

const useApplication = () => {
  const dispatch = useAppDispatch();
  const application = useAppSelector(state => state.application);

  useEffect(() => {
    (async () => {
      const appDataRequest = await fetch(urlBuilder('/resolve'));

      if (!appDataRequest.ok) return;

      const appData = await appDataRequest.json();

      console.log({ appData });

      dispatch(resolveApplication(appData));
    })();
  }, []);

  return application;
};

export default useApplication;
