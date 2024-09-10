let planetas = ["Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"];
let planetaInformado = prompt("Digite o nome de um planeta:");

if (planetas.includes(planetaInformado)) {
    console.log(`${planetaInformado} está na lista de planetas.`);
} else {
    console.log(`${planetaInformado} não está na lista de planetas.`);
}
