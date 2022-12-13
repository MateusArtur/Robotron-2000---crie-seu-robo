const robotron = document.querySelector("#robotron")
const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const estatisticas = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

const controle =  document.querySelectorAll("[data-controle]")

controle.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca)
    })
})


function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    }
    else {
        peca.value = parseInt(peca.value) + 1
    }
}

function atualizaEstatisticas(peca) {
    console.log(pecas[peca])
    estatisticas.forEach( (elemento) => {
        console.log(elemento.dataset.estatistica)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

const botaoSelecionaCor = document.querySelectorAll(".botao-seleciona-cor")
const carrosel = document.querySelector('.carousel')

function selecionaCorDoRobo () {
    botaoSelecionaCor.forEach( (elemento) => {
        elemento.addEventListener('click', (evento) => {
            if(evento) {
                const verificaButton = document.querySelectorAll(".botao-seleciona-cor")
                verificaButton.forEach( (elementos) =>{
                    if(elementos != elemento)
                        elementos.setAttribute('disabled', true)
                }) 
                if(elemento.classList) {
                    elemento.classList.add('botao-ativo')    
                }       
        }
    })
    })
}

selecionaCorDoRobo()
