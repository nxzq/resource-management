module.exports = {
    env: {
        commonjs: true,
        browser: true,
        es6: true,
        jest: true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    plugins: [
        "react"
    ],
    rules: {
        "react/prop-types": 0,
        "semi": ['error', 'always'], 
    }
};
