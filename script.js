 /*

 alert("Bom dia!"); comentario aqui

var nome = "Daniel"; utilizado para criar uma variável global - comentario aqui
let idade = 17; so pode utilizar a variável depois que ela existir - comentario aqui
const cpf = "0000.000.000-00";    variável constante, que não pode ser alterada - comentario aqui

alert("Minha idade é " + idade);

let idade = 18;  não é possível criar uma variável com o mesmo nome, por isso dará erro  - comentario aqui

alert("Meu CPF é " + cpf);

alert ("Meu nome é " + nome);

const cpf ="1111.111.111-11";  não é possível alterar o valor da variável constante, por isso dará erro - comentario aqui

const idade = 10;
const pais = "brasil";
const pais = "ue";

if (idade < 17 && pais == 'brasil' || pais == 'ue' ) {
    alert("você é menor de idade, se tivesse 17 anos, poderia acessar esse site");
}