let listaDeNumerosEscolhidos = [];
let numeroLimite = 10;
let numesoSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rate: 1.2 });
}

function verificarChute() {
  let chute = document.querySelector("input").value;
  if (chute == numesoSecreto) {
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagem = `Parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativa}`;

    exibirTextoNaTela("h1", "Acertou");
    exibirTextoNaTela("p", mensagem);

    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    chute > numesoSecreto
      ? exibirTextoNaTela("p", "O número secreto é menor")
      : exibirTextoNaTela("p", "O número secreto é maior");
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = Math.floor(Math.random() * numeroLimite + 1);
  let quantidadeElementosLista = listaDeNumerosEscolhidos.length;

  if (quantidadeElementosLista == numeroLimite) {
    listaDeNumerosEscolhidos = [];
  }

  if (listaDeNumerosEscolhidos.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
  } else {
    listaDeNumerosEscolhidos.push(numeroEscolhido);
    console.log(listaDeNumerosEscolhidos);
    return numeroEscolhido;
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function reiciarJogo() {
  numesoSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  mensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

function mensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", `Escolha um número entre 1 a ${numeroLimite}`);
}
mensagemInicial();
