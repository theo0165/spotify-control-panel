export interface ApiDevice {
  id: string;
  is_active: boolean;
  is_private_session: boolean;
  is_restriced: boolean;
  name: string;
  type: string;
  volume_percentage: number;
}
