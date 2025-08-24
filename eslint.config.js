import antfu from '@antfu/eslint-config'

export default antfu({
// Or customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },

  // TypeScript and Vue are autodetected, you can also explicitly enable them:
  typescript: true,
  vue: true,
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-vars': 'off',
    'ts/no-redeclare': 'off',
  },
})
