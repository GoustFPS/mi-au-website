//Elementos da DOM

// Input nome do pet
let usernameInput = document.getElementById("usernamePet")
console.log(usernameInput)
let usernameLabel = document.querySelector('label[for="usernamePet"]');
console.log(usernameLabel)
// Input nome do tutor
let inputTutor = document.getElementById("usernameTutor")
console.log(usernameTutor)
let usernameLabelTutor = document.querySelector('label[for="usernameTutor"]');
console.log(usernameLabelTutor)
// Input data
let inputDate = document.getElementById("date")
console.log(inputDate)
let labelDate = document.querySelector('label[for="date"]');
console.log(labelDate)
// Input horário
let inputTime = document.getElementById("time")
console.log(inputTime)
let labelTime = document.querySelector('label[for="time"]');
console.log(labelTime)


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
//Aplicando a função
mostrarPopup(usernameInput, usernameLabel)


    // Validador de telefone
numberInput.addEventListener("change", function(e){
    let valor = e.target.value
    console.log(valor)
    
    if(valor.length < 11){
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
