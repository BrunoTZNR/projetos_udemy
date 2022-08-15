/* theme mode */
const check_theme = document.querySelector('#theme');

check_theme.addEventListener('click', ()=>{
    let corpo = document.body;
    corpo.classList.toggle('light-theme');
})
let acao_desc =  (c, d)=>{
    if(c.checked){
        d.style.right = '0px';
    }else{
        d.style.right = '-100%';
    }
}
/* descripton   0 => spotify
                1 => finians
                2 => museu
                3 => chale
                4 => cidade
                5 => tecblog
                6 => anna
                7 => unes */
const check_desc = document.querySelectorAll('#desc');
let enabledSettings;

check_desc.forEach((checkbox)=>{
    checkbox.addEventListener('change', ()=> {
        enabledSettings = Array.from(check_desc).filter(x => x.checked).map(x => x.value);
        console.log(enabledSettings)
    })
});
