let num = 7, count = 0, i;
for(i = 0; i < (num + 1); i++){
    if(num % i == 0){
        count += 1;
    }
}
console.log(count == 2 ? "O numero é primo" : "O numero não é primo");