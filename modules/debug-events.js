/**
 * Debugging Events
 */

if (DEBUG_MODE === true) {
  function dumpWindows(prefix, app) {
    const windows = app.windows().map((win, idx) => `${idx}: ${win.title()}`)
    debugLog(`${prefix} ${app.name()}: ${JSON.stringify(windows)}`)
  }

  // triggered when an app has activated
  Event.on('appDidActivate', app => {
    dumpWindows('appDidActivate', app)
  })

  // triggered when an app has launched
  Event.on('appDidLaunch', app => {
    debugLog(`appDidLaunch ${app.name()}`)
  })

  // triggered when an app has terminated
  Event.on('appDidTerminate', app => {
    debugLog(`appDidTerminate ${app.name()}`)
  })

  // triggered when screens (i.e. displays) are added, removed, or dynamically reconfigured
  Event.on('screensDidChange', () => {
    const frames = Screen.all().map(screen => JSON.stringify(screen.frame()))
    debugLog(`screensDidChange ${frames.join(' ')}`)
  })

  // triggered when the active space has changed
  Event.on('spaceDidChange', () => {
    debugLog(`spaceDidChange ${Space.active().hash()}`)
  })
}
