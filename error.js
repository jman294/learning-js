export function addChar (el, char) {
  if (char === ' ') {
    char = '&middot'
  }
  el.innerHTML = el.innerHTML + char
}

export function removeChar (el, char) {
  el.innerHTML = el.innerHTML.slice(0, -1)
}

export function isEmpty (el) {
  return el.innerText.length <= 0
}
