
main();

function main(){

executar();

function executar(){
    let opcao = ""
    do{
        opcao = prompt("Bem vindo a calculadora Geométrica!" +
        "\nEscola qual cálculo deseja fazer:" + 
        "\n1. Área do triângulo" +
        "\n2. Área do retângulo" +
        "\n3. Área do quadrado" +
        "\n4. Área do trapézio" +
        "\n5. Área do circulo" +
        "\n6. Sair")

        switch (opcao){
            case "1":
                let base = Number(prompt("Qual a base?"))
                let altura = Number(prompt("Qual a altura?"))
                let resultado = areaTriangulo(base, altura);
                alert("A área do triângulo é " + resultado)
            break;

            case "2":
                base = Number(prompt ("Qual a base?"))
                altura = Number(prompt("Qual a altura?"))
                resultado = areaRetangulo(base, altura);
                alert("A área do retângulo é " + resultado)
            break;

            case "3":
                let lado = Number(prompt("Qual lado do quadrado?"))
                resultado = areaQuadrado(lado);
                alert("A área do quadrado é " + resultado)
            break

            case "4":
                let baseMaior = Number(prompt("Qual a base maior?"))
                let baseMenor = Number(prompt("Qual a base menor?"))
                altura = Number(prompt("Qual a altura?"))
                resultado = areaTrapezio(baseMaior, baseMenor, altura);
                alert("A área do trapézio é " + resultado)
            break;

            case "5":
                const pi = 3.14;
                let raio = Number(prompt("Qual raio do circulo?"))
                resultado = areaPi(pi, raio);
                alert("Área do circulo é " + resultado)
            break;

            case "6":
                alert("Saindo, chefs")
            break

            default:
                alert("Opção inválida")

            }
    } while (opcao !== "6")

};

function areaTriangulo(base, altura){
    
    let area = (base * altura) / 2
    return area;
};

function areaRetangulo(base, altura){
    
    let area = base * altura;
    return area;
};

function areaQuadrado(lado){
    
    let area = Math.pow(lado,2);
    return area;
};

function areaTrapezio(baseMaior, baseMenor, altura){
    
    let area = ((baseMaior + baseMenor) * altura) / 2
    return area;
};

function areaPi(pi, raio){
    let area = pi * (Math.pow(raio, 2))
    return area;
}

}