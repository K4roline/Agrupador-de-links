
function add() {
  var li = document.createElement('LI')
  var input_value = document.form_main.tituloLink.value
  var input_text = document.createTextNode(input_value)

  li.appendChild(input_text)
  document.querySelector('ul').appendChild(li)
  document.form_main.task.value = ""
  
}


// Deixar o campo do link funcionando e alinhado com o titulo 
// inserir o botao de excluir o link 
// inserir o acesso ao link com o click



