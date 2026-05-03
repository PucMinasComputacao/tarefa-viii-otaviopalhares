// ==========================================
// B.1. Definição dos dados (JSON)
// ==========================================
const catalogo = [
    { id: 1, titulo: "O Poderoso Chefão", tipo: "filme", ano: 1972, generos: ["Crime", "Drama"], nota: 9.2, assistido: true },
    { id: 2, titulo: "Breaking Bad", tipo: "serie", ano: 2008, generos: ["Crime", "Drama", "Thriller"], nota: 9.5, assistido: true },
    { id: 3, titulo: "Interestelar", tipo: "filme", ano: 2014, generos: ["Ficção Científica"], nota: 8.7, assistido: true },
    { id: 4, titulo: "Dark", tipo: "serie", ano: 2017, generos: ["Mistério", "Sci-Fi"], nota: 8.8, assistido: false },
    { id: 5, titulo: "Pulp Fiction", tipo: "filme", ano: 1994, generos: ["Crime"], nota: 8.9, assistido: false },
    { id: 6, titulo: "The Bear", tipo: "serie", ano: 2022, generos: ["Drama", "Comédia"], nota: 8.4, assistido: true }
];

// ==========================================
// B.2. Acesso e leitura dos dados
// ==========================================
console.log("--- Estrutura do Catálogo ---");
console.log(catalogo);

console.log("Título do primeiro item:", catalogo[0].titulo);
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

const terceiroItemGenero2 = catalogo[2].generos[1];
if (terceiroItemGenero2) {
    console.log("Segundo gênero do terceiro item:", terceiroItemGenero2);
} else {
    console.log("O terceiro item possui apenas um gênero listado.");
}

// ==========================================
// B.3. Iterações com iterators
// ==========================================

// A) Listagem com forEach
console.log("\n--- Listagem de Títulos ---");
catalogo.forEach(item => {
    console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});

// B) Transformação com map
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log("\nTítulos em Maiúsculo:", titulosEmCaixaAlta);

// C) Seleção com filter
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log(`\nQuantidade de itens não assistidos: ${naoAssistidos.length}`);

// D) Busca com find
const excelente = catalogo.find(item => item.nota >= 9);
console.log("\nBusca nota >= 9:");
if (excelente) {
    console.log(`Encontrado: ${excelente.titulo} (Nota: ${excelente.nota})`);
} else {
    console.log("Nenhum item com nota superior a 9 encontrado.");
}

// E) Agregação com reduce
const mediaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;

const assistidos = catalogo.filter(item => item.assistido);
const mediaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0) / assistidos.length;

console.log(`\nMédia Geral de Notas: ${mediaGeral.toFixed(2)}`);
console.log(`Média de Notas (Assistidos): ${mediaAssistidos.toFixed(2)}`);

// F) Checagens com some e every
const temAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length >= 1);

console.log("\n--- Checagens ---");
console.log("Existe algum item anterior ao ano 2000?", temAntigo ? "Sim" : "Não");
console.log("Todos os itens possuem pelo menos um gênero?", todosTemGenero ? "Sim" : "Não");

// ==========================================
// B.4. Saída na tela (DOM simples)
// ==========================================
const outputDiv = document.getElementById("output");

const totalFilmes = catalogo.filter(i => i.tipo === "filme").length;
const totalSeries = catalogo.filter(i => i.tipo === "serie").length;

// Criar Ranking (Cópia para não alterar o original)
const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

let rankingHTML = "<ul>";
ranking.forEach(item => {
    rankingHTML += `<li>${item.titulo} - <strong>${item.nota}</strong></li>`;
});
rankingHTML += "</ul>";

outputDiv.innerHTML = `
    <h2>Resumo do Catálogo</h2>
    <p><span class="stat">Total de itens:</span> ${catalogo.length}</p>
    <p><span class="stat">Filmes:</span> ${totalFilmes} | <span class="stat">Séries:</span> ${totalSeries}</p>
    <p><span class="stat">Não assistidos:</span> ${naoAssistidos.length}</p>
    <p><span class="stat">Média Geral:</span> ${mediaGeral.toFixed(2)}</p>
    <h3>Top 3 Ranking</h3>
    ${rankingHTML}
`;