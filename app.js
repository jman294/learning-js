import * as watcher from './keywatcher'
import * as err from './errormanipulation'

const text = 'This is some text'
const input = 'INPUT_ELEMENT_HERE'
watcher.watch(input, text).then(function correctKey (key) {

}, function incorrectKey (key) {

})
document.write('hello')