function verifica(num){
    if (typeof(num) !== 'number') return console.log(num);
    else if((num % 3) === 0 && (num % 5) === 0) return console.log('FizzBuzz');
    if(num % 3 === 0) return console.log('Fizz');
    else if(num % 5 === 0) return console.log('Buzz');
    return console.log(num);
}
for(let i = 0; i <= 100; i++){
    verifica(i);
}