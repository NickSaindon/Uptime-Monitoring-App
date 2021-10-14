// Create and export configuration variables

// Container for all environments
const environments = {}

// Staging {default} environment
environments.staging = {
    'httpPort': 4200,
    'httpsPort': 4201,
    'envName': 'staging',
    'hashingSecret': 'thisIsASecret',
    'maxChecks': 5,
    'twilio' : {
        'accountSid': 'ACb32d411ad7fe886aac54c665d25e5c5d',
        'authToken': '9455e3eb3109edc12e3d8c92768f7a67',
        'fromPhone': '+15005550006'
    },
};

environments.production = {
    'httpPort': 8000,
    'httpsPort': 8001,
    'envName': 'production',
    'hashingSecret': 'thisIsASecret',
    'maxChecks': 5,
    'twilio': {
        'accountSid': '',
        'authToken': '',
        'fromPhone': ''
    }
};

// Determine which environment was passed as a command-line argument
const currentEnv = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above if not default to Staging
const envToExport = typeof(environments[currentEnv]) == 'object' ?  environments[currentEnv] : environments.staging;

// Export the module
module.exports = envToExport;