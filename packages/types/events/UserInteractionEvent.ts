export interface UserInteractionEvent {
  press: boolean;
  longPress: boolean;
  doublePress: boolean;
  direction: 'left' | 'right';
}
