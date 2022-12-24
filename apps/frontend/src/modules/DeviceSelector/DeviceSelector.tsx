import { FC, useEffect, useState } from 'react';
import Device from '../../components/Device';
import TextStyles from '../../components/TextStyles';
import { useAppSelector } from '../../hooks/useAppSelector';
import * as S from './DeviceSelector.style';
import { DeviceSelectorProps } from './DeviceSelector.types';

const DeviceSelector: FC<DeviceSelectorProps> = ({ isActive }) => {
  const devices = useAppSelector(state => state.devices);
  const activeDeviceIndex = devices.indexOf(devices.filter(device => device.isActive)[0]);
  const [activeIndex, setActiveIndex] = useState(activeDeviceIndex >= 0 ? activeDeviceIndex : 0);

  const handleKeydown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'r':
        setActiveIndex(val => val - 1);
        break;
      case 'f':
        setActiveIndex(val => val + 1);
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

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
