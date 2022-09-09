var button = document.createElement("Ul")
var inputValue = document.getElementById("NovoLink").value
var addButton = document.getElementsByTagName("button")
var lista = document.createElement("Ul")

  button.addEventListener("click", () => criarElemento)

    if (inputValue === '') {
      const lista = NovoLink.value
    alert("Insira o Link a ser salvo!") }
     else {
      document.getElementById("Ul").appendChild(li)
    }

  var divItens = document.createElement("div")
  divItens.classList.add("form-div-itens")
  lista.appendChild(divItens)

  var elemento = document.createElement("li")
  elemento.classList.add("form-li")
  elemento.innerHTML = lista

  divItens.appendChild(elemento)
  divItens.appendChild(tagInput)
  

// function SalvarLink () {
//     var li = document.createElement("li")
//     var inputValue = document.getElementById("NovoLink").value
//     var addButton = document.getElementsByTagName("button")
//     var t = document.createTextNode("inputValue")
//     li.appendChild(t)

//     if (inputValue === '') {
//       alert("Insira o Link a ser salvo!")
//     } else {
//       document.getElementById("Ul").appendChild(li)
//     }

//     document.getElementById("NovoLink").value = ""

//     var span = document.createElement("SPAN")
//     var txt = document.createTextNode("\u00D7") // multiplica o item
//     span.className = "close"
//     span.appendChild(txt)
//     li.appendChild(span)
  
//     for (i = 0; i < close.length; i++) {
//       close[i].onclick = function() {
//         var div = this.parentElement
//         div.style.display = "none"
//       }
//     }
//   }
