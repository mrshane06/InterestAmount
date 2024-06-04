let input1 =  document.querySelector('#principal')
let input2 =  document.querySelector('#interest')
let button =  document.querySelector('button')
let answer =  document.querySelector('#answer')

button.addEventListener('click',()=>{
    answer.innerText = ('Answer: ' + (eval(`${principal.value} * ${interest.value} /100 `).toFixed(2)))
})