const imagens = document.querySelector(".carrossel-imagens");
  const btnProximo = document.querySelector(".proximo");
  const btnAnterior = document.querySelector(".anterior");

  let index = 0;

  btnProximo.addEventListener("click", () => {
    index = (index + 1) % 3; // 3 imagens
    atualizarCarrossel();
  });

  btnAnterior.addEventListener("click", () => {
    index = (index - 1 + 3) % 3;
    atualizarCarrossel();
  });

  function atualizarCarrossel() {
    imagens.style.transform = `translateX(-${index * 100}%)`;
  }