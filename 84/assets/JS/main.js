//Este código faz a mesma coisa que o da aula 83, só que com Fetch

document.addEventListener("click", e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if(tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
});

async function carregaPagina(el){
    try{
        const href = el.getAttribute("href");
        const response = await fetch(href);
        //Aqui estou assumindo que o erro será o 404
        if(response.status !== 200) throw new Error("Erro 404!");
    
        const html = await response.text();
        carregaResultado(html);
    }catch(e){
        console.log(e);
    }
}

function carregaResultado(response){
    const resutado = document.querySelector(".resultado");
    resutado.innerHTML = response;
}

