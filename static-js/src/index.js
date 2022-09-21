import './styles.css'
import { variable } from '@/findme'

const body = document.body

const div = document.createElement("div")
div.textContent = "Hello World"

const divInput = document.createElement("div")
const label = document.createElement("label")
const input = document.createElement("input")
const output = document.createElement("div")
const span = document.createElement("span")
const takeALook = document.createElement("div")
output.textContent = "Output: "
output.append(span)
takeALook.innerHTML = "<br>Also take a look at the console to see the demonstration of <i>resolve alias</i>"

divInput.append(label)
divInput.append(input)
divInput.append(output)
label.textContent = "Type any text: "
label.setAttribute("for", "text")
input.id = "text"

input.oninput = () => span.textContent = input.value

body.append(div)
body.append(document.createElement("br"))
body.append(divInput)
body.append(takeALook)

console.log(variable)
