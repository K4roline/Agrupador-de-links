var ul = document.getElementById("Link")
var li
var itemId
let item


function SalvarLink() { 
    if(document.getElementById("Link").value != ""){
        item = document.getElementById("Link").value
        itemId = ul.childElementCount
        li = CriarElemento(itemId)
    }

}

function RemoverLink() {

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