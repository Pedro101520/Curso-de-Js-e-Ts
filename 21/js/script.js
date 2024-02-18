/*É bom escrever os codigos dentro de uma função, pois se importar alguma
biblioteca (Exemplo), não vai dar conflito, pois a variavel não vai ta no global
*/
function meuEscopo(){
    //Aqui serve para selecionar os elementos igual em CSS, para classe usa . e para ID usa #
    const Form = document.querySelector('.form'); 
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // Essa função, exibe um a mensagem, quando o formulario for enviado
    // Form.onsubmit = function(evento){
    //     Aqui serve para não enviar o formulario (O que vai fazer que não seja atualizado e os dados não se percam)
    //     evento.preventDefault();

    //     alert(1);
    //     console.log(1);
    // };

    //Maneira mais atualizada, de fazer com que o site não atualize
    // let contador = 1;
    // function recebeEventoForm(evento){
    //     evento.preventDefault();
    //     console.log(`Form não foi enviado ${contador}`);
    //     contador++;
    // }
    // Form.addEventListener('submit', recebeEventoForm);


    function recebeEventoForm(evento){
        evento.preventDefault();

        const Nome = Form.querySelector('.nome');
        const Sobrenome = Form.querySelector('.sobrenome');
        const Peso = Form.querySelector('.peso');
        const Altura = Form.querySelector('.altura');
        
        pessoas.push({
            Nome: Nome.value,
            Sobrenome: Sobrenome.value,
            Peso: Peso.value,
            Altura: Altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${Nome.value} ${Sobrenome.value} ${Peso.value} ${Altura.value}</p>`;

    }
    Form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();