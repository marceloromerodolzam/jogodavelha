const vezdojogador = document.querySelector(".vezdojogador");

let selecionado;

let jogador = "X";

let posicao = 
[

    [1,2,3],

    [4,5,6],

    [7,8,9],

    [1,4,7],

    [2,5,8],

    [3,6,9],

    [1,5,9],

    [3,5,7],

];

function iniciar() 
{

    selecionado = [];

    vezdojogador.innerHTML = `Jogador da vez ${jogador} `;

    document.querySelectorAll(".jogo button").forEach((item) =>
    {
        item.innerHTML = "";

        item.addEventListener("click", Novomovimento);

    });

}

iniciar();

function Novomovimento(e) 
{
    const index = e.target.getAttribute("data-i");
    
    e.target.innerHTML = jogador;

    e.target.removeEventListener("click", Novomovimento);

    selecionado[index] = jogador;

    setTimeout(() => 
    {

        checar();

    }, [100]);

    jogador = jogador === "X" ? "O" : "X";

    vezdojogador.innerHTML = `Jogador da vez ${jogador} `;

}

function checar()
{

    let jogadorproxmovimento = jogador === "X" ? "O" : "X";

    const items = selecionado

    .map((item, i) => [item, i])

    .filter((item) => item[0] === jogadorproxmovimento)

    .map((item) => item[1]);

    for (pos of posicao)
    {

        if(pos.every((item) => items.includes(item)))

        alert("Jogador'" + jogadorproxmovimento + "'ganhou!");

    }

    if(selecionado.filter((item) =>item).lenght===9)
    {

        alert("Empate");

        iniciar();

        return;

    }

}