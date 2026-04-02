const produtos = {
	"123": {"nome": "lepo", "preco":9.90},
	"456": {"nome": "vapo", "preco":19.90},
	"789": {"nome": "la-ele", "preco":29.90},
	"147": {"nome": "ai dentu", "preco":39.90}
};

let carrinho = [];

const audio = new Audio("ai-ai-aiii-jake.mp3");

window.onload = () => {
	document.getElementById("cod").focus();
};

function addProduto() {
	const codElement = document.getElementById("cod");
	const qtdElement = document.getElementById("cod");

	const codValue = codElement.value;
	const qtdValue = qtdElement.value;

	if(!produtos[codValue]){
		alert("Produto não cadastrado");
		return;
	}

	const produtoBase = produtos[codValue]

	const item = {
		nome: produtoBase.nome,
		preco: produtoBase.preco,
		quantidade: qtdValue,
		subTot: produtoBase.preco * qtdValue
	};

	carrinho.push("item");
	audio.currentTime = 0;
	audio.play();

	codElement.value = "";
	qtdElement.value = 1;

    

}