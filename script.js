const text1 = document.getElementById('text')
const speed1 = document.getElementById('speed')
const text = 'WelCome To INNOMATICS RESEARCH LABS!'
let id = 1
let speed = 300 / speed1.value

function writeText() {
    text1.innerText = text.slice(0,id)//it will used to setes the text in the input
    id++
if (id > text.length) {
        id = 1
    }
   setTimeout(writeText, speed)
}
writeText()
speed1.addEventListener('input', (e) => speed = 300 / e.target.value)//it is used for increase the input values
 





