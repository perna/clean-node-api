import eslint from '@eslint/js';
import tseslint from 'typescript-eslint'
import standard from 'ts-standard';

export default tseslint.config({
  ...eslint.configs.recommended,
  ...tseslint.configs.recommended,
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'error',
    'eqeqeq': 'error',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  plugins: {
    standard: standard
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        'standard/object-curly-even-spacing': [2, 'either'],
        'standard/array-bracket-even-spacing': [2, 'either'],
        'standard/computed-property-even-spacing': [2, 'even'],
        'standard/no-callback-literal': [2, ['cb', 'callback']]
      },
    },
  ],
})
