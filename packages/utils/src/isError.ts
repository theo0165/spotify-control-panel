export const isError = <T>(obj: T | { error: string }): obj is { error: string } =>
  // eslint-disable-next-line implicit-arrow-linebreak
  (obj as { error: string }).error === 'undefined';
