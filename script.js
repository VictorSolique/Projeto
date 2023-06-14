// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto {
    constructor(nome, dataCadastro, descricao, preco) {
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao;
        this.preco = preco;
    }
    mostrarProdutos() {
        try {
          return this.atributos();
        }
        catch(erro) {
          console.log(erro);
        }
        return this.nome +" "+ this.dataCadastro+" "+ this.descricao+" "+ this.preco;
    }
    atributos() {
    if(this.nome != "" && this.dataCadastro != "" && this.descricao != "" && this.preco != "") {
      return {
        nome: this.nome,
        dataCadastro: this.dataCadastro,
        descricao: this.descricao,
        preco: this.preco        
      };
    }
    else
      throw new MeuErro("Erro, algum campo não foi preenchido.");
    
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


const produtoDest = new Produto("Coco Ralado em Flocos", "01-04-2022", "O coco é um dos alimentos mais nutritivos para a nossa saúde.", "R$ 39/Kg");
const prodDestaque = new ProdutoDestaque("https://http2.mlstatic.com/D_NQ_NP_952582-MLB28262317631_092018-O.jpg");

const produto1 = new Produto("Pessêgo Aurora", "23-05-2023", "O pêssego é rico em fibras, bom para o funcionamento do intestino. Contém minerais como fósforo, magnésio, manganês, cobre, iodo e ferro.", "R$ 36/Kg");

const produto2 = new Produto("Linguiça Apimentada", "24-03-2023", "Suculenta, com ingredientes especialmente selecionados e muito mais sabor.", "R$ 230/Kg");

const produto3 = new Produto("Arroz Biju", "24-03-2023", "Numa refeição completa e equilibrada, para um adulto, O arroz é um alimento que preenche cerca de ¼ do prato (cerca de 140g).", "R$ 20,5/5Kg");


console.log(produtoDest.mostrarProdutos(), prodDestaque.mostrarProdDestaque());

let saidaPDest = document.getElementById("produto-destaque");
saidaPDest.innerHTML = 
` 

<div class="d-flex justify-content-center">
    <div class="card mb-3" style="max-width: 90%;">
        <div class="row g-0">
            <div class="col-md-4">
            <img src='${prodDestaque.mostrarProdDestaque()}' class="img-fluid rounded-start">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title fs-2">${produtoDest.nome}</h5>
                <p class="card-text fs-3 fw-light">${produtoDest.descricao} <br> <span class="text-warning fs-4 fw-normal">${produtoDest.preco}</span>  </p>
                <p class="card-text"><small class="text-body-secondary">${produtoDest.dataCadastro}</small></p>
            </div>
            </div>
        </div>
        </div>
    </div>
</div>
<br><br>
 `;

 let saidaProd = document.getElementById("produtos");
 saidaProd.innerHTML = 
 `

 <div class="container text-center">
 <div class="row">
   <div class="col">
       <div class="card" style="width: 18rem;">
           <div class="card-body">
               <h5 class="card-title">${produto1.nome}</h5>
           <p class="card-text">${produto1.descricao}</p>
           <a href="#" class="text-warning">${produto1.preco}</a>
           </div>
       </div>
   </div>
   <div class="col">
       <div class="card" style="width: 18rem;">
           <div class="card-body">
               <h5 class="card-title">${produto2.nome}</h5>
           <p class="card-text">${produto2.descricao}</p>
           <a href="#" class="text-warning">${produto2.preco}</a>
           </div>
       </div>
   </div>
   <div class="col">
       <div class="card" style="width: 18rem;">
           <div class="card-body">
               <h5 class="card-title">${produto3.nome}</h5>
           <p class="card-text">${produto3.descricao}</p>
           <a href="#" class="text-warning">${produto3.preco}</a>
           </div>
       </div>
   </div>
 </div>
</div>
<br><br><br><br>

 `;




