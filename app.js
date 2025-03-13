let amigos = [];

function adicionarAmigo() {
    const nomeInput = document.getElementById("amigo");
    const nome = nomeInput.value.trim();
    
    if (nome && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarListaAmigos();
        nomeInput.value = '';
    } else {
        alert("Por favor, insira um nome único!");
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear!");
        return;
    }

    const amigosEmbaralhados = [...amigos];
    let resultados = [];

    while (amigosEmbaralhados.length) {
        let sortudo = amigosEmbaralhados.splice(Math.floor(Math.random() * amigosEmbaralhados.length), 1)[0];
        let amigoSorteado = amigosEmbaralhados.splice(Math.floor(Math.random() * amigosEmbaralhados.length), 1)[0];
        resultados.push(`${sortudo} sorteou ${amigoSorteado}`);
    }

    mostrarResultado(resultados);
}

function mostrarResultado(resultados) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = '';

    resultados.forEach(result => {
        const li = document.createElement("li");
        li.textContent = result;
        resultadoLista.appendChild(li);
    });
}
