module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    env: {
        es6: true,
        browser: true,
    },
    globals: {},
    extends: [],
    plugins: ['react', 'react-hooks'],
    rules: {
        semi: 2,
        'comma-dangle': 0,
        'react/jsx-uses-vars': 1,
        'no-unused-vars': 1,
        'no-undef': 0,
        'no-unexpected-multiline': 1,
        'no-debugger': 2,
        'no-alert': 1,
        'no-console': 1,
        'no-await-in-loop': 1,
        'no-return-assign': ['error', 'except-parens'],
        'no-unused-expressions': [2, { allowTaggedTemplates: true }],
        'import/prefer-default-export': 0,
        import: 0,
        'react/require-default-props': 0,
        quotes: [
            2,
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        eqeqeq: 1,
        'array-bracket-spacing': 1,
        'object-curly-spacing': [1, 'always'],
        'object-curly-newline': [
            1,
            {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 3,
                    consistent: false,
                },
            },
        ],
        camelcase: 1,
        indent: 2,
        'max-len': [
            2,
            {
                code: 120,
                tabWidth: 4,
                ignoreTemplateLiterals: true,
            },
        ],
    },
    settings: {
        'import/resolver': 'webpack',
        react: {
            createClass: 'createReactClass',
            pragma: 'React',
            fragment: 'Fragment',
            version: 'detect',
            flowVersion: '0.53',
        },
        propWrapperFunctions: [
            'forbidExtraProps',
            { property: 'freeze', object: 'Object' },
            { property: 'myFavoriteWrapper' },
        ],
        linkComponents: ['Hyperlink', { name: 'Link', linkAttribute: 'to' }],
    },
};
