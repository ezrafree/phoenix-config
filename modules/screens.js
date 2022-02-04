/**
 * Screen functions
 */

function moveToScreen(window, screen, vertical = false) {
  if (!window) return
  if (!screen) return

  var frame = window.frame()
  var oldScreenRect = window.screen().flippedVisibleFrame()
  var testNewScreenRect = screen.flippedVisibleFrame()
  let builtInScreen

  const sizes = Screen.all().map(s => s.flippedVisibleFrame())

  let screenAfterBuiltIn, screenBeforeBuiltIn, newScreenRect

  // loop through all screens and save a list of the external monitors
  const externalScreens = sizes
    .reduce((acc, val, index) => {
      // screen after built-in display
      if (
        sizes[index === 0 ? sizes.length - 1 : index - 1] &&
        BUILTIN_DISPLAY_WIDTH ===
          sizes[index === 0 ? sizes.length - 1 : index - 1].width
      ) {
        screenAfterBuiltIn = val
      }

      // screen before built-in display
      if (
        sizes[index === sizes.length - 1 ? 0 : index + 1] &&
        BUILTIN_DISPLAY_WIDTH ===
          sizes[index === sizes.length - 1 ? 0 : index + 1].width
      ) {
        screenBeforeBuiltIn = val
      }

      // this is the built-in display
      if (BUILTIN_DISPLAY_WIDTH === val.width) {
        builtInScreen = val
      }

      if (EXTERNAL_DISPLAY_WIDTH === val.width) acc.push(val)
      return acc
    }, [])
    .sort((a, b) => (a.x > b.x ? 1 : -1))

  const mainExternalScreen =
    externalScreens.length === 3 ? externalScreens[1] : externalScreens[0]

  const newScreenIsBuiltInDisplay =
    testNewScreenRect.width === BUILTIN_DISPLAY_WIDTH
  const oldScreenIsBuiltIn = builtInScreen ? oldScreenRect.x === builtInScreen.x : null
  const oldScreenIsBeforeBuiltIn = screenBeforeBuiltIn ? oldScreenRect.x === screenBeforeBuiltIn.x : null
  const oldScreenIsAfterBuiltIn = screenAfterBuiltIn ? oldScreenRect.x === screenAfterBuiltIn.x : null

  if (DEBUG_MODE === true) {
    Phoenix.log('--------------------------------------------------')
    sizes.map(size => Phoenix.log(`size: ${size.width}/${size.x}`))
    externalScreens.map(screen =>
      Phoenix.log(`externalScreen: ${screen.width}/${screen.x}`)
    )
    Phoenix.log('--------------------------------------------------')
    Phoenix.log(`oldScreenIsBuiltIn: ${oldScreenIsBuiltIn}`)
    Phoenix.log(`oldScreenIsBeforeBuiltIn: ${oldScreenIsBeforeBuiltIn}`)
    Phoenix.log(`oldScreenIsAfterBuiltIn: ${oldScreenIsAfterBuiltIn}`)
    Phoenix.log(`newScreenIsBuiltInDisplay: ${newScreenIsBuiltInDisplay}`)
    Phoenix.log(`builtInScreen: ${builtInScreen.width}/${builtInScreen.x}`)
    Phoenix.log(
      `screenBeforeBuiltIn: ${screenBeforeBuiltIn.width}/${screenBeforeBuiltIn.x}`
    )
    Phoenix.log(
      `screenAfterBuiltIn: ${screenAfterBuiltIn.width}/${screenAfterBuiltIn.x}`
    )
    Phoenix.log(`oldScreenRect: ${oldScreenRect.width}/${oldScreenRect.x}`)
    Phoenix.log(
      `testNewScreenRect: ${testNewScreenRect.width}/${testNewScreenRect.x}`
    )
    Phoenix.log(
      `mainExternalScreen: ${mainExternalScreen.width}/${mainExternalScreen.x}`
    )
  }

  if (builtInScreen && SKIP_BUILTIN_DISPLAY && vertical !== true) {
    if (newScreenIsBuiltInDisplay && oldScreenIsBeforeBuiltIn) {
      newScreenRect = screen.next().flippedVisibleFrame()
    } else if (newScreenIsBuiltInDisplay && oldScreenIsAfterBuiltIn) {
      newScreenRect = screen.previous().flippedVisibleFrame()
    } else {
      newScreenRect = screen.flippedVisibleFrame()
    }
  } else {
    newScreenRect = screen.flippedVisibleFrame()
    if (builtInScreen && vertical === true) {
      newScreenRect = oldScreenIsBuiltIn ? mainExternalScreen : builtInScreen
    }
  }

  if (SKIP_BUILTIN_DISPLAY && DEBUG_MODE === true) {
    Phoenix.log(`newScreenRect: ${newScreenRect.width}/${newScreenRect.x}`)
  }

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

function focusOnNextScreen() {
  var window = getCurrentWindow()
  if (!window) return

  var currentScreen = window.screen()
  if (!currentScreen) return
  var targetScreen = currentScreen.next()

  focusAnotherScreen(window, targetScreen)
}

function focusOnPreviousScreen() {
  var window = getCurrentWindow()
  if (!window) return

  var currentScreen = window.screen()
  if (!currentScreen) return
  var targetScreen = currentScreen.previous()

  focusAnotherScreen(window, targetScreen)
}

function moveToNextScreen() {
  var window = getCurrentWindow()
  if (!window) return

  if (window.screen() === window.screen().next()) {
    if (Space.active() !== Space.active().next()) {
      moveToSpace(window, Space.active(), Space.active().next())
    }
    return
  }

  moveToScreen(window, window.screen().next(), false)
  restoreMousePositionForWindow(window)
  window.focus()
}

function moveToPreviousScreen() {
  var window = getCurrentWindow()
  if (!window) return

  if (window.screen() === window.screen().previous()) {
    if (Space.active() !== Space.active().previous()) {
      moveToSpace(window, Space.active(), Space.active().previous())
    }
    return
  }

  moveToScreen(window, window.screen().previous(), false)
  restoreMousePositionForWindow(window)
  window.focus()
}

function moveToAllNextScreens() {
  var window = getCurrentWindow()
  if (!window) return

  if (window.screen() === window.screen().next()) return
  moveToScreen(window, window.screen().next(), true)
  restoreMousePositionForWindow(window)
  window.focus()
}

function moveToAllPreviousScreens() {
  var window = getCurrentWindow()
  if (!window) return

  if (window.screen() === window.screen().next()) return
  moveToScreen(window, window.screen().next(), true)
  restoreMousePositionForWindow(window)
  window.focus()
}
