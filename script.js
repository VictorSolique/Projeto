// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto {
    constructor(nome, dataCadastro, descricao, preco) {
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao;
        this.preco = preco;
    }
    mostrarProdutos() {
        return this.nome +" "+ this.dataCadastro+" "+ this.descricao+" "+ this.preco;
    }
}

class ProdutoDestaque extends Produto {
    constructor(imgDestaque, nome, dataCadastro, descricao, preco) {
        super(nome, dataCadastro, descricao, preco);
        this.imgDestaque = imgDestaque;
    }
    mostrarProdDestaque() {
        return this.imgDestaque+" "+ this.nome+" "+ this.descricao;
    }
}


const produto = new Produto("Coco Ralado em Flocos", "01-04-2022", "O coco é um dos alimentos mais nutritivos para a nossa saúde.", "R$ 39/Kg");
const prodDestaque = new ProdutoDestaque("https://http2.mlstatic.com/D_NQ_NP_952582-MLB28262317631_092018-O.jpg");

console.log(produto.mostrarProdutos(), prodDestaque.mostrarProdDestaque());

let saidaPDest = document.getElementById("produto-destaque");
saidaPDest.innerHTML = 
`<img src='${prodDestaque.mostrarProdDestaque()}'/> <br>
 <h2>${produto.nome} <br> ${produto.descricao} <br><br> <span>${produto.dataCadastro} <br> ${produto.preco}</span> <h2>`;




