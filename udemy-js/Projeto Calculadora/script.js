let visor = document.querySelector('.visor');

function calcular (tipo, valor) {
  if (tipo === 'acao') {
    if (valor === 'c') {
      visor.value = '';
    }

    if (valor === '/' || valor === '*' || valor === '-' || valor === '+' || valor === '.') {
      visor.value += valor;
    }
    
    if (valor === '=') {
      visor.value = eval(visor.value)
    }
  } else if (tipo === 'valor') {
    visor.value += valor;
  }
}