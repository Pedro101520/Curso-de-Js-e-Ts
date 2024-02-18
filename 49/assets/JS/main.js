//Calculadora feita com factory function, para treinar este conteudo
function criaCalculadora(){
    return {
        display: document.querySelector('.display'),

        inicia: function(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        //Método para exibir o resultado quando o enter for pressionado
        pressionaEnter(){
            //Aqui vai usar Arrow Function, pelo mesmo motivo do código mais a frente, (Para não perder o this da função)
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        //Método do botão de igual, para realizar as contas
        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida');
                    return;
                }

                this.display.value = conta;
            }catch(err){
                alert('Conta inválida');
                return;
            }
        },

        //Método que limpa o display da calculadora
        clearDisplay(){
            this.display.value = '';
        },

        //Método que apaga somente um digito do display
        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },


        //Este metodo verifica se elementos que contenham a classe btn, foram clicados, esta função verifica dentro de todo o document
        //Esses elementos são os botões
        cliqueBotoes(){
            // this -> calculadora

            //Aqui a Arrow Function foi uma escolha, para conseguir manter o this que é a calculadora
            //sem a interferencia da função document
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')){
                    //Este método precisa do this, pois ele está dentro de outro método
                    //o innerText serve para pegar o texto do elemento e utilizar como dado
                    this.btnParaDisplay(el.innerText);
                }

                //Aqui vai verificar se dentro do document o botão btn-clear foi clicado
                //É essa a varificação que acontece com os botões dentro deste código, mas no caso só acontece algum evento quando tem alguma condição
                //que execute algo
                if(el.classList.contains('btn-clear')){
                    //Ai se o botão clicado conter a classe correspondente, a classe para limpar o display é chamada
                    this.clearDisplay();
                }

                //Esta funçaõ é para apagar somente um digito do display por vez
                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                //Aqui é a função que chama o método de igual
                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }

            });
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        },
    };
}

const calculadora = criaCalculadora();

//Chama o método inicia
calculadora.inicia();