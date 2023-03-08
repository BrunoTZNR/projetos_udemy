let nivel = window.location.search;
nivel.replace('?', ''); //  facil / normal / dificil

let altura = 0;
let largura = 0;
let vida = 1;
let tempo = 100;
let mosca = './img/mosca.png';

function ajustarTela(){
  altura = window.innerHeight;
  largura = window.innerWidth;
  console.log(window.innerHeight + ' ' + window.innerWidth)
}

let contagem_tempo = setInterval(() => {
  if(tempo === 0) {
    window.location.href = './index.html';
  }

  document.getElementById('tempo_contagem').innerHTML = tempo

  tempo--;
  console.log(tempo)
}, 1000)