/*
 * Create and export config variables
 *
 */

// container for all the environments
var environments = {};
// Staging (default) env
environments.staging = {
  httpPort: 3000,
  httpsPort: 3001,
  envName: "staging"
};

// Production env
environments.production = {
  httpPort: 5000,
  httpsPort: 5001,
  envName: "production"
};

// Determine which environment was passed as a comman-line arg
var currentEnvironment =
  typeof process.env.NODE_ENV == "string"
    ? process.env.NODE_ENV.toLowerCase()
    : "";

// Check that the current env is one of the envs above if not, default to staging
var environmentToExport =
  typeof environments[currentEnvironment] == "object"
    ? environments[currentEnvironment]
    : environments.staging;

// export the module
module.exports = environmentToExport;
