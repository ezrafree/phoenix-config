/**
 * App functions
 */

// switch app, and remember mouse position
function callApp(appName) {
  var window = getCurrentWindow()
  if (window) {
    saveMousePositionForWindow(window)
  }

  // fixes a bug where firefox always starts in troubleshoot mode
  if (appName === 'Firefox') {
    Task.run('/usr/bin/open', ['-a Firefox'])
  }

  Timer.after(0.5, function () {
    const app = App.launch(appName, { focus: true })

    var newWindow = app.mainWindow()

    if (newWindow && window.hash() !== newWindow.hash()) {
      restoreMousePositionForWindow(newWindow)
    }
  })
}
