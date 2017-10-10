'use strict'

function appName() {
  switch (process.env.NODE_ENV) {
    case 'production': return 'SP Production'
    case 'development': return 'SP Development'
    case 'staging': return 'SP Staging'
    case 'test': return 'SP Test'
    default: return 'SP Development'
  }
}

/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name: appName(),
  /**
   * Your New Relic license key.
   */
  license_key: '2b96ac87753fa6ba8b112aecff74a4ff92f353b7',
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: process.env.NODE_ENV === 'production' ? 'info' : 'trace'
  }
}
