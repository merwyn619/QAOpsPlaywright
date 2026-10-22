// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './tests',
  testMatch: '**/*.spec.{js,ts}',
  retries:0,
  workers:3,

  /*Max time 1 test can run for */
  timeout: 40*1000,
  expect: {
    timeout: 5000
  },
  reporter: [['html'], ['allure-playwright']],
  use: {
    actionTimeout:10*1000,
    navigationTimeout:30*1000,
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'retain-on-failure',//off,on,retain-on-failure
    launchOptions: {
      executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    }
  }, 


});
module.exports=config
