
//botão de proximo e volta da justificativa de ponto
let justPonto = document.getElementById("justPonto");
let justPonto2 = document.getElementById("justPonto2");
let justPonto3 = document.getElementById("justPonto3");

let butaoPonto = document.getElementById("butaoPonto");
let button0 = document.getElementById("button0");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");
let overlay = document.getElementById("overlay")
let title =  document.getElementById("title")

button0.onclick = function (e) {
    e.preventDefault();

    justPonto.style.left = "450px"
    title.innerHTML= "Por favor escolha uma opção."
    menu.style.left = "5px"

}

butaoPonto.onclick = function (e) {
    e.preventDefault();
    menu.style.left = "-450px"
    title.innerHTML= "Justificativa do ponto"
    justPonto.style.left = "5px"
  }

button1.onclick = function (e) {
    e.preventDefault()
    justPonto.style.left = "-450px"
    justPonto2.style.left = "5px"


}

button3.onclick = function (e) {
    e.preventDefault()

    justPonto2.style.left = "-450px"
    justPonto3.style.left = "5px"


}

button2.onclick = function (e) {
    e.preventDefault();

    justPonto.style.left = "5px"
    justPonto2.style.left = "450px"

}

button4.onclick = function (e) {
    e.preventDefault();

    justPonto2.style.left = "5px"
    justPonto3.style.left = "450px"
}




//sobre a justificativa de ponto
const justPontoHTML = document.getElementById("justPonto")
const matriculaPonto = document.getElementById("POST-matriculaPonto");
const nomePonto = document.getElementById("POST-nomePonto");
const emailPonto = document.getElementById("POST-emailPonto")
const entrada = document.getElementById("POST-entrada");
const saida = document.getElementById("POST-saida");
const descricao = document.getElementById("POST-descricao");
const dataJust = document.getElementById("POST-dataJust");
const motivoPonto = document.getElementById("POST-motivoPonto");
const hExtras = document.getElementById("POST-hExtras");
const observacao = document.getElementById("POST-observacao");
const areaAtuacao = document.getElementById("POST-areaAtuacaoPonto");
const setorPonto = document.getElementById("POST-setorPonto");


// add no cache  e fetch para envio do banco


button5.onclick = function (e) {
    e.preventDefault();

    const mPonto = matriculaPonto.value
    const nPonto = nomePonto.value
    const emailP = emailPonto.value
    const aTPonto = areaAtuacao.value
    const sPonto = setorPonto.value
    const dataPonto = dataJust.value
    const entraPonto = entrada.value
    const saiPonto = saida.value
    const motivPonto = motivoPonto.value
    const descriPonto = descricao.value
    const horaPonto = hExtras.value
    const obsPonto = observacao.value

    localStorage.setItem('matriculaP', `${mPonto}`)
    localStorage.setItem('nomeP', `${nPonto}`)
    localStorage.setItem('emailP', `${emailP}`)
    localStorage.setItem('areaPonto', `${aTPonto}`)
    localStorage.setItem('setorPonto', `${sPonto}`)

    localStorage.setItem('dataP', `${dataPonto}`)
    localStorage.setItem('entraP', `${entraPonto}`)
    localStorage.setItem('saiP', `${saiPonto}`)

    localStorage.setItem('motivP', `${motivPonto}`)
    localStorage.setItem('descriP', `${descriPonto}`)
    localStorage.setItem('horaP', `${horaPonto}`)
    localStorage.setItem('obsP', `${obsPonto}`)


    const matP = localStorage.getItem('matriculaP')
    const nomP = localStorage.getItem('nomeP')
    const eP = localStorage.getItem('emailP')
    const areP = localStorage.getItem('areaPonto')
    const setP = localStorage.getItem('setorPonto')
    const dateP = localStorage.getItem('dataP')
    const entP = localStorage.getItem('entraP')
    const sP = localStorage.getItem('saiP')
    const motP = localStorage.getItem('motivP')
    const desP = localStorage.getItem('descriP')
    const hrP = localStorage.getItem('horaP')
    const obP = localStorage.getItem('obsP')



    fetch("http://localhost:3000/justPonto", {
        method: 'POST',
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            matriculaPonto: matP,
            nomePonto: nomP,
            emailPonto: eP,
            areaAtuacao: areP,
            setorPonto: setP,
            dataJust: dateP,
            entrada: entP,
            saida: sP,
            motivoPonto: motP,
            descricao: desP,
            hExtras: hrP,
            observacao: obP,
            aprovado: ""
        }),
    })
    overlay.style.display = "block";

    setTimeout(function () {
      overlay.style.display = "none";

    matriculaPonto.value = ""
    nomePonto.value = ""
    emailPonto.value = ""
    areaAtuacao.value = ""
    setorPonto.value = ""
    dataJust.value = ""
    entrada.value = ""
    saida.value = ""
    motivoPonto.value = ""
    descricao.value = ""
    hExtras.value = ""
    observacao.value = ""

    title.innerHTML= "Por favor escolha uma opção."
    justPonto.style.left = "450px"
    justPonto2.style.left = "450px"
    justPonto3.style.left = "450px"
    menu.style.left ="5px"

  }, 3000);

}




//botão de proximo e volta das ferias
let justFerias = document.getElementById("justFerias");
let justFerias2 = document.getElementById("justFerias2");
let menu = document.getElementById("menu");

let butaoFerias = document.getElementById("butaoFerias");
let button6 = document.getElementById("button6");
let button7 = document.getElementById("button7");
let button8 = document.getElementById("button8");
let button9 = document.getElementById("button9");


button6.onclick = function (e) {
  e.preventDefault();
  justFerias.style.left = "450px"
  title.innerHTML= "Por favor escolha uma opção."
  menu.style.left = "5px"
}
butaoFerias.onclick = function (e) {
  e.preventDefault();

  menu.style.left = "-450px"
  title.innerHTML= "Solicitação de ferias"
  justFerias.style.left = "5px"
}
button7.onclick = function (e) {
  e.preventDefault();

  justFerias.style.left = "-450px"
  justFerias2.style.left = "5px"

}
button8.onclick = function (e) {
  e.preventDefault();

  justFerias.style.left = "5px"
  justFerias2.style.left = "450px"
}


//sobre a justificativa de ferias

const matriculaFerias = document.getElementById("POST-MatriculaFerias");
const nomeFerias = document.getElementById("POST-nomeFerias");
const emailFerias = document.getElementById("POST-emailFerias")
const areaAtuacaoFerias = document.getElementById("POST-areaAtuacaoFerias");
const setorFerias = document.getElementById("POST-setorFerias");
const dataInicio = document.getElementById("POST-dataInicio");
const dataFim = document.getElementById("POST-dataFim");
const motivoFerias = document.getElementById("POST-motivoFerias");
const tempoTotal = document.getElementById("POST-tempoTotal");

// add no cache  e fetch para envio do banco

button9.onclick = function (e) {
  e.preventDefault();


  const mFerias = matriculaFerias.value
  const nFerias = nomeFerias.value
  const eFerias = emailFerias.value
  const aTFerias = areaAtuacaoFerias.value
  const sFerias = setorFerias.value
  const inicioFerias = dataInicio.value
  const fimFerias = dataFim.value
  const motivFerias = motivoFerias.value
  const tempoFerias = tempoTotal.value

  localStorage.setItem('matriculaF', `${mFerias}`)
  localStorage.setItem('nomeF', `${nFerias}`)
  localStorage.setItem('eFerias', `${eFerias}`)
  localStorage.setItem('areaFerias', `${aTFerias}`)
  localStorage.setItem('setorFerias', `${sFerias}`)
  localStorage.setItem('inicioF', `${inicioFerias}`)
  localStorage.setItem('fimF', `${fimFerias}`)
  localStorage.setItem('motivoF', `${motivFerias}`)
  localStorage.setItem('tempoF', `${tempoFerias}`)




  const matF = localStorage.getItem('matriculaF')
  const nomF = localStorage.getItem('nomeF')
  const emailF = localStorage.getItem('eFerias')
  const areF = localStorage.getItem('areaFerias')
  const setF = localStorage.getItem('setorFerias')
  const inF = localStorage.getItem('inicioF')
  const saiF = localStorage.getItem('fimF')
  const motivF = localStorage.getItem('motivoF')
  const tempF = localStorage.getItem('tempoF')

  fetch("http://localhost:3000/justFerias", {
    method: 'POST',
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      matriculaFerias: matF,
      nomeFerias: nomF,
      emailFerias: emailF,
      areaAtuacaoFerias: areF,
      setorFerias: setF,
      dataInicio: inF,
      dataFim: saiF,
      motivoFerias: motivF,
      tempoTotal: tempF,
      aprovado: ""
    }),
  })			
  overlay.style.display = "block";

  setTimeout(function () {
    overlay.style.display = "none";


  matriculaFerias.value = ""
  nomeFerias.value = ""
  emailFerias.value = ""
  areaAtuacaoFerias.value = ""
  setorFerias.value = ""
  dataInicio.value = ""
  dataFim.value = ""
  motivoFerias.value = ""
  tempoTotal.value = ""

  title.innerHTML= "Por favor escolha uma opção."
  
  justFerias.style.left = "450px"
  justFerias2.style.left = "450px"
  menu.style.left ="5px"
}, 3000);
}

