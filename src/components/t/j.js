const text = document.querySelector('.text')
// console.log(text);

text.innerHTML = text.innerHTML.split('').map(
    (char , i)=>
    `<span>${char}</span>`
)