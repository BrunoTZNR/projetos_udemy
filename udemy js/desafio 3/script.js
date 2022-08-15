var nome = prompt("Digite seu primeiro nome:");
var altura = Number(prompt("Digite sua altura em cm:"))/100;
var peso = Number(prompt("Digite seu peso:"));

const m = peso / (altura**2);
var classficacao;

if (m < 16){
    classficacao ="Baixo peso muito grave!";
}else if (m >= 16 && m <= 16.99){
    classficacao = "Baixo peso grave!";
}else if (m >= 17 && m <= 18.49){
    classficacao = "Baixo peso!";
}else if (m >= 18.50 && m <= 24.99){
    classficacao = "Peso normal!";
}else if (m >= 25 && m <= 29.99){
    classficacao = "Sobrepeso!";
}else if (m >= 30 && m <= 34.99){
    classficacao = "Obesidade grau I!";
}else if (m >= 35 && m <= 39.99){
    classficacao = "Obesidade grau II!";
}else{
    classficacao = "Obesidade grau III!";
}

document.write(`${nome} possui índice de massa corporal igual a ${m.toFixed(2).replace('.',',')}, sendo classificado como: ${classficacao}`)