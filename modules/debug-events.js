/**
 * Debugging Events
 */

if (DEBUG_MODE === true) {
  function dumpWindows(prefix, app) {
    const windows = app
      .windows()
      .map((win, idx, all) => `${idx}: ${win.title()}`)
    Phoenix.log(`DEBUG ${prefix} ${app.name()}: ${JSON.stringify(windows)}`)
  }

  // triggered when an app has activated
  Event.on('appDidActivate', (app, win) => {
    dumpWindows('ACTIVATE', JSON.stringify(app, null, 2))
  })

  // triggered when an app has launched
  Event.on('appDidLaunch', (app, win) => {
    Phoenix.log('appDidLaunch', JSON.stringify(app, null, 2))
  })

  // triggered when an app has terminated
  Event.on('appDidTerminate', (app, win) => {
    Phoenix.log('appDidTerminate', JSON.stringify(app, null, 2))
  })

  // triggered when screens (i.e. displays) are added, removed, or dynamically reconfigured
  Event.on('screensDidChange', screens => {
    Phoenix.log('screensDidChange', typeof screens)
  })

  // triggered when the active space has changed
  Event.on('spaceDidChange', spaces => {
    Phoenix.log('spaceDidChange', spaces)
  })
}