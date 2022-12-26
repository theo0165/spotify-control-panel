import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import useEventConsumer from '../../hooks/useEventConsumer';
import useProtectedRoute from '../../hooks/useProtectedRoute';
import DeviceSelector from '../../modules/DeviceSelector';
import FrontPage from '../../modules/FrontPage';
import Player from '../../modules/Player';
import { switchModule } from '../../store/slices/applicationSlice';
import { setEvent } from '../../store/slices/eventSlice';

const HomePage: FC = () => {
  useProtectedRoute();
  const currentModule = useAppSelector(state => state.application.currentModule);
  const dispatch = useDispatch();
  const [events, eventsActive] = useEventConsumer(true);

  const handlePageChange = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'w':
        dispatch(switchModule('frontpage'));
        break;
      case 's':
        dispatch(switchModule('player'));
        break;
      case 'e':
        dispatch(switchModule('device'));
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handlePageChange);

    return () => {
      document.removeEventListener('keydown', handlePageChange);
    };
  }, []);

  useEffect(() => {
    if (!eventsActive) return;

    if (events?.longClick) {
      dispatch(switchModule(currentModule === 'frontpage' ? 'player' : 'frontpage'));
      dispatch(setEvent({ name: 'longClick', value: false }));
    }
  }, [events, eventsActive, currentModule]);

  return (
    <>
      <FrontPage />
      <Player isActive={currentModule === 'player'} />
      <DeviceSelector isActive={currentModule === 'device'} />
    </>
  );
};

export default HomePage;
