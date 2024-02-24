//Async e Await
function rand(min = 0, max = 3){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        //Esta função só simula algo que demora
        setTimeout(() => {
            if(typeof msg !== "string") {
                reject("Erro");
                return;
            }

            resolve(msg.toUpperCase() + " - Passei na promise");
            return;
        }, tempo);
    });
}

//Async é utilizado quando se precisa ter dados de forma sincrona, mas que sõa fornecidos como assíncronas
// esperaAi("Fase 1", rand(0, 3))
//     .then(valor => {
//         console.log(valor);
//         return esperaAi("Fase 2", rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return esperaAi("Fase 3", rand());
//     })
//     .then(fase => {
//         console.log(fase);
//         return fase;
//     })
//     .then(fase => {
//         console.log("Terminamos na fase", fase);
//     })
//     .catch(e => console.log(e));

//Async faz a mesma coisa que o código acima comentado, porém com menos complexidade, ou seja
//Vai ser retornado uma função assincrona, mas de forma sincrona
//Para caso de erro, é s´po adicionar um try catch, e caso tenha um erro, ele vai parar a execução do código
async function executa(){
    try{
        const fase1 = await esperaAi("Fase 1", rand());
        console.log(fase1);
    
        const fase2 = await esperaAi("Fase 2", rand());
        console.log(fase2);
    
        const fase3 = await esperaAi(3, rand)
    }catch(e){
        console.log(e);
    }
}
executa();