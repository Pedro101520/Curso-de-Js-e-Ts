//Aqui faz uma requisição, de pagina HTML, para exibi-las na página princila sem a necessidade de recarregar
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();
    
        //Essa parte verifica se a requisição foi um sucesso de acordo com o código HTTP
        xhr.addEventListener("load", () => {
            if(xhr.status >= 200 && xhr.status < 300){
               resolve(xhr.responseText);
            }else{
                reject(xhr.statusText);
            }
        });
    });
};

document.addEventListener("click", e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el){
    const href = el.getAttribute("href");

    const objConfig = {
        method: "GET",
        url: href,
    };

    try {
        const response = await request(objConfig);
        carregaResultado(response);
    }catch(e){
        console.log(e);
    }


}

function carregaResultado(response){
    const resutado = document.querySelector(".resultado");
    resutado.innerHTML = response;
}