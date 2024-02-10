import menu from "readline-sync"; //Import readline

//Coleção de objetos
let valores_gerais = [
    { salario: 510.00, ipca: 5.91, ano: 2010 },
    { salario: 545.00, ipca: 6.50, ano: 2011 },
    { salario: 622.00, ipca: 5.84, ano: 2012 },
    { salario: 678.00, ipca: 5.91, ano: 2013 },
    { salario: 724.00, ipca: 6.41, ano: 2014 },
    { salario: 788.00, ipca: 10.67, ano: 2015 },
    { salario: 880.00, ipca: 6.29, ano: 2016 },
    { salario: 937.00, ipca: 2.95, ano: 2017 },
    { salario: 954.00, ipca: 3.75, ano: 2018 },
    { salario: 998.00, ipca: 4.31, ano: 2019 },
    { salario: 1045.00, ipca: 4.52, ano: 2020 }
];

//Menu
console.log(`Projeto missão 19: Aplicação que faz comparação entre salário x inflação \n`);
console.log(`Escolha uma das opções: \n`);
console.log(`1 - Listar os salários minímos de 2010 à 2020`);
console.log(`2 - Listar o índice IPCA de 2010 à 2020`);
console.log(`3 - Comparação entre o percentual de aumento salarial e o IPCA \n`);

let menuQuestao = menu.question(`Digite o número referenta a informação desejada: `);
console.log(`\n`);

//condicional para execução
if (Number(menuQuestao) == 1) {
    for (let index of valores_gerais) {
        let valorSalario = index.salario;
        let valorAno = index.ano;

        console.log(`${`Ano: `.padEnd(40, "-")} ${valorAno}`);
        console.log(`${`Salário Mínimo: `.padEnd(40, "-")} R$ ${valorSalario.toFixed(2).replace(".", ",")}\n`);
    }

} else if (Number(menuQuestao) == 2) {
    for (let index2 of valores_gerais) {
        let valorIpca = index2.ipca;
        let valorAno = index2.ano;

        console.log(`${`Ano: `.padEnd(40, "-")} ${valorAno}`);
        console.log(`${`Inflação IPCA: `.padEnd(40, "-")} ${valorIpca.toFixed(2).replace("." , ",")}%\n`);
    }
    
} else if (Number(menuQuestao) == 3) {
    for (let index3 = 0; index3 < valores_gerais.length; index3++) {
        let valorAno = valores_gerais[index3].ano;
        let valorSalario = valores_gerais[index3].salario;
        let valorIcpa = valores_gerais[index3].ipca;

        let crescimento = 0;

        if (index3 > 0) {
            let diferencaSalario = valorSalario - valores_gerais[index3 - 1].salario;

            crescimento = (diferencaSalario / valores_gerais[index3 -1].salario) * 100;
        }

        console.log(`${`Ano: `.padEnd(40, "-")} ${valorAno}`);
        console.log(`${`Salário mínimo: `.padEnd(40, "-")} R$ ${valorSalario.toFixed(2).replace("." , ",")}`);
        console.log(`${`Crescimento Salarial: `.padEnd(40, "-")} ${crescimento.toFixed(2).replace("." , ",")}%`);
        console.log(`${`Inflação IPCA: `.padEnd(40, "-")} ${valorIcpa.toFixed(2).replace("." , ",")}%\n`);
    }
} else {
    console.log(`Opção Inválida!!`);
}