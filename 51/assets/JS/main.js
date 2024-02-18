//É a mesma calculadora da aula 49, mas convertida em função construtora
function Calculadora(){
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        this.display.addEventListener('keypress', e => {
            if(e.keyCode !== 13) return;
            this.realizaConta();
        });
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);
            if(!conta){
                alert('Conta Invalida');
                return;
            }
            this.display.value = conta;
        }catch(e){
            alert('Conta Invalida');
            return;
        }
    }

    //Aqui pega o texto do botão, e o transforma em dado, para conseguir fazer os calculos
    //A funçao abaixo, está reduzida
    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.clear = () => this.display.value = '';

    this.del = () => this.display.value = this.display.value.slice(0, -1);
}

const calculadora = new Calculadora();
calculadora.inicia();