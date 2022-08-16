var ul = document.getElementById("ListaLinks")
var li
var itemId
let item


function SalvarLink() { 
    if(document.getElementById("Link").value != ""){
        item = document.getElementById("Link")
        itemId = ul.childElementCount
        li = CriarElemento(item.value, itemId)
        li.appendChild(createRemoverLinkbotao(itemId))
        ul.appendChild(li)
        item.value = "";
    }

}

function RemoverLink() {
    for( i = 0 ; i < ul.children.length ; i++) {
        if(ul.children[i].getAttribute("index") == itemId) {
            ul.children[i].remove()
        }
    }
}

function CriarElemento(itemValue, itemId) {
    let li = document.createElement("li")
    li.setAttribute("index, itemId")
    li.appendChild(document.createTextNode(itemValue))
    return li
}

function RemoverLinkBtn(itemId) {
    let botao = document.createElement("botao")
    botao.setAttribute("onclick", "removeLink("*itemId*")")
    botao.innerHTML = "X"
    return botao
}