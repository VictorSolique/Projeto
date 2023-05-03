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


const produto = new Produto("Nade", "01-04-2015", "Soro biologico contido em um objeto cilindrico", 80);
const prodDestaque = new ProdutoDestaque("https://www.nicepng.com/png/detail/149-1490977_a-biotic-grenade-ana-biotic-grenade.png")

console.log(produto.mostrarProdutos(), prodDestaque.mostrarProdDestaque());


