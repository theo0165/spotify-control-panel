export const translateTime = (ms: number) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = parseInt(((ms % 60000) / 1000).toFixed(0), 10);

  return seconds === 60 ? `${minutes + 1}:00` : `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
