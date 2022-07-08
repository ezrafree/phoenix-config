/**
 * Space functions
 */

function moveToSpace(window, space, destSpace) {
  if (!window || !space || !destSpace) return

  destSpace.moveWindows([window])

  window.focus()
}

function moveToNextSpace() {
  var window = getCurrentWindow()
  if (!window) return

  Phoenix.log('window:', window)

  const activeSpaceScreenHashes = Space.active()
    .screens()
    .map(screen => screen.hash())

  const nextSpaceScreenHashes = Space.active()
    .next()
    .screens()
    .map(screen => screen.hash())

  if (activeSpaceScreenHashes.some(hash => hash === nextSpaceScreenHashes[0])) {
    if (Space.active() !== Space.active().next()) {
      moveToSpace(window, Space.active(), Space.active().next())
    }
  } else {
    // go to first space on this screen
    const screenSpaces = Screen.main()
      .spaces()
      .map(space => space.hash())
    const firstSpace = screenSpaces[0]

    Space.all().map(space =>
      space.hash() === firstSpace ? space.moveWindows([window]) : false
    )
  }

  restoreMousePositionForWindow(window)
  window.focus()
}

function moveToPreviousSpace() {
  var window = getCurrentWindow()
  if (!window) return

  const activeSpaceScreenHashes = Space.active()
    .screens()
    .map(screen => screen.hash())

  const previousSpaceScreenHashes = Space.active()
    .previous()
    .screens()
    .map(screen => screen.hash())

  if (
    activeSpaceScreenHashes.some(hash => hash === previousSpaceScreenHashes[0])
  ) {
    if (Space.active() !== Space.active().previous()) {
      moveToSpace(window, Space.active(), Space.active().previous())
    }
  } else {
    // go to last space on this screen
    const screenSpaces = Screen.main()
      .spaces()
      .map(space => space.hash())

    const lastSpace = Math.max(...screenSpaces)

    Space.all().map(space =>
      space.hash() === lastSpace ? space.moveWindows([window]) : false
    )
  }

  restoreMousePositionForWindow(window)
  window.focus()
}
