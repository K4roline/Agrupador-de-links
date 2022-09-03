const botao = document.querySelector("salvarLink")
const lista = document.querySelector("Ul")

botao.addEventListener("click", () => criarElemento)

function SalvarLink() {
  const link = NovoLink.value 
  if (link == ""){
    elemento.classList.add("Adicione um link a ser salvo")
  }


  
}

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
