import { FC, useState } from 'react';
import Device from '../../components/Device';
import TextStyles from '../../components/TextStyles';
import { useAppSelector } from '../../hooks/useAppSelector';
import * as S from './DeviceSelector.style';
import { DeviceSelectorProps } from './DeviceSelector.types';

const DeviceSelector: FC<DeviceSelectorProps> = ({ isActive }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const devices = useAppSelector(state => state.devices);

  return (
    <S.Wrapper isActive={isActive}>
      <TextStyles as="h3" fontWeight="normal">
        Select Device
      </TextStyles>
      <S.Devices>
        {devices.map((device, index) => (
          <Device key={`device-${device.id}`} device={device} isActive={index === activeIndex} />
        ))}
      </S.Devices>
    </S.Wrapper>
  );
};

export default DeviceSelector;
