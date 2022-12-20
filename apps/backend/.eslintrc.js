module.exports = {
  root: true,
  extends: ['@scp/config-scp/express.json'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
};
