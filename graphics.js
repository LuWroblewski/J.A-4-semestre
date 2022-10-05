async function getAllPosts() {

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
getAllPosts()