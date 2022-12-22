import styled from 'styled-components';

export const Wrapper = styled.div`
  overflow: scroll;
  display: flex;
  column-gap: 32px;
  margin-left: 24px;

  & > div:last-child {
    margin-right: 24px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
