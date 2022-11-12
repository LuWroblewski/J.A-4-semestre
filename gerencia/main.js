let tabelaPedidos = document.getElementById("tabelaPedidos");
let tabelaPedidos2 = document.getElementById("tabelaPedidos2");
let container = document.getElementById("container");


async function getAllPostsPonto() {
  const response = await fetch("http://localhost:3000/justPonto/getPonto");

  console.log(response);

  const data = await response.json();

  console.log(data);

  data.map((post) => {
    const tr = document.createElement("tr")

    const matriculaPonto = document.createElement("td");
    const nomePonto = document.createElement("td");
    const emailPonto = document.createElement("td");
    const areaAtuacao = document.createElement("td");
    const setorPonto = document.createElement("td");
    const dataJust = document.createElement("td");
    const entrada = document.createElement("td");
    const saida = document.createElement("td");
    const motivoPonto = document.createElement("td");
    const descricao = document.createElement("td");
    const hExtras = document.createElement("td");
    const observacao = document.createElement("td");
    const aprovado = document.createElement("td");
    const button = document.createElement("button");
    const button2 = document.createElement("button");

    emailPonto.innerText = post.emailPonto

    matriculaPonto.innerText = post.matriculaPonto;
    nomePonto.innerText = post.nomePonto;
    areaAtuacao.innerText = post.areaAtuacao;
    setorPonto.innerText = post.setorPonto;
    dataJust.innerText = post.dataJust;
    entrada.innerText = post.entrada;
    saida.innerText = post.saida;
    motivoPonto.innerText = post.motivoPonto;
    descricao.innerText = post.descricao;
    hExtras.innerText = post.hExtras;
    observacao.innerText = post.observacao;
    aprovado.innerText = post.aprovado
    button.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    


    button.onclick = function () {
      console.log(matriculaPonto.innerHTML)
      console.log(emailPonto.innerHTML)

      fetch(`http://localhost:3000/justPonto/del/${matriculaPonto.innerHTML}`, {

        method: 'DELETE',
        headers: {
          "content-type": "application/json",
      },
      body: JSON.stringify({
          emailPonto: emailPonto.innerHTML,
      }),
      })
      deletar()

    }

    button2.innerText = "Aprovar";
    button2.onclick = function () {
      console.log(matriculaPonto.innerHTML)

      fetch(`http://localhost:3000/justPonto/update/${matriculaPonto.innerHTML}`, {
        method: 'PATCH',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          emailPonto: emailPonto.innerHTML,
          aprovado: "Aprovado pela gerencia"
        }),

      })
      aprovacao()
}

function aprovacao(){
  aprovado.innerText = "Aprovado pela gerencia"
}

    tr.appendChild(matriculaPonto);
    tr.appendChild(nomePonto);
    tr.appendChild(areaAtuacao);
    tr.appendChild(setorPonto);
    tr.appendChild(dataJust);
    tr.appendChild(entrada);
    tr.appendChild(saida);
    tr.appendChild(motivoPonto);
    tr.appendChild(descricao);
    tr.appendChild(hExtras);
    tr.appendChild(observacao);
    tr.appendChild(aprovado);
    tr.appendChild(button2);
    tr.appendChild(button);



    tabelaPedidos.appendChild(tr);

    function deletar(){
      tabelaPedidos.removeChild(tr)
      }

  });
}

getAllPostsPonto()



async function getAllPostsFerias() {
  const response = await fetch("http://localhost:3000/justFerias/getFerias");

  console.log(response);

  const data = await response.json();

  console.log(data);

  data.map((post) => {
    const tr = document.createElement("tr")

    const matriculaFerias = document.createElement("td");
    const nomeFerias = document.createElement("td");
    const emailPonto = document.createElement("td");
    const areaAtuacaoFerias = document.createElement("td");
    const setorFerias = document.createElement("td");
    const dataInicio = document.createElement("td");
    const dataFim = document.createElement("td");
    const motivoFerias = document.createElement("td");
    const tempoTotal = document.createElement("td");
    const aprovado = document.createElement("td");
    const button = document.createElement("button");
    const button2 = document.createElement("button");

    emailPonto.innerText = post.emailPonto

    matriculaFerias.innerText = post.matriculaFerias;
    nomeFerias.innerText = post.nomeFerias;
    areaAtuacaoFerias.innerText = post.areaAtuacaoFerias;
    setorFerias.innerText = post.setorFerias;
    dataInicio.innerText = post.dataInicio;
    dataFim.innerText = post.dataFim;
    motivoFerias.innerText = post.motivoFerias;
    tempoTotal.innerText = post.tempoTotal;
    aprovado.innerText = post.aprovado

    
    button.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    button.onclick = function (e) {


      fetch(`http://localhost:3000/justFerias/del/${matriculaFerias.innerHTML}`, {
        method: 'DELETE',
        headers: {
          "content-type": "application/json",
      },
      body: JSON.stringify({
          emailPonto: emailPonto.innerHTML,
      }),
      })
      deletar()
    }

    button2.innerText = "Aprovar";
    button2.onclick = function (e) {
      console.log(matriculaFerias.innerHTML)

      fetch(`http://localhost:3000/justFerias/update/${matriculaFerias.innerHTML}`, {
        method: 'PATCH',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          aprovado: "Aprovado pela gerencia"
        }),

      })
      aprovacao()
    }
    function aprovacao(){
      aprovado.innerText = "Aprovado pela gerencia"
    }
    tr.appendChild(matriculaFerias);
    tr.appendChild(nomeFerias);
    tr.appendChild(areaAtuacaoFerias);
    tr.appendChild(setorFerias);
    tr.appendChild(dataInicio);
    tr.appendChild(dataFim);
    tr.appendChild(motivoFerias);
    tr.appendChild(tempoTotal);
    tr.appendChild(aprovado);
    tr.appendChild(button2);
    tr.appendChild(button);

    tabelaPedidos2.appendChild(tr);

    function deletar(){
      tabelaPedidos.removeChild(tr)
      }

  });
}

getAllPostsFerias()

async function getAllPostsGraphics() {

  const response = await fetch("http://localhost:3000/justFerias/getFerias");

  console.log(response);

  const data = await response.json();

  console.log(data);

  const meses = new Map()

  data.forEach(item => {
    const mes = item.dataInicio.slice(0, 7)
    meses.get(mes)?.push(item) || meses.set(mes, [item])
  })
  const mesesAgrupados = []

  for (const [mes, dados] of meses) {
    const itens = `${mes} ${dados.length}`
    mesesAgrupados.push(itens)
  }

  console.log(mesesAgrupados)

  let mes1 = mesesAgrupados[0].split(" ")
  let janeiro = mes1[1]

  let mes2 = mesesAgrupados[1].split(" ")
  let Fevereiro = mes2[1]

  let mes3 = mesesAgrupados[2].split(" ")
  let Março = mes3[1]

  let mes4 = mesesAgrupados[3].split(" ")
  let Abril = mes4[1]

  let mes5 = mesesAgrupados[4].split(" ")
  let Maio = mes5[1]

  let mes6 = mesesAgrupados[5].split(" ")
  let Junho = mes6[1]

  let mes7 = mesesAgrupados[6].split(" ")
  let Julho = mes7[1]

  let mes8 = mesesAgrupados[7].split(" ")
  let Agosto = mes8[1]

  let mes9 = mesesAgrupados[8].split(" ")
  let Setembro = mes9[1]

  let mes10 = mesesAgrupados[9].split(" ")
  let Outubro = mes10[1]

  let mes11 = mesesAgrupados[10].split(" ")
  let Novembro = mes11[1]

  let mes12 = mesesAgrupados[11].split(" ")
  let Dezembro = mes12[1]



  anychart.onDocumentReady(function () {
    // create data set on our data
    var chartData = {
      title: 'Meses com mais solicitações de ferias',
      header: ['#', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      rows: [
        ['Meses', janeiro, Fevereiro, Março, Abril, Maio, Junho, Julho, Agosto, Setembro, Outubro, Novembro, Dezembro],
      ]
    };

    // create column chart
    var chart = anychart.column();

    // set chart data
    chart.data(chartData);

    // turn on chart animation
    chart.animation(true);

    chart.yAxis().labels().format('{%Value} Solicitações');

    // set titles for Y-axis
    chart.yAxis().title('Nº Solicitações');

    chart
      .labels()
      .enabled(true)
      .position('center-top')
      .anchor('center-bottom')
      .format('{%Value}  Solicitações');
    chart.hovered().labels(false);

    // turn on legend and tune it
    chart.legend().enabled(true).fontSize(13).padding([0, 0, 20, 0]);

    // interactivity settings and tooltip position
    chart.interactivity().hoverMode('single');

    chart
      .tooltip()
      .positionMode('point')
      .position('center-top')
      .anchor('center-bottom')
      .offsetX(0)
      .offsetY(5)
      .titleFormat('{%X}')
      .format('{%SeriesName} :  {%Value} Solicitações');

    // set container id for the chart
    chart.container('container');

    // initiate chart drawing
    chart.draw();
  });


}
getAllPostsGraphics()

let button0 = document.getElementById("btn-Ponto");
let button1 = document.getElementById("btn-Ferias");
let button2 = document.getElementById("btn-Graficos");
let title = document.getElementById("title");
button0.onclick = function (e) {
  e.preventDefault()
  tabelaPedidos.style.top = "0px"
  tabelaPedidos2.style.top = "380px"
  container.style.top ="380px"
  title.innerHTML= "Justificativas de ponto"
}

button1.onclick = function (e) {
    e.preventDefault()
    tabelaPedidos.style.top = "380px"
    tabelaPedidos2.style.top = "-350px"
    container.style.top ="350px"
    title.innerHTML= "Solicitações de ferias"


}
button2.onclick = function (e) {
  title.innerHTML= "Graficos"
  tabelaPedidos.style.top = "380px"
  tabelaPedidos2.style.top = "380px"
  container.style.top ="-700px"

}
