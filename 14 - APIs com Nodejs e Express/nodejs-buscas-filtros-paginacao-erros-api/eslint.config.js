import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: {
            sourceType: "module",
            ...globals.node,
        },
        rules: {
            indent: ["error", 4],
            quotes: ["error", "double"],
            "no-console": "off",
            "no-unused-vars": ["error"],
            "max-len": ["error", { "code": 100 }],
            "object-curly-spacing": ["error", "always"],
            "array-bracket-spacing": ["error", "never"],
            "import/extensions": ["error", "always"],
        },
    },
    pluginJs.configs.recommended,
];
