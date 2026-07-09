/**
 * Config Defaults
 */

// Fallbacks for constants removed or commented out in config.js. Assigning
// through `this` (the global object) means a `const` in config.js always
// stays authoritative and the assignment can never throw.
if (typeof HYPER_KEYS === 'undefined') this.HYPER_KEYS = ['cmd', 'alt', 'ctrl']
if (typeof HYPER_SHIFT === 'undefined') this.HYPER_SHIFT = ['shift']
if (typeof PHOENIX_DAEMON === 'undefined') this.PHOENIX_DAEMON = false
if (typeof PHOENIX_OPEN_AT_LOGIN === 'undefined')
  this.PHOENIX_OPEN_AT_LOGIN = true
if (typeof WINDOW_WIDTH === 'undefined') this.WINDOW_WIDTH = 1440
if (typeof WINDOW_HEIGHT === 'undefined') this.WINDOW_HEIGHT = 900
if (typeof PERCENT_WIDTH_LEFT === 'undefined') this.PERCENT_WIDTH_LEFT = 0.6
if (typeof PERCENT_WIDTH_RIGHT === 'undefined') this.PERCENT_WIDTH_RIGHT = 0.4
if (typeof PERCENT_HEIGHT_TOP === 'undefined') this.PERCENT_HEIGHT_TOP = 2 / 3
if (typeof PERCENT_HEIGHT_BOTTOM === 'undefined')
  this.PERCENT_HEIGHT_BOTTOM = 1 / 3
if (typeof DOUBLE_KEY_INTERVAL === 'undefined') this.DOUBLE_KEY_INTERVAL = 250
if (typeof QUIT_BLACKLIST === 'undefined') this.QUIT_BLACKLIST = ['Finder']
if (typeof DEBUG_MODE === 'undefined') this.DEBUG_MODE = false
