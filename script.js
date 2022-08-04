const colorBlack = document.querySelector('#black');
const colorGreen = document.querySelector('#green');
const colorBlue = document.querySelector('#blue');
const colorYellow = document.querySelector('#yellow');
let corSelecionada = 'black';
function colorirPixel(selecionou) {
  selecionou.style.backgroundColor = corSelecionada;
}
document.querySelectorAll('#pixel-board').forEach((div) => {
  div.addEventListener('click', (event) => {
    const selecionou = document.querySelector('#' + event.target.id);
    colorirPixel(selecionou);
  });
});

//criando botão e limpando grade
const criandoBotao = document.getElementById('clear-board');
criandoBotao.addEventListener('click', function () {
  document.querySelectorAll('#pixel-board').forEach((div) => {
    const filhos = div.children;
    for (let i = 0; i < filhos.length; i += 1) {
      filhos[i].style.backgroundColor = 'white';
    }
  });
});

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
    bordaElementos[i].style.border = '1px solid black';
  }
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
  const n = 5;
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

//desafio 10
const botao = document.getElementById('generate-board');
const input = document.querySelectorAll('input');
botao.addEventListener('click', function (){
  const valores = null;
    input.forEach(item =>{
      if (item.value)
      valores.push(parseFloat(item.value));
      alert("Board inválido!");
    });
 function changeSize (){
  input.innerHTML = '';
  for(let i = 0; input.length; i += 1){
    input.innerHTML += 'pixel';
    input.innerHTML= Math.pow('generate-board', 2);
 }
}
changeSize();
 });
 




  
