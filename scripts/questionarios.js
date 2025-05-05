
// cálculo do left do slot
function centroDoSlot(leftPersonagem, larguraPersonagem = 300) {
    const left = parseInt(leftPersonagem); 
    return (left + larguraPersonagem / 2) + "px";
  }


// Estrutura base para vários questionários escaláveis Podem-se usar "escudeiro", "cavaleiro" e "qualquer"
const questionarios = {
  situacao1: {
    blocos: [
      { texto: "Cavaleiro", tipo: "cavaleiro" },
      { texto: "Escudeiro", tipo: "escudeiro" },
      
    ],
    slots: [
      {
        id: "slot1",
        resposta: "cavaleiro",
        left: "24vw",         // mais à esquerda (ajustado do 70px)
        bottom: "90vh"
      },
      {
        id: "slot2",
        resposta: "escudeiro",
        left: "40vw",         // meio do ecrã (ajustado do 580px)
        bottom: "90vh"
      }
    ]
  },
  situacao2: {
    blocos: [
      { texto: "Cavaleiro", tipo: "cavaleiro" },
      { texto: "Escudeiro", tipo: "escudeiro" },
      
    ],
    slots: [
      {
        id: "slot1",
        resposta: "escudeiro", //poderia ser "qualquer" se houvessem outras categorias
        left: "24vw",
        bottom: "86vh"
      },
      {
        id: "slot2",
        resposta: "cavaleiro",
        left: "38vw",
        bottom: "86vh"
      },
      {
        id: "slot3",
        resposta: "escudeiro",
        left: "68vw",
        bottom: "86vh"
      }
    ]
  },
  situacao3: {
    blocos: [
      { texto: "Cavaleiro", tipo: "cavaleiro" },
      { texto: "Escudeiro", tipo: "escudeiro" },
      
    ],
    slots: [
      {
        id: "slot1",
        resposta: "qualquer", //poderia ser "qualquer" se houvessem outras categorias
        left: "24vw",
        bottom: "86vh"
      },
      {
        id: "slot2",
        resposta: "qualquer",
        left: "38vw",
        bottom: "86vh"
      },
      {
        id: "slot3",
        resposta: "escudeiro",
        left: "68vw",
        bottom: "86vh"
      }
    ]
  },
  situacao4: {
    blocos: [
      { texto: "Cavaleiro", tipo: "cavaleiro" },
      { texto: "Escudeiro", tipo: "escudeiro" },
      
    ],
    slots: [
      {
        id: "slot1",
        resposta: "qualquer", //poderia ser "qualquer" se houvessem outras categorias
        left: "24vw",
        bottom: "86vh"
      },
      {
        id: "slot2",
        resposta: "qualquer",
        left: "38vw",
        bottom: "86vh"
      },
      {
        id: "slot3",
        resposta: "escudeiro",
        left: "68vw",
        bottom: "86vh"
      }
    ]
  },
  situacao20: {
    blocos: [
      { texto: "Cavaleiro", tipo: "cavaleiro" },
      { texto: "Escudeiro", tipo: "escudeiro" },
      { texto: "Normal", tipo: "normal" }
    ],
    slots: [
      {
        id: "slot1",
        resposta: "normal",
        left: "27%",         // mais à esquerda (ajustado do 70px)
        bottom: "90vh"
      },
      {
        id: "slot2",
        resposta: "normal",
        left: "38%",         // meio do ecrã (ajustado do 580px)
        bottom: "90vh"
      }
    ]
  },
  
  
  situacao21: {
    blocos: [
      { texto: "Cavaleiro", tipo: "cavaleiro" },
      { texto: "Escudeiro", tipo: "escudeiro" },
      { texto: "Normal", tipo: "normal" }
    ],
    slots: [
      {
        id: "slot1",
        resposta: "normal",
        left: "24vw",
        bottom: "90vh"
      },
      {
        id: "slot2",
        resposta: "normal",
        left: "38vw",
        bottom: "90vh"
      },
      {
        id: "slot3",
        resposta: "normal",
        left: "68%",
        bottom: "90vh"
      },
      {
        id: "slot4",
        resposta: "normal",
        left: "82%",
        bottom: "90vh"
      }
    ]
  },
  
  situacao22: {
    blocos: [
      { texto: "Cavaleiro", tipo: "cavaleiro" },
      { texto: "Escudeiro", tipo: "escudeiro" },
      { texto: "Normal", tipo: "normal" }
    ],
    slots: [
      {
        id: "slot1",
        resposta: "normal",
        left: "40%",
        bottom: "90vh"
      },
      {
        id: "slot2",
        resposta: "normal",
        left: "68%",
        bottom: "90vh"
      }
    ]
  },
  
  situacao23: {
    blocos: [
      { texto: "Cavaleiro", tipo: "cavaleiro" },
      { texto: "Escudeiro", tipo: "escudeiro" },
      { texto: "Normal", tipo: "normal" }
    ],
    slots: [
      {
        id: "slot1",
        resposta: "normal",
        left: "27%",
        bottom: "90vh"
      },
      {
        id: "slot2",
        resposta: "escudeiro",
        left: "40%",
        bottom: "90vh"
      },
      {
        id: "slot3",
        resposta: "cavaleiro",
        left: "68%",
        bottom: "90vh"
      }
    ]
  },
  situacao24: {
    blocos: [
      { texto: "Tipo V", tipo: "Tipo V" },
      { texto: "Tipo F", tipo: "Tipo F" },
      
    ],
    slots: [
      {
        id: "slot2",
        resposta: "Tipo F",
        left: "38vw",         // mais à esquerda (ajustado do 70px)
        bottom: "64vh"
      },
      {
        id: "slotVazio",
        resposta: "Tipo F",
        left: "53vw",         // meio do ecrã (ajustado do 580px)
        bottom: "64vh"
      }
    ]
  },
  situacao25: {
    blocos: [
      { texto: "Tipo V", tipo: "Tipo V" },
      { texto: "Tipo F", tipo: "Tipo F" },
      
    ],
    slots: [
      {
        id: "slot2",
        resposta: "Tipo F",
        left: "38vw",         // 
        bottom: "65vh"
      },
      {
        id: "slotVazio",
        resposta: "Tipo V",
        left: "53vw",         // 
        bottom: "65vh"
      }
    ]
  },
  situacao26: {
    blocos: [
      { texto: "Tipo V", tipo: "Tipo V" },
      { texto: "Tipo F", tipo: "Tipo F" },
      
    ],
    slots: [
      {
        id: "slotVazio",
        resposta: "Tipo V",
        left: "46vw",         // 
        bottom: "65vh"
      }
    ]
  },
  situacao28: {    //Ilha dos Mortos Vivos, o habitante é zumbi ou humano
    blocos: [     // blocos arrastáveis, zumbi ou humano
      { texto: "Zumbi", tipo: "Zumbi" },
      { texto: "Humano", tipo: "Humano" },
      
    ],
    slots: [ //só tem um slot
      {
        id: "slot3",
        resposta: "Humano", //resposta correcta
        left: "68%",
        bottom: "65vh" //slot ajustado ao meio da personagem
      }
    ]
  },
  situacao29: {    //Ilha dos Mortos Vivos, o habitante é zumbi ou humano
    blocos: [     // blocos arrastáveis, zumbi ou humano
      { texto: "Zumbi", tipo: "Zumbi" },
      { texto: "Humano", tipo: "Humano" },
      
    ],
    slots: [ //só tem um slot
      {
        id: "slot3",
        resposta: "Humano", //Resposta correcta
        left: "68%",
        bottom: "65vh" //slot ajustado ao meio da personagem
      }
    ]
  },
  situacao46: {
    blocos: [
      { texto: "segunda", tipo: "segunda" },
      { texto: "terça", tipo: "terça" },    
      { texto: "quarta", tipo: "quarta" },
      { texto: "quinta", tipo: "quinta" },
      { texto: "sexta", tipo: "sexta" },
      { texto: "sábado", tipo: "sábado" },
      { texto: "domingo", tipo: "domingo" },
      
    ],
    slots: [
      {
        id: "slot1",
        resposta: "quinta", //poderia ser "qualquer" se houvessem outras categorias
        left: "46vw",
        bottom: "60vh"
      }
    ]
  }
  
};
  
function iniciarQuestionario(id) {
    const q = questionarios[id];
    if (!q) {
      console.error(`Questionário "${id}" não existe.`);
      return;
    }
    adicionarBlocos(q.blocos);
    adicionarSlots(q.slots, id); //  passamos o id do questionário
    document.getElementById("verificar").onclick = verificarResposta;

  
  }
 
    
  
function adicionarBlocos(blocos) {
    const container = document.getElementById("blocos-container");
    container.innerHTML = "";
    container.style.display = "flex";
  
blocos.forEach(b => {
      const bloco = document.createElement("div");
      bloco.className = "bloco";
      bloco.textContent = b.texto;
      bloco.dataset.tipo = b.tipo;
      bloco.draggable = true;
  
      bloco.addEventListener("dragstart", e => {
        e.dataTransfer.setData("tipo", b.tipo);
    }
);
  
      container.appendChild(bloco);
    });
}
  
  function adicionarSlots(slots, prefixo) {
    document.querySelectorAll(".slot").forEach(el => el.remove());
  
    slots.forEach((s, index) =>{
      const slot = document.createElement("div");
      slot.className = "slot";
      //slot.id = s.id;
      slot.id = `${prefixo}-slot${index + 1}`; //  ID único
      slot.dataset.resposta = s.resposta;
      slot.textContent = "Arrasta aqui";
  
      slot.style.position = "fixed";
      slot.style.left = s.left;
      slot.style.bottom = s.bottom;
  
      slot.addEventListener("dragover", e => e.preventDefault());
      slot.addEventListener("drop", e => {
        e.preventDefault();
        const tipo = e.dataTransfer.getData("tipo");
        slot.textContent = tipo;
        slot.dataset.selecionado = tipo;
      });
  
      document.body.appendChild(slot);
    });
  }
  
  function verificarResposta() {
    const slots = document.querySelectorAll('.slot');
    let acertouTudo = true;
  
    slots.forEach(slot => {
      // Ignorar verificação se o slot aceitar qualquer resposta
      if (slot.dataset.resposta === "qualquer") {
        return; // Continua para o próximo slot
    }
      if (slot.dataset.selecionado !== slot.dataset.resposta) {
        acertouTudo = false;
      }
    });
  
    if (acertouTudo) {
      mostrarPopup("../assets/images/sucesso.png", " Acertaste tudo!");
    } else {
      mostrarPopup("../assets/images/insucesso.png", " Tenta novamente.");
    }
  }
  
  function mostrarPopup(imagemSrc, mensagem) {
    const popup = document.getElementById("popup");
    const mensagemEl = document.getElementById("popup-mensagem");
    const img = popup.querySelector("img");
  
    mensagemEl.textContent = mensagem;
    img.src = imagemSrc;
  
    popup.style.display = "flex";
  }
  
  function fecharPopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  
