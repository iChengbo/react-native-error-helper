module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 7,
        sourceType: "module",
        ecmaFeatures: {
            tsx: true
        }
    },
    plugins: ['@typescript-eslint'],
    rules: {
        'no-var': "error",
        '@typescript-eslint/consistent-type-definitions': [
            "error",
            "interface"
        ]
    },
}