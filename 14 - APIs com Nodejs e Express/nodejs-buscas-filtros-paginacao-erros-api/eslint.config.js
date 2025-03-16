import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
    {
        languageOptions: {
            sourceType: "module",
            ...globals.node,
            ...globals.es2021
        },
        rules: {
            indent: ["error", 4],
            quotes: ["error", "double"],
            "no-console": "off",
            "no-unused-vars": ["warn"],
            "max-len": ["error", { "code": 100 }],
            "object-curly-spacing": ["error", "always"],
            "array-bracket-spacing": ["error", "never"]
        },
    },
    pluginJs.configs.recommended,
];
