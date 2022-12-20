module.exports = {
  root: true,
  extends: ['@scp/config-scp/react.json'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
