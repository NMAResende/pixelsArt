
const colorBlack = document.querySelector('#black');
const colorGreen = document.querySelector('#green');
const colorBlue = document.querySelector('#blue');
const colorYellow = document.querySelector('#yellow');

let corSelecionada = 'cor';
colorBlack.addEventListener('click', function() {
    cor = 'black';
  });
  colorGreen.addEventListener('click', function () {
    cor = 'green'
  });
  colorBlue.addEventListener('click', function () {
    cor = 'blue';
  });
  colorYellow.addEventListener('click', function () {
    cor = 'yellow';
  });

function borda (){
    const bordaElementos = document.querySelectorAll('.color');
    for (let i = 0; i < bordaElementos.length; i += 1){
        bordaElementos[i].style.border = "1px solid black"
    };
}
borda();
//definindo a cor preta
function backClassSelected(){
    colorBlack.classList.remove('color');
    colorBlack.classList.add('selected');
    colorBlack.classList.add('color');
}
backClassSelected();

//Selecionando uma cor da paleta
const selectElement = document.querySelectorAll('.color');
function selecionandoERemovendo (){
 for (let i = 0; i < selectElement.length; i += 1){
    selectElement[i].classList.remove('selected');
 }
}
function selectColor(){
    for (let i = 0; i < selectElement.length; i += 1){
        selectElement[i].addEventListener('click', (event) => {
            selecionandoERemovendo();
            event.target.classList.add('selected');
        });
    }
  }
  selectColor();  

  //  //for (let i = 0; i < botaoGrade.length; i +=1){
  //   if(botaoGrade.style.backgroundColor === "white"){
  //       botaoGrade.style.backgroundColor = 'selecionar';
  //   }else {
  //       botaoGrade.style.backgroundColor = 'white';
  //   }
  //  //}
 




//criando grade pixel
function criandoGradePixel(){
const grade = document.querySelector('#pixel-board');

    let n = 5;
    for(let l = 0; l < n; l += 1){
      for(let c = 0; c < n; c += 1){
        const criandoGrade = document.createElement('div');
        criandoGrade.classList.add('pixel');
        grade.appendChild(criandoGrade);
    }
}
}
criandoGradePixel();