const content = document.querySelector('.carrosel-content');
const cavalo = document.querySelectorAll('.carrosel-content article');

const seta_e = document.querySelector('.seta_e');
const seta_d = document.querySelector('.seta_d');

let cavalgada = 0;

seta_e.addEventListener('click', ()=>{
    content.style.transform = `translateX(0)`
})

seta_d.addEventListener('click', ()=>{
    content.style.transform = `translateX(-1060px)`
})

const rodadas = ()=>{
    cavalgada++;

    if(cavalgada > cavalo.length - 1){cavalgada = 0;}

    content.style.transform = `translateX(${-cavalgada * 1060}px)`

    console.log(cavalgada);
}

setInterval(rodadas, 5000);