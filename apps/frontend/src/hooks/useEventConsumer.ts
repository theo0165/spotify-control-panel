import { EventState } from '@scp/types';
import { useEffect, useState } from 'react';
import { useAppSelector } from './useAppSelector';

/*
 * Usage:
 *  const events = useEventConsumer(currentModule === thisModule);
 *
 *  useEffect(() => {
 *    console.log(events)
 *  }, [events])
 */

const useEventConsumer = (isActive: boolean): [Partial<EventState>, boolean] => {
  const events = useAppSelector(state => state.event);
  const [active, setActive] = useState(isActive);

  useEffect(() => {
    setActive(isActive);
  }, [isActive, events]);

  return [isActive ? events : {}, active];
};

export default useEventConsumer;
