module.exports = {
  root: true,
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'import/no-unresolved': 0,
    // allow debugger during development
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-debugger': 0,
    'no-restricted-syntax': 0,
    'no-console': 0,
    'no-alert': 0,
    // 'no-console': 0, // logging is helpful
  }
}
