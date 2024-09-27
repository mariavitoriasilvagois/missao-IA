const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual espírito de Bijuu o naruto habita dentro dele??",
        alternativas: [
            "Kurama",
            "Shukaku"
        ],
        correta: 0 // A primeira alternativa é a correta
    },
    {
        enunciado: "Death Note é o nome de um caderno com poderes de?",
        alternativas: [
            "Matar qualquer humano que tocá-lo",
            "Matar qualquer humano que tiver o nome escrito nele"
        ],
        correta: 1 // A segunda alternativa é a correta
    },
    {
        enunciado: "Em Dragon Ball ao pegar todas as esferas do dragão é possível?",
        alternativas: [
            "Virar um super Sayajin",
            "Um desejo"
        ],
        correta: 1
    },
    {
        enunciado: "Em Haikyuu qual é o número da camisa do Hinata?",
        alternativas: [
            "10",
            "1"
        ],
        correta: 0
    },
    {
        enunciado: "Quem é a primeira pessoa que entra na tripulação de Luffy?",
        alternativas: [
            "Zoro",
            "Nami"
        ],
        correta: 0
    }
];

let atual = 0;
let perguntaAtual;
let pontuacao = 0; // Inicie a pontuação em 0

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ''; // Limpa as alternativas anteriores

    // Cria botões para as alternativas
    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const botao = document.createElement('button');
        botao.textContent = alternativa;
        botao.addEventListener('click', () => verificaResposta(index));
        caixaAlternativas.appendChild(botao);
    });
}

function verificaResposta(selecionada) {
    if (selecionada === perguntaAtual.correta) {
        pontuacao++;
    }
    atual++;
    if (atual < perguntas.length) {
        mostraPergunta();
    } else {
        mostraResultado();
    }
}

function mostraResultado() {
    caixaPrincipal.style.display = 'none'; // Esconde a caixa de perguntas
    caixaResultado.style.display = 'block'; // Mostra a caixa de resultado
    setTimeout(() => caixaResultado.classList.add('mostrar'), 10); // Adiciona classe para animação
    textoResultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} perguntas!`;

    const botaoReiniciar = document.createElement('button');
    botaoReiniciar.textContent = 'Reiniciar';
    botaoReiniciar.addEventListener('click', () => {
        atual = 0;
        pontuacao = 0;
        caixaResultado.classList.remove('mostrar');
        caixaResultado.style.display = 'none';
        caixaPrincipal.style.display = 'block';
        mostraPergunta();
    });
    caixaResultado.innerHTML = ''; // Limpa conteúdo anterior
    caixaResultado.appendChild(textoResultado);
    caixaResultado.appendChild(botaoReiniciar);
}

// Inicializa a primeira pergunta
mostraPergunta();
