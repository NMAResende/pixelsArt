const colorBlack = document.querySelector('#black');
const colorGreen = document.querySelector('#green');
const colorBlue = document.querySelector('#blue');
const colorYellow = document.querySelector('#yellow');

function colorirPixel(selecionou) {
  selecionou.style.backgroundColor = corSelecionada;
}
document.querySelectorAll('#pixel-board').forEach((div) => {
  div.addEventListener('click', (event) => {
    let selecionou = document.querySelector('#' + event.target.id);
    colorirPixel(selecionou);
  });
});

//criando botão e limpando grade
const criandoBotao = document.getElementById('clear-board');
criandoBotao.addEventListener('click', function () {
  document.querySelectorAll('#pixel-board').forEach((div) => {
    let filhos = div.children;
    for (let i = 0; i < filhos.length; i += 1) {
      filhos[i].style.backgroundColor = 'white';
    }
  })
});

let corSelecionada = 'black';
colorBlack.addEventListener('click', function () {
  corSelecionada = 'black';
});
colorGreen.addEventListener('click', function () {
  corSelecionada = 'green';
});
colorBlue.addEventListener('click', function () {
  corSelecionada = 'blue';
});
colorYellow.addEventListener('click', function () {
  corSelecionada = 'yellow';
});

function borda() {
  const bordaElementos = document.querySelectorAll('.color');
  for (let i = 0; i < bordaElementos.length; i += 1) {
    bordaElementos[i].style.border = "1px solid black";
  };
}
borda();

//definindo a cor preta
function backClassSelected() {
  colorBlack.classList.remove('color');
  colorBlack.classList.add('selected');
  colorBlack.classList.add('color');
}
backClassSelected();

//Selecionando uma cor da paleta
const selectElement = document.querySelectorAll('.color');
function selecionandoERemovendo() {
  for (let i = 0; i < selectElement.length; i += 1) {
    selectElement[i].classList.remove('selected');
  }
}
function selectColor() {
  for (let i = 0; i < selectElement.length; i += 1) {
    selectElement[i].addEventListener('click', (event) => {
      selecionandoERemovendo();
      event.target.classList.add('selected');
    });
  }
}
selectColor();

//criando grade pixel
function criandoGradePixel() {
  const grade = document.querySelector('#pixel-board');
  let n = 5;
  let numId = 0;
  for (let l = 0; l < n; l += 1) {
    for (let c = 0; c < n; c += 1) {
      const criandoGrade = document.createElement('div');
      criandoGrade.classList.add('pixel');
      criandoGrade.id = 'pixel' + numId;
      grade.appendChild(criandoGrade);
      numId += 1;
    }
  }
}
criandoGradePixel();