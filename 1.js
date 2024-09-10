let estudantes = [];
let nomeEstudante;

while (true) {
    nomeEstudante = prompt("Digite o nome do estudante ou 'PARE' para encerrar:");

    if (nomeEstudante.toUpperCase() === "PARE") {
        break;
    }

    estudantes.push(nomeEstudante);
}

console.log(`Quantidade de estudantes cadastrados: ${estudantes.length}`);
console.log("Lista de estudantes:");
estudantes.forEach((estudante, index) => {
    console.log(`${index + 1}. ${estudante}`);
});
