import { Device } from '@scp/types';
import { fetchWithCredentials, urlBuilder } from '@scp/utils';
import { useEffect, useState } from 'react';
import { devicesShouldUpdate, setDevices } from '../store/slices/devicesSlice';
import { useAppDispatch } from './useAppDispatch';
import { useAppSelector } from './useAppSelector';

const useDevices = (): [Device[], boolean] => {
  const dispatch = useAppDispatch();
  const devices = useAppSelector(state => state.devices.devices);
  const shouldUpdate = useAppSelector(state => state.devices.shouldUpdate);
  const [isLoading, setIsLoading] = useState(true);

  const getDevices = () => {
    setIsLoading(true);

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
  };

  useEffect(getDevices, []);

  useEffect(() => {
    if (shouldUpdate) {
      getDevices();
      dispatch(devicesShouldUpdate(false));
    }
  }, [shouldUpdate]);

  return [devices, isLoading];
};

export default useDevices;
