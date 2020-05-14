module.exports = {
    env: {
        commonjs: true,
        browser: true,
        es6: true,
        jest: true,
        node: true
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
        "ecmaVersion": 2018,
        "sourceType": "module",
        "process": "readonly"
    },
    plugins: [
        "react"
    ],
    rules: {
        "react/prop-types": 0,
        "semi": ['error', 'always'],
        "indent": [ 'error', 2 ],
        "linebreak-style": [ 'error', 'unix' ],
        "quotes": [ 'error', 'single' ],
        "keyword-spacing": [ 'error' , {
            "before": true,
            "after": true
        } ],
        "object-curly-spacing": [ 'error', 'always' ],
        "array-bracket-spacing": [ 'error', 'always' ]
    },
    settings: {
        "react": {
            "version": "detect"
        }
    }
};
