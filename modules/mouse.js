/**
 * Mouse functions
 */

function saveMousePositionForWindow(window) {
  if (!window) {
    return
  }
  heartbeatWindow(window)
  var pos = Mouse.location()
  mousePositions[window.hash()] = pos
}

function setMousePositionCenterForWindow(window) {
  var pos = {
    x: window.topLeft().x + window.frame().width / 2,
    y: window.topLeft().y + window.frame().height / 2,
  }
  Mouse.move(pos)
  heartbeatWindow(window)
}

function restoreMousePositionForWindow(window) {
  if (!mousePositions[window.hash()]) {
    setMousePositionCenterForWindow(window)
    return
  }
  var pos = mousePositions[window.hash()]
  var rect = window.frame()
  if (
    pos.x < rect.x ||
    pos.x > rect.x + rect.width ||
    pos.y < rect.y ||
    pos.y > rect.y + rect.height
  ) {
    setMousePositionCenterForWindow(window)
    return
  }
  Mouse.move(pos)
  heartbeatWindow(window)
}

function centerMouse() {
  var window = getCurrentWindow()
  if (!window) return
  setMousePositionCenterForWindow(window)
}