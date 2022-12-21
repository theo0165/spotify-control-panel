// eslint-disable-next-line arrow-body-style
export const fetchWithCredentials = (url: string, options?: RequestInit) => {
  return fetch(url, { ...options, credentials: 'include' });
};
