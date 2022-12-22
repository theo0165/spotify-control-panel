import { FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { switchModule } from '../../store/slices/applicationSlice';
import * as S from './Player.style';
import { PlayerProps } from './Player.types';

const Player: FC<PlayerProps> = ({ isActive }) => {
  const dispatch = useAppDispatch();
  const switchMod = () => dispatch(switchModule('homepage'));

  return (
    <S.Wrapper isActive={isActive}>
      Player
      <button type="button" onClick={switchMod}>
        Switch
      </button>
    </S.Wrapper>
  );
};

export default Player;
