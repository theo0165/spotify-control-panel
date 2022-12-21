import styled from 'styled-components';

export const Wrapper = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 300;
  padding: 8px 16px;
  border-radius: ${({ theme }) => theme.borderRadius.xLarge};
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;

  &:active {
    transform: translateY(0.5px);
  }
`;
