import { useCallback, useContext, useEffect } from 'react';
import { SocketContext } from '../context/socket';
import { setEvent } from '../store/slices/eventSlice';
import { useAppDispatch } from './useAppDispatch';

const useEvents = () => {
  const dispatch = useAppDispatch();
  const socket = useContext(SocketContext);

  const handleClick = useCallback(() => {
    dispatch(setEvent({ name: 'click', value: true }));
  }, []);

  const handleDoubleClick = useCallback(() => {
    dispatch(setEvent({ name: 'doubleClick', value: true }));
  }, []);

  const handleLongClick = useCallback(() => {
    dispatch(setEvent({ name: 'longClick', value: true }));
  }, []);

  const handleLeft = useCallback(() => {
    dispatch(setEvent({ name: 'left', value: true }));
  }, []);

  const handleRight = useCallback(() => {
    dispatch(setEvent({ name: 'right', value: true }));
  }, []);

  useEffect(() => {
    socket.on('click', handleClick);
    socket.on('double_click', handleDoubleClick);
    socket.on('long_click', handleLongClick);
    socket.on('left', handleLeft);
    socket.on('right', handleRight);
  }, [socket]);
};

export default useEvents;
