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
    plugins: { prettier },
  },
  {
    ...pluginJs.configs.recommended,
    files: ["src/**/*.{ts,js}"],
  },
  ...tseslint.configs.recommended.map(config => ({
    ...config,
    files: ["src/**/*.ts"]
})),
];