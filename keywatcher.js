export function watch (el, keyEvent, deleteEvent) {
  el.addEventListener('keypress', function onKeyPress (e) {
    keyEvent(e)
    e.preventDefault()
  })
  el.addEventListener('keydown', function onKeyDown (e) {
    console.log('keydown')
    if (e.keyCode === 8 || e.keyCode === 46) {
      deleteEvent(e)
      e.preventDefault()
      console.log('delete')
    }
  })
  el.addEventListener('paste', function onPaste (e) {
    e.preventDefault()
  })
}
