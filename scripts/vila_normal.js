let textos = {};
let falasSmullyan = {};
let falasEsquerda1 = {};
let falasEsquerda2 = {};
let falasCentro = {};
let falasDireita1 = {};
let falasDireita2 = {};
let fundos = {};
let imagens = {};
let imagensDestaque = {};
let personagensSmullyan = {};
let personagensEsquerda1 = {};
let personagensEsquerda2 = {};
let personagensCentro = {};
let personagensDireita1 = {};
let personagensDireita2 = {};

const linguaAtual = localStorage.getItem('linguaEscolhida') || "pt";

///////////////escolha do ficheiro JSOn adequado//////////////////////////

fetch(`../linguas/falas_vila_normal_${linguaAtual}.json`)
  .then(response => response.json())
  .then(data => {
    textos = data.textos;
    falasSmullyan = data.falasSmullyan;
    falasEsquerda1 = data.falasEsquerda1;
    falasEsquerda2 = data.falasEsquerda2;
    falasCentro=data.falasCentro;
    falasDireita1 = data.falasDireita1;
    falasDireita2 = data.falasDireita2;
    fundos = data.fundos;
    imagens = data.imagens;
    imagensDestaque = data.imagensDestaque;
    personagensSmullyan = data.personagensSmullyan;
    personagensEsquerda1 = data.personagensEsquerda1;
    personagensEsquerda2 = data.personagensEsquerda2;
    personagensCentro=data.personagensCentro;
    personagensDireita1 = data.personagensDireita1;
    personagensDireita2 = data.personagensDireita2;

    atualizarConteudo();  // iniciar o jogo já com dados carregados
  })
  .catch(error => console.error('Erro a carregar o json:', error));


let indiceAtual = 0;


function atualizarConteudo() {
    // Altera fundo
    const fundo = fundos[indiceAtual] ?? "";
    document.body.style.backgroundImage = fundo ? `url('${fundo}')` : "none";

    // Texto no container
    const textoEl = document.getElementById("texto-container");
    textoEl.innerHTML = textos[indiceAtual] ?? "";
    if (!textos[indiceAtual] || textos[indiceAtual].trim() === "") {
      textoEl.style.display = "none"; // Esconde se vazio ou só espaços
  } else {
      textoEl.style.display = "block"; // Mostra se tiver texto
  }

    // Imagem do container
    const imagemEl = document.getElementById("imagem");
    const caminhoImagem = imagens[indiceAtual] ?? "";
    if (caminhoImagem.trim() !== "") {
        imagemEl.style.display = "block";
        imagemEl.src = caminhoImagem;
    } else {
        imagemEl.style.display = "none";
    }

    // Mostrar imagem da imperatriz apenas na cena 

    const divDestaque = document.getElementById("div-imagem-destaque");
    const imgDestaque = document.getElementById("img-destaque");
    const imagemAtual = imagensDestaque[indiceAtual];
    
    if (imagemAtual) {
        divDestaque.style.display = "block";
        imgDestaque.src = imagemAtual;
    } else {
        divDestaque.style.display = "none";
    }


    // Atualiza personagens (e esconde se vazio)
    const atualizarImagem = (id, src) => {
        const el = document.getElementById(id);
        if (src && src.trim() !== "") {
            el.style.display = "block";
            el.src = src;
        } else {
            el.style.display = "none";
        }
    };

    

    const mostrarBlocos = indiceAtual === 7;

    const blocosEl = document.getElementById("blocos-container");
    const cenarioEl = document.getElementById("cenario");
    const verificarBtn = document.getElementById("verificar");

    if (blocosEl) blocosEl.style.display = mostrarBlocos ? "block" : "none";
    if (cenarioEl) cenarioEl.style.display = mostrarBlocos ? "flex" : "none";
    if (verificarBtn) verificarBtn.style.display = mostrarBlocos ? "inline-block" : "none";

    if (mostrarBlocos && typeof adicionarBlocos === "function") {
        
    }
////////////////////////////////////////////////////

    function atualizarSlotInferior(id, vetor) {
        const el = document.getElementById(id);
        const img = document.createElement("img");
        const src = vetor[indiceAtual];
      
        el.innerHTML = ""; // limpa o slot
      
        if (src && src.trim() !== "") {
          img.src = src;
          el.appendChild(img);
        }
      }
      
      // Atualiza os slots inferiores
      atualizarSlotInferior("slotEsq1", personagensEsquerda1);
      atualizarSlotInferior("slotEsq2", personagensEsquerda2);
      atualizarSlotInferior("slotVazio", personagensCentro);  // slot central
      atualizarSlotInferior("slotDir1", personagensDireita1);
      atualizarSlotInferior("slotDir2", personagensDireita2);
      atualizarSlotInferior("slotSmullyan", personagensSmullyan);
      
//////////////////////////////////////////////
    


    // Balões de fala
    const atualizarTexto = (id, texto) => {
        const el = document.getElementById(id);
        if (!texto || texto.trim() === "") {
            el.style.display = "none"; // Esconde se vazio ou só espaços
        } else {
            el.innerHTML = texto; //lé os textos no .json como HTML

            el.style.display = "block"; // Mostra normalmente quando existe fala
        }

    };
    
    atualizarTexto("falaSmullyan", falasSmullyan[indiceAtual] ?? "");

    atualizarTexto("falaEsquerda1", falasEsquerda1[indiceAtual] ?? "");
    atualizarTexto("falaEsquerda2", falasEsquerda2[indiceAtual] ?? "");
    atualizarTexto("falaCentro", falasCentro[indiceAtual] ?? "");  // slot central
    atualizarTexto("falaDireita1", falasDireita1[indiceAtual] ?? "");
    atualizarTexto("falaDireita2", falasDireita2[indiceAtual] ?? "");

    const visor = document.getElementById("indice-visor");
    if (visor) {
      visor.textContent = `Etapa: ${indiceAtual}`;
    }

    ////////////////////////////////////////////alterar questionarios/////////////////////////////////////

    // CHAMA OS QUESTIONÁRIOS CONSOANTE O ÍNDICE, deve-se acrescentar if statments para novos questionários 1/3
    if (indiceAtual === 7) {
        iniciarQuestionario("situacao20");
      } else if (indiceAtual === 11) {
        iniciarQuestionario("situacao21");
      } else if (indiceAtual === 15) {
        iniciarQuestionario("situacao22");
      } else if (indiceAtual === 21) {
        iniciarQuestionario("situacao23");
      } 

      const indicesComSlots = [7, 11, 15, 21]; // actualizar onde aparecem os slots na linha de história 2/3

      if (!indicesComSlots.includes(indiceAtual)) {
        document.querySelectorAll(".slot").forEach(el => el.remove());
        const blocosContainer = document.getElementById("blocos-container");
        if (blocosContainer) blocosContainer.innerHTML = "";
      }
      
     
    // O valor de indiceAtual é o dos questionários ?, actualizar em conformidade com o 2/3 , 3/3
    document.getElementById("verificar").style.display = [7, 11, 15, 21].includes(indiceAtual)
      ? "block"
      : "none";

  /////////////////////////////////////////// fim de alterar questionáros///////////////////////////////////   
}

function mostrarProxima() {
    indiceAtual = (indiceAtual + 1) % Object.keys(textos).length;

    atualizarConteudo();
}

function mostrarAnterior() {
    indiceAtual = (indiceAtual - 1 + Object.keys(textos).length) % Object.keys(textos).length;

    atualizarConteudo();
}

window.onload = () => {
    atualizarConteudo();
};
