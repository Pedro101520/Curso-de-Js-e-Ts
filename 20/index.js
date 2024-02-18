let num = [1,2,3,];
let a;

//Essa parte, serve para atribuir o valor de num a variavel a, mas fazendo que ele se torne idempendete de num, podendo alterar o valor sem mudar num
a = [...num];

a[0] = 2;
console.log(num);
console.log(a);

const b = {
    nome: 'Pedro',
    sobrenome: 'Lima'
};

//Aqui pode tornar independente os valores de b em c
const c = {...b};

b.nome = 'Clara';
console.log(b);

console.log(c);