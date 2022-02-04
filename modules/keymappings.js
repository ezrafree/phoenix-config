/**
 * Keymappings
 */

// Launch apps
if (APP_SHORTCUT_1 && APP_SHORTCUT_1 !== '') {
  Key.on('1', hyper, function () {
    callApp(APP_SHORTCUT_1)
  })
}
if (APP_SHORTCUT_2 && APP_SHORTCUT_2 !== '') {
  Key.on('2', hyper, function () {
    callApp(APP_SHORTCUT_2)
  })
}
if (APP_SHORTCUT_3 && APP_SHORTCUT_3 !== '') {
  Key.on('3', hyper, function () {
    callApp(APP_SHORTCUT_3)
  })
}
if (APP_SHORTCUT_4 && APP_SHORTCUT_4 !== '') {
  Key.on('4', hyper, function () {
    callApp(APP_SHORTCUT_4)
  })
}
if (APP_SHORTCUT_5 && APP_SHORTCUT_5 !== '') {
  Key.on('5', hyper, function () {
    callApp(APP_SHORTCUT_5)
  })
}
if (APP_SHORTCUT_6 && APP_SHORTCUT_6 !== '') {
  Key.on('6', hyper, function () {
    callApp(APP_SHORTCUT_6)
  })
}

// Focus mouse to next screen
Key.on('s', hyper, function () {
  focusOnNextScreen()
})
// Focus mouse to previous screen
Key.on('a', hyper, function () {
  focusOnPreviousScreen()
})

// Move current window to next screen
Key.on(REVERSE_LEFT_RIGHT_DIRECTION ? 'left' : 'right', hyper, function () {
  moveToNextScreen()
})
// Move current window to previous screen
Key.on(REVERSE_LEFT_RIGHT_DIRECTION ? 'right' : 'left', hyper, function () {
  moveToPreviousScreen()
})

// toggle moving windows to/from the built-in display
if (SKIP_BUILTIN_DISPLAY) {
  // Move current window to built-in display
  Key.on('down', hyper, function () {
    moveToAllNextScreens()
  })
  // Move current window to external monitors
  Key.on('up', hyper, function () {
    moveToAllPreviousScreens()
  })
}

// Move current window to next space
Key.on('w', hyper, function () {
  moveToNextSpace()
})
// Move current window to previous space
Key.on('q', hyper, function () {
  moveToPreviousSpace()
})

// Window maximize
Key.on('space', hyper, function () {
  maximizeCurrentWindow()
})
// Window smaller
Key.on('-', hyper, function () {
  smallerCurrentWindow()
})
// Window larger
Key.on('=', hyper, function () {
  largerCurrentWindow()
})

// Next window in current screen
Key.on('tab', hyper, function () {
  getNextWindowsOfCurrentScreen()
})
// Previous window in current screen
Key.on('tab', hyperShift, function () {
  getPreviousWindowOfCurrentScreen()
})

// Resize window to left half of screen
Key.on('left', hyperShift, function () {
  layoutWindow(0, 0, 0.5, 1)
})
// Resize window to right half of screen
Key.on('right', hyperShift, function () {
  layoutWindow(0.5, 0, 0.5, 1)
})
// Resize window to top half of screen
Key.on('up', hyperShift, function () {
  layoutWindow(0, 0, 1, 0.5)
})
// Resize window to bottom half of screen
Key.on('down', hyperShift, function () {
  layoutWindow(0, 0.5, 1, 0.5)
})

// Resize window to left percentage of screen
Key.on('[', hyper, function () {
  layoutWindow(0, 0, PERCENT_WIDTH_LEFT, 1)
})
// Resize window to right percentage of screen
Key.on(']', hyper, function () {
  layoutWindow(PERCENT_WIDTH_LEFT, 0, PERCENT_WIDTH_RIGHT, 1)
})
// Resize window to left percentage of screen
Key.on('[', hyperShift, function () {
  layoutWindow(0, 0, PERCENT_WIDTH_RIGHT, 1)
})
// Resize window to right percentage of screen
Key.on(']', hyperShift, function () {
  layoutWindow(PERCENT_WIDTH_RIGHT, 0, PERCENT_WIDTH_LEFT, 1)
})

// Resize window to quarter of screen
Key.on('e', hyper, function () {
  layoutWindow(0, 0, 0.5, 0.5)
})
Key.on('r', hyper, function () {
  layoutWindow(0.5, 0, 0.5, 0.5)
})
Key.on('d', hyper, function () {
  layoutWindow(0, 0.5, 0.5, 0.5)
})
Key.on('f', hyper, function () {
  layoutWindow(0.5, 0.5, 0.5, 0.5)
})

// Center window
Key.on('x', hyper, function () {
  centerCurrentWindow()
})

// Center and resize window
Key.on('x', hyperShift, function () {
  const window = Window.focused()
  if (!window) return
  const frame = window.frame()
  window.setFrame({
    x: frame.x,
    y: frame.y,
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT,
  })
  centerCurrentWindow()
})

Key.on('space', hyperShift, function () {
  centerMouse()
})

// Accidental quit prevention
let lastQuitTimestamp = 0
Key.on('q', ['cmd'], function () {
  const timestamp = Date.now()

  if (timestamp - lastQuitTimestamp <= DOUBLE_KEY_INTERVAL) {
    lastQuitTimestamp = 0
    const app = App.focused()
    if (!app || _.includes(QUIT_BLACKLIST, app.name())) return
    app.terminate()
  } else {
    lastQuitTimestamp = timestamp
  }
})
