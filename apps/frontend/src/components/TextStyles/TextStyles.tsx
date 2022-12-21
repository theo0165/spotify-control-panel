import styled from 'styled-components';
import { TextStyleProps } from './TextStyles.types';

export default styled.p<TextStyleProps>`
  color: ${({ color, theme }) => color && theme.colors[color]};
  font-size: ${({ fontSize, theme }) => fontSize && theme.fontSizes[fontSize]};
  font-weight: ${({ fontWeight, theme }) => fontWeight && theme.fontWeights[fontWeight]};
`;
