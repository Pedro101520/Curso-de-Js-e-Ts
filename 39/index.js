function soma(x, y){
    if(typeof(x) !== 'number' || typeof(y) !== 'number'){
       
        /*
           Essa parte do codigo (throw) serve para exibir alguma frase que eu escrever para erro,
           se colocar o new ReferenceError, o erro vai aparecer igual ao erro normal do JavaScript 
        */
        throw new ReferenceError('x e y precisam ser erros');
    }
}

//Auqi vai tratar o erro, com o Try e o Catch
try{
    console.log(soma(1, 2));
    console.log(soma('1', 2));
}catch(error){
    //Não é bom exibir o erro para o usuario
    console.log(error);
}