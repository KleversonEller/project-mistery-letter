window.onload = function () {
  let botaoCriaCarta = document.querySelector('#criar-carta');

  botaoCriaCarta.addEventListener('click', function () {
    let textoDigitado = document.querySelector('#carta-texto');
    let textoDigitadoSeparado = textoDigitado.value.split(' ');
    let paragrafo = document.querySelector('#carta-gerada');

    for (let palavra of textoDigitadoSeparado) {
      let cria = document.createElement('span');
      cria.innerHTML = palavra;
      paragrafo.appendChild(cria);
    }
  });
};
