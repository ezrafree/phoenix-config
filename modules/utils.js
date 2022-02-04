/**
 * Utils functions
 */

function alert(message) {
  var modal = new Modal()
  modal.text = message
  modal.origin = (0, 0)
  modal.duration = 2
  modal.show()
}

if (!String.format) {
  String.format = function (format) {
    var args = Array.prototype.slice.call(arguments, 1)
    return format.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] !== 'undefined' ? args[number] : match
    })
  }
}

function sortByMostRecent(windows) {
  var visibleAppMostRecentFirst = _.map(Window.recent(), function (w) {
    return w.hash()
  })
  var visibleAppMostRecentFirstWithWeight = _.zipObject(
    visibleAppMostRecentFirst,
    _.range(visibleAppMostRecentFirst.length)
  )
  return _.sortBy(windows, function (window) {
    return visibleAppMostRecentFirstWithWeight[window.hash()]
  })
}
