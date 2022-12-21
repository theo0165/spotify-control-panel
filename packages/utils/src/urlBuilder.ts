export const urlBuilder = (endpoint: string) => {
  if (endpoint.startsWith('/')) endpoint = endpoint.slice(1);

  return `${process.env.REACT_APP_SERVER_BASE_URL}/${endpoint}`;
};
