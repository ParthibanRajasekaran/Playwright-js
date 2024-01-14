const dotenv = require('dotenv');

async function globalSetup(config) {
  if (process.env.test_env) {
    dotenv.config({
      path: `.env.${process.env.test_env}`,
      override: true
    });
  }
}

module.exports = globalSetup;
