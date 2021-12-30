window.onload = function () {
  //? Requisito 3 - 4 - 5 - 16

  function geraNumero(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let botaoCriaCarta = document.querySelector('#criar-carta');

  botaoCriaCarta.addEventListener('click', function () {
    let estilo = ['newspaper', 'magazine1', 'magazine2'];
    let tamanho = ['medium', 'big', 'reallybig'];
    let rotacao = ['rotateleft', 'rotateright'];
    let inclinacao = ['skewleft', 'skewright'];

    let textoDigitado = document.querySelector('#carta-texto');
    let textoDigitadoSeparado = textoDigitado.value.split(' ');
    let paragrafo = document.querySelector('#carta-gerada');

    if (textoDigitadoSeparado[0] == '') {
      paragrafo.innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
      paragrafo.innerHTML = '';
      for (let palavra of textoDigitadoSeparado) {
        let cria = document.createElement('span');
        cria.innerHTML = palavra;
        cria.classList.add(
          estilo[geraNumero(0, 3)],
          tamanho[geraNumero(0, 3)],
          rotacao[geraNumero(0, 2)],
          inclinacao[geraNumero(0, 2)]
        );
        paragrafo.appendChild(cria);
      }
    }
  });

  //! Cria as tags spans do paragrafo
};
