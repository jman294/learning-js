const input = null

export function addChar (el, char) {
  el.innerText = el.innerText + char
}

export function removeChar (el, char) {
  el.innerText = el.innerText.slice(0, -1)
}
