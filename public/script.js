// B.1. Definição dos dados (JSON)
const catalogo = [
    { id: 1, titulo: "O Poderoso Chefão", tipo: "filme", ano: 1972, generos: ["Crime", "Drama"], nota: 9.2, assistido: true },
    { id: 2, titulo: "Breaking Bad", tipo: "serie", ano: 2008, generos: ["Crime", "Drama", "Suspense"], nota: 9.5, assistido: true },
    { id: 3, titulo: "Interestelar", tipo: "filme", ano: 2014, generos: ["Ficção Científica"], nota: 8.7, assistido: true },
    { id: 4, titulo: "Succession", tipo: "serie", ano: 2018, generos: ["Drama", "Sátira"], nota: 8.9, assistido: false },
    { id: 5, titulo: "Pulp Fiction", tipo: "filme", ano: 1994, generos: ["Crime"], nota: 8.9, assistido: false },
    { id: 6, titulo: "The Bear", tipo: "serie", ano: 2022, generos: ["Drama", "Comédia"], nota: 8.4, assistido: true }
];

// B.2. Acesso e leitura dos dados
console.log("Catálogo Completo:", catalogo);
console.log("Título do primeiro item:", catalogo[0].titulo);
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);

const segundoGenero = catalogo[2].generos[1];
console.log("Segundo gênero do terceiro item:", segundoGenero || "Este item possui apenas um gênero.");

// B.3. Iterações com iterators
console.log("\n--- A) Listagem com forEach ---");
catalogo.forEach(item => console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`));

console.log("\n--- B) Transformação com map ---");
const titulosEmCaixaAlta = catalogo.map(item => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);

console.log("\n--- C) Seleção com filter ---");
const naoAssistidos = catalogo.filter(item => item.assistido === false);
console.log(`Quantidade de itens não assistidos: ${naoAssistidos.length}`);

console.log("\n--- D) Busca com find ---");
const notaAlta = catalogo.find(item => item.nota >= 9);
if (notaAlta) {
    console.log(`Encontrado: ${notaAlta.titulo} (Nota: ${notaAlta.nota})`);
} else {
    console.log("Nenhum item com nota >= 9 encontrado.");
}

console.log("\n--- E) Agregação com reduce ---");
const mediaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0) / catalogo.length;
const assistidos = catalogo.filter(i => i.assistido);
const mediaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0) / assistidos.length;

console.log(`Média Geral: ${mediaGeral.toFixed(2)}`);
console.log(`Média Assistidos: ${mediaAssistidos.toFixed(2)}`);

console.log("\n--- F) Checagens com some e every ---");
const temAntigo = catalogo.some(item => item.ano < 2000);
const todosTemGenero = catalogo.every(item => item.generos.length >= 1);
console.log(`Existe item pré-2000? ${temAntigo}`);
console.log(`Todos têm pelo menos 1 gênero? ${todosTemGenero}`);

// B.4. Saída na tela (DOM simples)
const output = document.getElementById("output");
const qtdFilmes = catalogo.filter(i => i.tipo === "filme").length;
const qtdSeries = catalogo.filter(i => i.tipo === "serie").length;

// Criando ranking (cópia + ordenação)
const ranking = [...catalogo]
    .sort((a, b) => b.nota - a.nota)
    .slice(0, 3);

output.innerHTML = `
    <h2>Resumo do Catálogo</h2>
    <div class="resumo-item">📺 <strong>Total:</strong> ${catalogo.length} itens</div>
    <div class="resumo-item">🎬 <strong>Filmes:</strong> ${qtdFilmes} | 🎥 <strong>Séries:</strong> ${qtdSeries}</div>
    <div class="resumo-item">⏳ <strong>Não assistidos:</strong> ${naoAssistidos.length}</div>
    <div class="resumo-item">⭐ <strong>Média Geral:</strong> ${mediaGeral.toFixed(2)}</div>

    <h3>🏆 Top 3 Ranking</h3>
    <ul class="ranking-list">
        ${ranking.map(item => `
            <li class="ranking-item">
                <span>${item.titulo}</span>
                <span class="nota-badge">${item.nota}</span>
            </li>
        `).join('')}
    </ul>
`;