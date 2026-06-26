/**
 * Phoenix Config
 */

const HYPER_KEYS = ['cmd', 'alt', 'ctrl']
const HYPER_SHIFT = ['shift']

const PHOENIX_DAEMON = false
const PHOENIX_OPEN_AT_LOGIN = true

// when double-tapping HYPER-SHIFT-C this will resize the current window to these pixels
const WINDOW_WIDTH = 1440
const WINDOW_HEIGHT = 900

const PERCENT_WIDTH_LEFT = 0.6
const PERCENT_WIDTH_RIGHT = 0.4

const PERCENT_HEIGHT_TOP = 2 / 3
const PERCENT_HEIGHT_BOTTOM = 1 / 3

// the number of milliseconds for double pressing a key
const DOUBLE_KEY_INTERVAL = 250

const QUIT_BLACKLIST = ['Finder']

// set any of these to an empty string '' to disable
const APP_SHORTCUT_1 = 'Google Chrome'
const APP_SHORTCUT_2 = 'Spotify'
const APP_SHORTCUT_3 = 'Visual Studio Code'
const APP_SHORTCUT_4 = 'iTerm'
const APP_SHORTCUT_5 = 'Figma'
const APP_SHORTCUT_6 = 'GIPHY Capture'
// const APP_SHORTCUT_X = 'Slack'

// Enabling debug mode sends debugging information to the log messages. You can
// see the logs by running the following command:
// $ log stream --process Phoenix
DEBUG_MODE = false
