const { defineConfig, devices } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  use: {
    ...devices['Desktop Chrome'],
    baseURL: 'http://127.0.0.1:8080'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ],
  webServer: {
    command: 'node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js --mode development --port 8080 --host 127.0.0.1',
    url: 'http://127.0.0.1:8080',
    reuseExistingServer: !process.env.CI
  }
})
