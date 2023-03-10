import { User } from '../Spotify/User';

export interface UserState {
  isLoggedIn: boolean;
  user: User | null;
}
