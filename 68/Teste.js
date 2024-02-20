function Area(lado1, lado2){
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.calcula = () => this.lado1 * this.lado2;
}

const quadrado = new Area(2, 2);
const retangulo = new Area(2, 4);

console.log(retangulo.calcula());