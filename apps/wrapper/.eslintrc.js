module.exports = {
  root: true,
  extends: ['@scp/config-scp/base.json'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
