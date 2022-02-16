module.exports = {
    extends: ['airbnb-base', 'plugin:node/recommended', 'prettier'],
    root: true,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        node: true,
    },
    rules: {
        'no-conosole': 'off',
        'import/prefer-default=export': 'off',
        'arrow-body-style': 'off',
        'prefer-destructuring': 'off',
        'no-unused-vars ': 'off',
    },
};
