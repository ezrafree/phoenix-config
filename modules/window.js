/**
 * Window functions
 */

function heartbeatWindow(window) {
  activeWindowsTimes[window.app().pid] = new Date().getTime() / 1000
}

function maximizeCurrentWindow() {
  var window = getCurrentWindow()
  if (!window) return

  window.maximize()
  heartbeatWindow(window)
}

function getResizeFrame(frame, ratio) {
  return {
    x: Math.round(frame.x + (frame.width / 2) * (1 - ratio)),
    y: Math.round(frame.y + (frame.height / 2) * (1 - ratio)),
    width: Math.round(frame.width * ratio),
    height: Math.round(frame.height * ratio),
  }
}

function getSmallerFrame(frame) {
  return getResizeFrame(frame, 0.9)
}

function getLargerFrame(frame) {
  return getResizeFrame(frame, 1.1)
}

function adapterScreenFrame(windowFrame, screenFrame) {
  return {
    x: Math.max(screenFrame.x, windowFrame.x),
    y: Math.max(screenFrame.y, windowFrame.y),
    width: Math.min(screenFrame.width, windowFrame.width),
    height: Math.min(screenFrame.height, windowFrame.height),
  }
}

function fitScreenHeight() {
  var window = getCurrentWindow()
  if (!window) return

  window.setFrame({
    x: window.frame().x,
    y: window.screen().flippedVisibleFrame().y,
    width: window.frame().width,
    height: window.screen().flippedVisibleFrame().height,
  })
  heartbeatWindow(window)
}

function fitScreenWidth() {
  var window = getCurrentWindow()
  if (!window) return

  window.setFrame({
    x: window.screen().flippedVisibleFrame().x,
    y: window.frame().y,
    width: window.screen().flippedVisibleFrame().width,
    height: window.frame().height,
  })
  heartbeatWindow(window)
}

function smallerCurrentWindow() {
  var window = getCurrentWindow()
  var screenFrame = window.screen().flippedVisibleFrame()
  if (!window) return

  var originFrame = window.frame()
  var frame = getSmallerFrame(originFrame)
  window.setFrame(adapterScreenFrame(frame, screenFrame))
}

function largerCurrentWindow() {
  var window = getCurrentWindow()
  var screenFrame = window.screen().flippedVisibleFrame()
  if (!window) return

  var originFrame = window.frame()
  var frame = getLargerFrame(originFrame)
  window.setFrame(adapterScreenFrame(frame, screenFrame))
}

function centerCurrentWindow() {
  var window = getCurrentWindow()
  if (!window) return

  setWindowCentral(window)
}

function setWindowCentral(window) {
  window.setTopLeft({
    x:
      (window.screen().flippedVisibleFrame().width - window.size().width) / 2 +
      window.screen().flippedVisibleFrame().x,
    y:
      (window.screen().flippedVisibleFrame().height - window.size().height) /
        2 +
      window.screen().flippedVisibleFrame().y,
  })
  heartbeatWindow(window)
}

function moveCurrentWindow(x, y) {
  var window = getCurrentWindow()
  if (!window) return

  window.setFrame({
    x: window.frame().x + x,
    y: window.frame().y + y,
    width: window.frame().width,
    height: window.frame().height,
  })
  heartbeatWindow(window)
}

function getAnotherWindowOfCurrentScreen(window, offset) {
  var windows = window.others({ visible: true, screen: window.screen() })
  windows.push(window)
  // var screen = window.screen()
  windows = _.chain(windows)
    .sortBy(function (window) {
      return window.app().pid + '-' + window.hash()
    })
    .value()

  var index =
    (_.indexOf(windows, window) + offset + windows.length) % windows.length
  return windows[index]
}

function getPreviousWindowOfCurrentScreen() {
  var window = getCurrentWindow()
  if (!window) {
    if (Window.recent().length === 0) return
    Window.recent()[0].focus()
    return
  }
  saveMousePositionForWindow(window)
  var targetWindow = getAnotherWindowOfCurrentScreen(window, -1)
  if (!targetWindow) {
    return
  }
  targetWindow.focus()
  restoreMousePositionForWindow(targetWindow)
}

function getNextWindowsOfCurrentScreen() {
  var window = getCurrentWindow()
  if (!window) {
    if (Window.recent().length === 0) return
    Window.recent()[0].focus()
    return
  }
  saveMousePositionForWindow(window)
  var targetWindow = getAnotherWindowOfCurrentScreen(window, 1)
  if (!targetWindow) {
    return
  }
  targetWindow.focus()
  restoreMousePositionForWindow(targetWindow)
}

function layoutWindow(xRatio, yRatio, widthRatio, heightRatio) {
  var window = getCurrentWindow()
  if (!window) return

  var screenFrame = window.screen().flippedVisibleFrame()
  var screenWidth = screenFrame.width
  var screenHeight = screenFrame.height

  window.setFrame({
    x: screenFrame.x + screenWidth * xRatio,
    y: screenFrame.y + screenHeight * yRatio,
    width: screenWidth * widthRatio,
    height: screenHeight * heightRatio,
  })
}
