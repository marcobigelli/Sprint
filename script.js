
const produtosLista = document.querySelector(".produtosLista")
const listaProdutos = document.querySelector(".listaProdutos")

//Cria o produto
function criarNichoProduto(produto){   
    const tagLi  = document.createElement("li")   
    tagLi.classList.add("NichoProduto")
        tagLi.innerHTML = `
        <img src="${produto.image}" alt="${produto.nome}">
        <h3>${produto.nome}</h3>
        <p>R$ ${produto.preco}</p>
        <button type="button" id="${produto.id}">Adicionar</button>
    `
    return tagLi
}

//Replica o produto do array produtos.js
function listarProdutos(listaProdutos){
    for(let i  = 0; i<listaProdutos.length; i++){        
        const produto = listaProdutos[i]
        const NichoMontado = criarNichoProduto(produto)       
        produtosLista.appendChild(NichoMontado)
    }
}
listarProdutos(produtos)

