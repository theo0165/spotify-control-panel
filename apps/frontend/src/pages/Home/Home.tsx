import { FC, useEffect } from 'react';
import { Helmet } from 'react-helmet';
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
  const title = useAppSelector(state => state.application.name);
  const currentModule = useAppSelector(state => state.application.currentModule);
  const dispatch = useDispatch();
  const [events, eventsActive] = useEventConsumer(true);

  useEffect(() => {
    if (!eventsActive) return;

    if (events?.longClick) {
      dispatch(switchModule(currentModule === 'frontpage' ? 'player' : 'frontpage'));
      dispatch(setEvent({ name: 'longClick', value: false }));
    }
  }, [events, eventsActive, currentModule]);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <FrontPage />
      <Player isActive={currentModule === 'player'} />
      <DeviceSelector isActive={currentModule === 'device'} />
    </>
  );
};

export default HomePage;
