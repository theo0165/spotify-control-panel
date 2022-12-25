import { useEffect } from 'react';

/*
 * Usage:
 *  const events = useEventConsumer(currentModule === thisModule);
 *
 *  useEffect(() => {
 *    console.log(events)
 *  }, [events])
 */

const useEventConsumer = (isActive: boolean) => {
  useEffect(() => {}, []);
};
