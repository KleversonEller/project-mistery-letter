window.onload = function () {
  //? Requisito 3 - 4 - 5

  let botaoCriaCarta = document.querySelector('#criar-carta');

  botaoCriaCarta.addEventListener('click', function () {
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
        paragrafo.appendChild(cria);
      }
    }
  });

  //! Cria as tags spans do paragrafo
};
