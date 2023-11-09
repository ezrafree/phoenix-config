/**
 * Phoenix Config
 */

const HYPER_KEYS = ['cmd', 'alt', 'ctrl']
const HYPER_SHIFT = ['shift']

const PHOENIX_DAEMON = false
const PHOENIX_OPEN_AT_LOGIN = true

// when using HYPER-SHIFT-X this will resize the current window to these pixels
const WINDOW_WIDTH = 1440
const WINDOW_HEIGHT = 900

const PERCENT_WIDTH_LEFT = 0.8
const PERCENT_WIDTH_RIGHT = 0.2

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

// -----------------------------------------------------------------------------
// Warning: this config has been built custom to my monitor configuration. Your
// mileage may vary.
//
// I use this configuration to move windows across my three monitors but skip
// over my laptop's built-in display. I also use it to move windows between the
// external monitors and the built-in display.
//
// This will likely not work unless you have external monitors that are all
// the same size / resolution / etc.
const SKIP_BUILTIN_DISPLAY = false
// Set the pixel width of your laptop's built-in display (default: 1792)
const BUILTIN_DISPLAY_WIDTH = 1512
// Set the pixel width of each of your external monitors (default: 2560)
const EXTERNAL_DISPLAY_WIDTH = 2560
// This option reverses the direction of the left/right arrow keys. When the
// system is rebooted, sometimes the direction of these arrow keys may be
// reversed. This is either due to a bug in the code, or to the way macOS
// returns the screens (still TBD).
const REVERSE_LEFT_RIGHT_DIRECTION = false
// -----------------------------------------------------------------------------

// Enabling debug mode sends debugging information to the log messages. You can
// see the logs by running the following command:
// $ log stream --process Phoenix
DEBUG_MODE = false

// Screen resolution notes...
/*

    1512 x 982      14" Macbook Pro M2
    1728 x 1117     16" Macbook Pro M2

*/
