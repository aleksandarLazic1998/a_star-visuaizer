module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:react/recommended',
        'prettier',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['prettier', 'react', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/quotes': 'off',
        '@typescript-eslint/indent': 'off',
        'react/jsx-indent': 'off',
        'no-tabs': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        'no-param-reassign': 'off',
        'react/no-this-in-sfc': 'off',
        'lines-between-class-members': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        'no-nested-ternary': 'off',
        '@typescript-eslint/no-unused-vars': [
            'warn',
            { argsIgnorePattern: '^_' },
        ],
        'arrow-body-style': 'off',
        'import/no-named-as-default': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
    },
}
