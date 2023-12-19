const funcoes = require('./validadorCpfCnpj')

var cpf = "50513777857"

let validar = funcoes.test(cpf);

console.log(validar);