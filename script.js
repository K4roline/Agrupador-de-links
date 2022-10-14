
function add() {
  var li = document.createElement('li')
  // var input_value = document.form.tituloLink.value
  var input_value = document.form.Link.value
  var input_text = document.createTextNode(input_value)

  li.appendChild(input_text)
  document.querySelector('ul').appendChild(li)
  document.form.Link.value = ""
  }

  // var botao = document.createElement('button')

  // botao.innerHTML = 'Excluir'

  // campo_botao.addEventListener("click", function() {
  // linha.parentNode.parentNode.removeChild(linha.parentNode)
  // })
  





