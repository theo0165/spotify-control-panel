import { Device } from '@scp/types';
import { fetchWithCredentials, urlBuilder } from '@scp/utils';
import { useEffect, useState } from 'react';
import { setDevices } from '../store/slices/devicesSlice';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

const useDevices = (): [Device[], boolean] => {
  const dispatch = useAppDispatch();
  const devices = useAppSelector(state => state.devices);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    if (devices.length > 0) {
      setIsLoading(false);
      return;
    }

    (async () => {
      const devicesRequest = await fetchWithCredentials(urlBuilder('/user/devices'));

      if (!devicesRequest.ok) {
        setIsLoading(false);
        return;
      }

      const devicesData = await devicesRequest.json();

      if (!devicesData || devicesData.error) {
        setIsLoading(false);
        return;
      }

      dispatch(setDevices(devicesData));
      setIsLoading(false);
    })();
  }, []);

  return [devices, isLoading];
};

export default useDevices;
