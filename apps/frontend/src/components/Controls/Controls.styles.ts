import styled from 'styled-components';
import { TimelineInnerProps } from './Controls.types';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Timeline = styled.div`
  height: 3px;
  width: 100%;
`;

export const TimelineInner = styled.div<TimelineInnerProps>`
  height: 3px;
  width: ${({ width }) => `${width * 100}%`};
  background: ${({ theme }) => theme.colors.white};
  transition: width 100ms linear;
`;

export const Controls = styled.div`
  height: 100%;
  padding: 0 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    display: block;
  }
`;

export const ContentControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 32px;
`;

export const Repeat = styled.div``;

export const Shuffle = styled.div``;

export const Backward = styled.div``;

export const PlayPause = styled.div``;

export const Forward = styled.div``;
