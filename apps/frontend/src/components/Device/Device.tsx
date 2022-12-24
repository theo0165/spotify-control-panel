import { FC } from 'react';
import DeviceIcon from '../DeviceIcon';
import TextStyles from '../TextStyles';
import * as S from './Device.styles';
import { DeviceProps } from './Device.types';

const Device: FC<DeviceProps> = ({ device, isActive }) => (
  <S.Wrapper isActive={isActive}>
    <S.DeviceIconWrapper>
      <DeviceIcon type={device.type} />
    </S.DeviceIconWrapper>
    <S.Name>
      <TextStyles>{device.name}</TextStyles>
    </S.Name>
    {/* TODO: Add playing status */}
  </S.Wrapper>
);

export default Device;
