//identificar o elemento
let cursor = document.querySelector('.cursor')

//capturar a posição do mouse na tela
document.addEventListener('mousemove', function(e) {
    let xPos = e.pageX 
    let yPos = e.pageY 

    cursor.style.left = xPos + 'px'
    cursor.style.top = yPos + 'px'

})
