/**
 * Space functions
 */

function moveToSpace(window, space, destSpace) {
  if (!window || !space || !destSpace) return

  destSpace.moveWindows([window])

  window.focus()
}
