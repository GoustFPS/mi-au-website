let form = document.querySelector('form');
console.log(form)
let numberInput = document.getElementById('number');
console.log(numberInput)

function mostrarPopup(input, label){
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", function(){
        label.classList.add("required-popup")
    })
    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", function(){
        label.classList.remove("required-popup")
})
} 

    // Validador de telefone
numberInput.addEventListener("change", function(e){
    let valor = e.target.value
    console.log(valor)
    
    if(valor.length < 10){
        //Estilos dinamicos caso o valor não seja válido
        numberInput.classList.remove("correct")
        numberInput.classList.add("error")
        numberHelper.innerText = "Seu username deve ter mais que 10 caracteres"
        numberHelper.classList.add("visible")
    } else {
        //Estilos dinamicos caso o valor seja válido
        numberInput.classList.add("correct")
        numberHelper.classList.remove("visible")
        numberInput.classList.remove("error")
    }
})
