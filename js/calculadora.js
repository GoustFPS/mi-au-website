//IMC DATA//
const data = [
    {
      min: 0,
      max: 11.7,
      classification: "Menor que 11,7",
      info: "Abaixo do peso",
      obesity: "0",
    },
    {
      min: 11.8,
      max: 15.0,
      classification: "Entre 11,8 e 15,0",
      info: "Normal",
      obesity: "0",
    },
    {
      min: 15.1,
      max: 18.6,
      classification: "Entre 15,1 e 18,6",
      info: "Acima do Peso",
      obesity: "I",
    },
    {
      min: 18.7,
      max: 39.9,
      classification: "Acima de 18,7",
      info: "Obeso",
      obesity: "II",
    },
    
  ];

  // Seleção de elementos

  const imcTable = document.querySelector("#imc-table");

  const heightInput = document.querySelector("#height");
  const weightInput = document.querySelector("#weight");
  const calcBtn = document.querySelector("#calc-btn");
  const clearBtn = document.querySelector("#clear-btn");

  const calcContainer = document.querySelector("#calc-container");
  const resultContainer = document.querySelector("#result-container");
  
  const imcNumber = document.querySelector("#imc-number span");
  const imcInfo = document.querySelector("#imc-info span");

  const backBtn = document.querySelector("#back-btn");




  //Funções
  //função que cria a tabela percorrendo cada item: linha e coluna da tabela;
  function createTable(data) {
       data.forEach((item) => {
           const div = document.createElement("div");
           div.classList.add("table-data");

           const classification = document.createElement("p");
           classification.innerText = item.classification;

           const info = document.createElement("p");
           info.innerText = item.info;

           const obesity = document.createElement("p");
           obesity.innerText = item.obesity;

           div.appendChild(classification);
           div.appendChild(info);
           div.appendChild(obesity); 
           
           imcTable.appendChild(div);

       });    
  }
  
  //função de limpeza de valores;
  function cleanIputs()  {
    heightInput.value = "";
    weightInput.value = "";
    imcNumber.className = "";
    imcInfo.className = "";
  }
  
  //controle da entrada de usuário, aceitando somente números;
  function validDigits(text) {
    return text.replace(/[^0-9,]/g, "");
  }
  
  //calculando o imc e gerando um valor com uma casa decimal;
  function calcImc(height, weight) {
    const imc = (weight / (height ** -2 )).toFixed(1);
    return imc;
  }
  // mostrando resultados;
  function showOrHideResults() {
    calcContainer.classList.toggle("hide");
    resultContainer.classList.toggle("hide");
  }

  // Inicialização
  createTable(data);


  // Eventos:

  // evento para detectar modificações no input
  [heightInput, weightInput].forEach((el) => {
    el.addEventListener("input", (e) => {
      const updatedValue = validDigits(e.target.value);
  
      e.target.value = updatedValue;
    });
  });

  //cálculo
  calcBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // conversão de vírgulas em ponto e texto em tipo número
    const weight = +weightInput.value.replace(",", ".")
    const height = +heightInput.value.replace(",", ".")

    if (!weight || !height) return;
    
    const imc = calcImc(height, weight);
    
    let info

    data.forEach((item) => {
      if (imc >= item.min && imc <= item.max) {
        info = item.info;
      }
    });   

    if (!info) return;

    imcNumber.innerText = imc;
    imcInfo.innerText = info;
    
    //exibindo feedback ao usuário em cores
    switch (info) {
      case "Abaixo do peso":
        imcNumber.classList.add("medium");
        imcInfo.classList.add("medium");
        break;
      case "Normal":
        imcNumber.classList.add("good");
        imcInfo.classList.add("good");
        break;
      case "Acima do Peso":
        imcNumber.classList.add("low");
        imcInfo.classList.add("low");
        break;
      case "Obeso":
        imcNumber.classList.add("high");
        imcInfo.classList.add("high");
        break;
      
    }
  

    showOrHideResults();


  })

  //evento de limpeza de imputs
  clearBtn.addEventListener("click", (e) => {
    e.preventDefault(); 

    cleanIputs();
  });
  //botão de voltar para o início;
  backBtn.addEventListener("click", () => {
    cleanIputs();
    showOrHideResults();
  });
  

  