import { fetchWithCredentials, urlBuilder } from '@scp/utils';
import { FC, useEffect, useState } from 'react';
import Device from '../../components/Device';
import TextStyles from '../../components/TextStyles';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { devicesShouldUpdate } from '../../store/slices/devicesSlice';
import * as S from './DeviceSelector.style';
import { DeviceSelectorProps } from './DeviceSelector.types';

const DeviceSelector: FC<DeviceSelectorProps> = ({ isActive }) => {
  const dispatch = useAppDispatch();
  const devices = useAppSelector(state => state.devices.devices);
  const activeDeviceIndex = devices.indexOf(devices.filter(device => device.isActive)[0]);
  const [activeIndex, setActiveIndex] = useState(activeDeviceIndex >= 0 ? activeDeviceIndex : 0);

  const switchDevice = async () => {
    if (activeIndex < 0) return;

    const newDevice = devices[activeIndex];
    await fetchWithCredentials(urlBuilder('/user/devices/set'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        device: newDevice.id,
      }),
    });

    setTimeout(() => {
      dispatch(devicesShouldUpdate(true));
    }, 200);

    // TODO: Toats if not ok request
  };

  const handleKeydown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'r':
        setActiveIndex(val => val - 1);
        break;
      case 'f':
        setActiveIndex(val => val + 1);
        break;
      case 'p':
        switchDevice();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [activeIndex]);

  return (
    <S.Wrapper isActive={isActive}>
      <TextStyles as="h3" fontWeight="normal">
        Select Device
      </TextStyles>
      <S.Devices>
        {devices.map((device, index) => (
          <Device
            key={`device-${device.id}`}
            device={device}
            isActive={index === activeIndex}
            isCurrentDevice={device.isActive}
          />
        ))}
      </S.Devices>
    </S.Wrapper>
  );
};

export default DeviceSelector;
