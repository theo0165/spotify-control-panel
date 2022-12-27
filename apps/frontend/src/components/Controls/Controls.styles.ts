/* eslint-disable no-confusing-arrow */
import { darken } from 'polished';
import styled, { css } from 'styled-components';
import {
  ContentControlProps,
  ControlsWrapperProps,
  PlayPauseProps,
  ShuffleRepeatProps,
  TimelineInnerProps,
} from './Controls.types';

export const Wrapper = styled.div<ControlsWrapperProps>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${({ background }) => (background ? darken(0.3, background) : 'transparent')};
`;

export const Timeline = styled.div`
  height: 3px;
  width: 100%;
  background: ${({ theme }) => theme.colors.black};
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

const ControlItemBase = styled.div`
  transition: all 0.2s ease-in-out;
`;

export const Repeat = styled(ControlItemBase)<ShuffleRepeatProps>`
  stroke: ${({ isActive, theme }) => (isActive ? theme.colors.green : theme.colors.white)};
  padding: 9px 10px 9px 10px;
  border-radius: 100%;

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background: ${theme.colors.controlsActiveBg};
    `}
`;

export const Shuffle = styled(ControlItemBase)<ShuffleRepeatProps>`
  stroke: ${({ isActive, theme }) => (isActive ? theme.colors.green : theme.colors.white)};
  padding: 9px 10px 9px 10px;
  border-radius: 100%;

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background: ${theme.colors.controlsActiveBg};
    `}
`;

export const Backward = styled(ControlItemBase)<ContentControlProps>`
  padding: 12px 14px 12px 12px;
  border-radius: 100%;

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background: ${theme.colors.controlsActiveBg};
    `}
`;

export const PlayPause = styled(ControlItemBase)<PlayPauseProps>`
  padding: ${({ isPlay }) => (isPlay ? '12px 13px 12px 13px' : '12px 10px 12px 16px')};
  border-radius: 100%;

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background: ${theme.colors.controlsActiveBg};
    `}
`;

export const Forward = styled(ControlItemBase)<ContentControlProps>`
  padding: 12px 12px 12px 14px;
  border-radius: 100%;

  ${({ isSelected, theme }) =>
    isSelected &&
    css`
      background: ${theme.colors.controlsActiveBg};
    `}
`;
