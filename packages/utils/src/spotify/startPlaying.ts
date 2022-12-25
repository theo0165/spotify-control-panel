import { fetchWithCredentials } from '../fetchWithCredentials';
import { urlBuilder } from '../urlBuilder';

export const startPlaying = async (playlist: string, device: string) => {
  const playRequest = await fetchWithCredentials(urlBuilder('/music/play'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      playlist,
      device,
    }),
  });

  return playRequest.ok;
};
