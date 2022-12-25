import colors from '../theme/colors';

export interface IconBase {
  width?: string;
  height?: string;
  color?: keyof typeof colors;
}
