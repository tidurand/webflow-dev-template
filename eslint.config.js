import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";


export default [
  {
    files: ["src/**/*.{ts,js}"],
    rules: {
      'prettier/prettier': 'error',
    },
    languageOptions: { globals: globals.browser },
    ignores: ['dist/', '.eslint.config.js'],
    plugins: { prettier }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];