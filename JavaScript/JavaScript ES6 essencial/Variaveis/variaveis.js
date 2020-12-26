// EXEMPLO DOS TRÊS TIPOS DE VARIÁVEIS


var nameVar = 'Renan';
let nameLet = 'Renan';
const nameConst = 'Renan';

console.log('nameVar: ${nameVar}');
console.log('nameLet: ${nameLet}');
console.log('nameConst: ${nameConst}');


// EXEMPLO VAR


var test = 'example';

(() => {
    console.log = ('Valor dentro da função "${test}"');

    if (true) {
        var test = 'example';
        console.log('Valor dentro do if "${test}"');
    }

    console.log('Valor após a execução do if "${test}"');
})();


// EXEMPLO LET


(() => {
    let test = 'valor função';
    console.log('Valor dentro da função "${test}"');

    if (true) {
        let test = 'valor if';
        console.log('Valor dentro do if "${test}"');
    }

    console.log('Valor após a execução do if "${test}"');
})();


// EXEMPLO CONST 1


(() => {
    const test = 'valor função';
    console.log('Valor dentro da função "${test}"');

    if (true) {
        const test = 'valor if';
        console.log('Valor dentro do if "${test}"');
    }

    console.log('Valor após a execução do if "${test}"');
})();


// EXEMPLO CONST 2


const name = 'Renan';

// Não podemos alterar o valor
name = 'Renan';

const user = {
    name: 'Renan'
};

// Mas se for um objeto, odemos trocar suas propriedades
user.name = 'Outro nome';

// Não podemos fazer o objeto "apontar" para outro lugar
user = {
    name: 'Renan'
};

const persons = ['Renan', 'Guilherme', 'Jennifer'];

// Podemos adicionar novos itens
persons.push('Joao');
// ['Renan', 'Guilherme', 'Jennifer', 'Joao']

// Podemos remover algum item
persons.shift();
// ['Guilherme', 'Jennifer', 'Joao']

// Podemos alterar diretamente
persons[1] = 'James';
// [Guilherme', 'James', 'Joao']

console.log('\nArray após as alterações: ', persons)