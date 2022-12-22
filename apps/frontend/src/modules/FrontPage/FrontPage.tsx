import { FC } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { switchModule } from '../../store/slices/applicationSlice';

const FrontPage: FC = () => {
  const dispatch = useAppDispatch();
  const switchPage = () => {
    dispatch(switchModule('player'));
  };

  return (
    <>
      Frontpage
      <button onClick={switchPage} type="button">
        Switch
      </button>
    </>
  );
};

export default FrontPage;
