export const spotifyUrlBuilder = (endpoint: string) => {
  if (endpoint.startsWith('/')) endpoint = endpoint.slice(1);

  return `https://api.spotify.com/v1/${endpoint}`;
};
