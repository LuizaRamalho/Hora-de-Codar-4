let frutas = ["Banana", "Maçã", "Laranja", "Manga", "Uva"];

while (frutas.length > 0) {
    console.log("Lista de compras:", frutas);

    let frutaInformada = prompt("Digite o nome de uma fruta para remover:");

    let index = frutas.indexOf(frutaInformada);

    if (index !== -1) {
        frutas.splice(index, 1);
        console.log("Fruta foi retirada da lista.");
    } else {
        console.log("Fruta indisponível no nosso mercado.");
    }

    if (frutas.length === 0) {
        console.log("Lista de compras finalizada.");
    }
}
