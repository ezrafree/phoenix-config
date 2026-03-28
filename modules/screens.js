/**
 * Screen functions
 */

function moveToScreen(window, screen) {
  if (!window) return
  if (!screen) return

  var frame = window.frame()
  var oldScreenRect = window.screen().flippedVisibleFrame()
  var newScreenRect = screen.flippedVisibleFrame()

  var xRatio = newScreenRect.width / oldScreenRect.width
  var yRatio = newScreenRect.height / oldScreenRect.height

  var mid_pos_x = frame.x + Math.floor(0.5 * frame.width)
  var mid_pos_y = frame.y + Math.floor(0.5 * frame.height)

  var xFrame =
    (mid_pos_x - oldScreenRect.x) * xRatio + newScreenRect.x - 0.5 * frame.width
  var yFrame =
    (mid_pos_y - oldScreenRect.y) * yRatio +
    newScreenRect.y -
    0.5 * frame.height

  window.setFrame({
    x: xFrame,
    y: yFrame,
    width: frame.width,
    height: frame.height,
  })

  if (
    oldScreenRect.width === frame.width &&
    oldScreenRect.height === frame.height
  ) {
    maximizeCurrentWindow()
    return
  }

  if (
    oldScreenRect.width > newScreenRect.width &&
    oldScreenRect.width === frame.width
  ) {
    fitScreenWidth()
    return
  }
  if (
    oldScreenRect.height > newScreenRect.height &&
    oldScreenRect.height === frame.height
  ) {
    fitScreenHeight()
    return
  }

  if (
    newScreenRect.width > oldScreenRect.width &&
    oldScreenRect.width === frame.width
  ) {
    fitScreenWidth()
    return
  }
  if (
    newScreenRect.height > oldScreenRect.height &&
    oldScreenRect.height === frame.height
  ) {
    fitScreenHeight()
    return
  }
}

function getCurrentWindow() {
  var window = Window.focused()
  if (!window) {
    window = App.focused().mainWindow()
  }
  if (!window) return
  return window
}

function focusAnotherScreen(window, targetScreen) {
  if (!window) return
  if (window.screen() === targetScreen) return

  saveMousePositionForWindow(window)
  var targetScreenWindows = sortByMostRecent(targetScreen.windows())
  if (targetScreenWindows.length === 0) {
    return
  }
  var targetWindow = targetScreenWindows[0]
  targetWindow.focus() // bug, two window in two space, focus will focus in same space first
  restoreMousePositionForWindow(targetWindow)
}

function getScreensSortedByX() {
  return Screen.all().sort((a, b) => a.flippedVisibleFrame().x - b.flippedVisibleFrame().x)
}

function focusOnNextScreen() {
  var window = getCurrentWindow()
  if (!window) return

  var screens = getScreensSortedByX()
  var currentIndex = screens.findIndex(s => s === window.screen())
  var targetScreen = screens[(currentIndex + 1) % screens.length]

  focusAnotherScreen(window, targetScreen)
}

function focusOnPreviousScreen() {
  var window = getCurrentWindow()
  if (!window) return

  var screens = getScreensSortedByX()
  var currentIndex = screens.findIndex(s => s === window.screen())
  var targetScreen = screens[(currentIndex - 1 + screens.length) % screens.length]

  focusAnotherScreen(window, targetScreen)
}

function moveToNextScreen() {
  var window = getCurrentWindow()
  if (!window) return

  var screens = getScreensSortedByX()
  if (screens.length === 1) {
    if (Space.active() !== Space.active().next()) {
      moveToSpace(window, Space.active(), Space.active().next())
    }
    return
  }

  var currentIndex = screens.findIndex(s => s === window.screen())
  var nextScreen = screens[(currentIndex + 1) % screens.length]
  moveToScreen(window, nextScreen)
  restoreMousePositionForWindow(window)
  window.focus()
}

function moveToPreviousScreen() {
  var window = getCurrentWindow()
  if (!window) return

  var screens = getScreensSortedByX()
  if (screens.length === 1) {
    if (Space.active() !== Space.active().previous()) {
      moveToSpace(window, Space.active(), Space.active().previous())
    }
    return
  }

  var currentIndex = screens.findIndex(s => s === window.screen())
  var prevScreen = screens[(currentIndex - 1 + screens.length) % screens.length]
  moveToScreen(window, prevScreen)
  restoreMousePositionForWindow(window)
  window.focus()
}
