/**
 * macOS Phoenix Config
 */

// configure
require('./config/config.js')
Phoenix.set({
  daemon: PHOENIX_DAEMON,
  openAtLogin: PHOENIX_OPEN_AT_LOGIN,
})

// modules
require('./modules/utils.js')
require('./modules/variables.js')
require('./modules/mouse.js')
require('./modules/window.js')
require('./modules/apps.js')
require('./modules/spaces.js')
require('./modules/screens.js')
require('./modules/keymappings.js')
// require('./modules/debug-events.js')
