import * as watcher from './keywatcher'
import * as err from './error'
import * as keycoder from 'keycoder'


const text = 'The year of our Potterhead 2016 might just be the most magical year to date, thanks to the release of the script version of Harry Potter and the Cursed Child on July 31 and the anticipated release of the movie Fantastic Beasts and Where to Find Themon November 18. Now that J.K. Rowling has kept the party going with her release of new Harry Potter short stories on Pottermore, you are probably desperate to '
const input = document.querySelector('#type-input')
const error = document.querySelector('#error')

var index = 0

document.querySelector('#type-input').innerText = text

watcher.watch(input, 
  function onKeyEvent (e) {
    var char = keycoder.eventToCharacter(e)
    console.log(char)
    if (char == text.charAt(index)) {
      console.log('correct')
      index++
    } else {
      err.addChar(error, char)
      console.log('incorrect')
    }
  }, 
  function onDelete (e) {
    if (!err.isEmpty(error)) {
      err.removeChar(error)
    } else {
      index--
    }
  }
)