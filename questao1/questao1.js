// Criar um array e percorrê-lo utilizando o loop for
// a. Crie um array com o nome "nomes" e adicione 4 nomes de
// pessoas que você conhece
// b. Utilize o loop for para percorrer o array e exibir os nomes na
// tela

const nomes = ["Ândria", "Leonardo", "Alan", "Richardson"]

for (let nome of nomes) {
    document.write(nome + " ")
}

for(let contador = 0; contador < nomes.length; contador++) {
    document.write(`<p>${nomes[contador]}</p>`)
}
