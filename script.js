function SalvarLink () {
    var lista = document.createElement("li")
    var descricaoLink = document.getElementById("NovoLink").value
    var Link = document.createTextNode(descricaoLink)
    li.appendChild(t)

    if (inputValue === '') {
      alert("Insira o Link a ser salvo!")
    } else {
      document.getElementById("Ul").appendChild(li)
    }

    document.getElementById("NovoLink").value = ""

    var span = document.createElement("salvarLink");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
