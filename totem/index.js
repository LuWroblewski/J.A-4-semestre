//botão de proximo e volta
let justPonto = document.getElementById("justPonto");
let justPonto2 = document.getElementById("justPonto2");


let button0 = document.getElementById("button0");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");


button0.onclick = function (e) {
  e.preventDefault();

  window.location.href = ("./index.html")

}

button2.onclick = function (e) {
  e.preventDefault();

  justPonto.style.left = "5px"
  justPonto2.style.left = "450px"
}


//sobre a justificativa de ferias

const MatriculaFerias = document.getElementById("POST-MatriculaFerias");
const nomeFerias = document.getElementById("POST-nomeFerias");
const areaAtuacaoFerias = document.getElementById("POST-areaAtuacaoFerias");
const setorFerias = document.getElementById("POST-setorFerias");
const dataInicio = document.getElementById("POST-dataInicio");
const dataFim = document.getElementById("POST-dataFim");
const motivoFerias = document.getElementById("POST-motivoFerias");
const tempoTotal = document.getElementById("POST-tempoTotal");



//funções botão + add no cache

button1.onclick = function (e) {
  e.preventDefault()

  const mFerias = MatriculaFerias.value
  const nFerias = nomeFerias.value
  const aTFerias = areaAtuacaoFerias.value
  const sFerias = setorFerias.value


  localStorage.setItem('matriculaF', `${mFerias}`)
  localStorage.setItem('nomeF', `${nFerias}`)
  localStorage.setItem('areaFerias', `${aTFerias}`)
  localStorage.setItem('setorFerias', `${sFerias}`)

  justPonto.style.left = "-450px"
  justPonto2.style.left = "5px"


}

button3.onclick = function (e) {



  const inicioFerias = dataInicio.value
  const fimFerias = dataFim.value
  const motivFerias = motivoFerias.value
  const tempoFerias = tempoTotal.value


  localStorage.setItem('inicioF', `${inicioFerias}`)
  localStorage.setItem('fimF', `${fimFerias}`)
  localStorage.setItem('motivoF', `${motivFerias}`)
  localStorage.setItem('tempoF', `${tempoFerias}`)




  const matF = localStorage.getItem('matriculaF')
  const nomF = localStorage.getItem('nomeF')
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
      MatriculaFerias: matF,
      nomeFerias: nomF,
      areaAtuacaoFerias: areF,
      setorFerias: setF,
      dataInicio: inF,
      dataFim: saiF,
      motivoFerias: motivF,
      tempoTotal: tempF,
    }),
  })
}

