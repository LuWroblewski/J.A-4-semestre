
//botão de proximo e volta
let justPonto = document.getElementById("justPonto");
let justPonto2 = document.getElementById("justPonto2");
let justPonto3 = document.getElementById("justPonto3");

let button0 = document.getElementById("button0");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let button5 = document.getElementById("button5");


button0.onclick = function (e) {
    e.preventDefault();

    window.location.href = ("./index.html")

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
const entrada = document.getElementById("POST-entrada");
const saida = document.getElementById("POST-saida");
const descricao = document.getElementById("POST-descricao");
const dataJust = document.getElementById("POST-dataJust");
const motivoPonto = document.getElementById("POST-motivoPonto");
const hExtras = document.getElementById("POST-hExtras");
const observacao = document.getElementById("POST-observacao");
const areaAtuacao = document.getElementById("POST-areaAtuacaoPonto");
const setorPonto = document.getElementById("POST-setorPonto");


//funções botão + add no cache

button1.onclick = function (e) {
    e.preventDefault()

    const mPonto = matriculaPonto.value
    const nPonto = nomePonto.value
    const aTPonto = areaAtuacao.value
    const sPonto = setorPonto.value


    localStorage.setItem('matriculaP', `${mPonto}`)
    localStorage.setItem('nomeP', `${nPonto}`)
    localStorage.setItem('areaPonto', `${aTPonto}`)
    localStorage.setItem('setorPonto', `${sPonto}`)

    justPonto.style.left = "-450px"
    justPonto2.style.left = "5px"


}

button3.onclick = function (e) {
    e.preventDefault()

    const dataPonto = dataJust.value
    const entraPonto = entrada.value
    const saiPonto = saida.value


    localStorage.setItem('dataP', `${dataPonto}`)
    localStorage.setItem('entraP', `${entraPonto}`)
    localStorage.setItem('saiP', `${saiPonto}`)

    justPonto2.style.left = "-450px"
    justPonto3.style.left = "5px"


}
button5.onclick = function (e) {

    const motivPonto = motivoPonto.value
    const descriPonto = descricao.value
    const horaPonto = hExtras.value
    const obsPonto = observacao.value

    localStorage.setItem('motivP', `${motivPonto}`)
    localStorage.setItem('descriP', `${descriPonto}`)
    localStorage.setItem('horaP', `${horaPonto}`)
    localStorage.setItem('obsP', `${obsPonto}`)


    const matP = localStorage.getItem('matriculaP')
    const nomP = localStorage.getItem('nomeP')
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
            areaAtuacao: areP,
            setorPonto: setP,
            dataJust: dateP,
            entrada: entP,
            saida: sP,
            motivoPonto: motP,
            descricao: desP,
            hExtras: hrP,
            observacao: obP
        }),
    })

}
