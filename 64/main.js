const objA = {
    chaveA: 'A'
    //___proto___: Object.prototype
};

const objB = {
    chaveB: 'B'
    //___proto___: objA
};

const objC = {
    chaveC: 'C'
};

//Aqui o objeto B pode herdar os elementos do A
Object.setPrototypeOf(objB, objA);

//Aqui o objeto C pode herdar os elementos de A e B
Object.setPrototypeOf(objC, objB);

console.log(objC.chaveA);