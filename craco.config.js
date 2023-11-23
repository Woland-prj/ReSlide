/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path')
const resolvePath = p => path.resolve(__dirname, p)
module.exports = {
  webpack: {
    alias: {
      '@': resolvePath('./src'),
      '@ui': resolvePath('./src/components/ui'),
      '@slide': resolvePath('./src/components/ui/slide'),
    },
  },
}
