const { defineConfig } = require("cypress");
import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      configureAllureAdapterPlugins(on, config);
      return config;    },
    baseUrl: process.env.BASE_URL,
    env: {
      email: process.env.EMAIL,
      password: process.env.PASSWORD,
      allure: true
    },
  },
});
