import styled, { css } from 'styled-components';
import BackwardIcon from '../icons/BackwardIcon';
import ForwardIcon from '../icons/ForwardIcon';
import { TimelineInnerProps } from './Controls.types';

const SelectedState = css`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  padding: 4px;

  /* svg {
    > path,
    > polyline {
      fill: ${({ theme }) => theme.colors.black};
    }
  } */
`;

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
`;

export const Shuffle = styled.div`
  &[data-selected='true'] {
    ${SelectedState}
  }

  > svg {
    display: block;
  }
`;

export const ContentControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 18px;
`;

export const Repeat = styled.div`
  &[data-selected='true'] {
    ${SelectedState}
  }

  > svg {
    display: block;
  }
`;

export const Backward = styled(BackwardIcon)`
  &[data-selected='true'] {
    ${SelectedState}
  }

  display: block;
`;

export const PlayPause = styled.div`
  &[data-selected='true'] {
    ${SelectedState}
  }

  > svg {
    display: block;
  }
`;

export const Forward = styled(ForwardIcon)`
  &[data-selected='true'] {
    ${SelectedState}
  }

  display: block;
`;
