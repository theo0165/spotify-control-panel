import { FC } from 'react';
import TextStyles from '../../components/TextStyles';
import { useAppSelector } from '../../hooks/useAppSelector';
import * as S from './DeviceSelector.style';
import { DeviceSelectorProps } from './DeviceSelector.types';

const DeviceSelector: FC<DeviceSelectorProps> = ({ isActive }) => {
  const devices = useAppSelector(state => state.devices);

  return (
    <S.Wrapper isActive={isActive}>
      <TextStyles as="h3" fontWeight="normal">
        Select Device
      </TextStyles>
      <S.Devices>
        {devices.map(device => (
          <p>{device.name}</p>
        ))}
      </S.Devices>
    </S.Wrapper>
  );
};

export default DeviceSelector;
