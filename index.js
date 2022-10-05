let tabelaPedidos2 = document.getElementById("tabelaPedidos2");
let icon = document.getElementById("icon")


async function getAllPosts() {
  const response = await fetch("http://localhost:3000/justFerias/getFerias");

  console.log(response);

  const data = await response.json();

  console.log(data);

  data.map((post) => {
    const tr = document.createElement("tr")

    const matriculaFerias = document.createElement("td");
    const nomeFerias = document.createElement("td");
    const areaAtuacaoFerias = document.createElement("td");
    const setorFerias = document.createElement("td");
    const dataInicio = document.createElement("td");
    const dataFim = document.createElement("td");
    const motivoFerias = document.createElement("td");
    const tempoTotal = document.createElement("td");
    const aprovado = document.createElement("td");
    const button = document.createElement("button");
    const button2 = document.createElement("button");

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
      console.log(matriculaFerias.innerHTML)

      fetch(`http://localhost:3000/justFerias/del/${matriculaFerias.innerHTML}`, {
        method: 'DELETE'
      })
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


  });
}

getAllPosts()

