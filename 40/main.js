try{
    //Só é exibido, quando não tem erro
    console.log(a);
}catch(error){
    //Aqui só é executado quando tem erro
    console.log('Teve erro');
}finally{
    //Aqui é executado independente se haver ou não erro
    console.log('Finally');
}