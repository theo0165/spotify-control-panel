import theme from '../../theme';

const { colors, fontSizes, fontWeights } = theme;

export interface TextStyleProps {
  fontSize?: keyof typeof fontSizes;
  fontWeight?: keyof typeof fontWeights;
  color?: keyof typeof colors;
}
