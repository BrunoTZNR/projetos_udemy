/* theme mode */
const check_theme = document.querySelector('#theme');

check_theme.addEventListener('click', ()=>{
    let corpo = document.body;
    corpo.classList.toggle('light-theme');
})

/* descripton */
const check_desc = [document.querySelector("input[name=spotify]"),document.querySelector("input[name=finians]"),
document.querySelector("input[name=museu]"),document.querySelector("input[name=chale]"),document.querySelector("input[name=cidade]"),
document.querySelector("input[name=tecblog]"),document.querySelector("input[name=anna]"),document.querySelector("input[name=unes]")];
const descricao = [document.querySelector("div[name=spotify]"),document.querySelector("div[name=finians]"),
document.querySelector("div[name=museu]"),document.querySelector("div[name=chale]"),document.querySelector("div[name=cidade]"),
document.querySelector("div[name=tecblog]"),document.querySelector("div[name=anna]"),document.querySelector("div[name=unes]")];
/*  0 => spotify
    1 => finians
    2 => museu
    3 => chale
    4 => cidade
    5 => tecblog
    6 => anna
    7 => unes */

check_desc[0].addEventListener('change', ()=>{
    if(check_desc[0].checked){descricao[0].style.right = '0px';}else{descricao[0].style.right = '-100%';}
});

check_desc[1].addEventListener('change', ()=>{
    if(check_desc[1].checked){descricao[1].style.right = '0px';}else{descricao[1].style.right = '-100%';}
});

check_desc[2].addEventListener('change', ()=>{
    if(check_desc[2].checked){descricao[2].style.right = '0px';}else{descricao[2].style.right = '-100%';}
});

check_desc[3].addEventListener('change', ()=>{
    if(check_desc[3].checked){descricao[3].style.right = '0px';}else{descricao[3].style.right = '-100%';}
});

check_desc[4].addEventListener('change', ()=>{
    if(check_desc[4].checked){descricao[4].style.right = '0px';}else{descricao[4].style.right = '-100%';}
});

check_desc[5].addEventListener('change', ()=>{
    if(check_desc[5].checked){descricao[5].style.right = '0px';}else{descricao[5].style.right = '-100%';}
});

check_desc[6].addEventListener('change', ()=>{
    if(check_desc[6].checked){descricao[6].style.right = '0px';}else{descricao[6].style.right = '-100%';}
});

check_desc[7].addEventListener('change', ()=>{
    if(check_desc[7].checked){descricao[7].style.right = '0px';}else{descricao[7].style.right = '-100%';}
});