let tabelaPedidos = document.getElementById("tabelaPedidos");


async function getAllPosts() {
  const response = await fetch("http://localhost:3000/justPonto/getPonto");

  console.log(response);

  const data = await response.json();

  console.log(data);

  data.map((post) => {
    const tr = document.createElement("tr")

    const matriculaPonto = document.createElement("td");
    const nomePonto = document.createElement("td");
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
    button.onclick = function (e) {
      console.log(matriculaPonto.innerHTML)

      fetch(`http://localhost:3000/justPonto/del/${matriculaPonto.innerHTML}`, {
        method: 'DELETE'
      })
    }

    button2.innerText = "Aprovar";
    button2.onclick = function (e) {
      console.log(matriculaPonto.innerHTML)

      fetch(`http://localhost:3000/justPonto/update/${matriculaPonto.innerHTML}`, {
        method: 'PATCH',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          aprovado: "Aprovado pela gerencia"
        }),

      })
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


  });
}

getAllPosts()

