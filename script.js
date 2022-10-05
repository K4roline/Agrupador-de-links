
function add() {
  var li = document.createElement('LI')
  var input_value = document.form_titulo.tituloLink.value
  var input_value = document.form_link.Link.value
  var input_text = document.createTextNode(input_value)

  li.appendChild(input_text)
  document.querySelector('ul').appendChild(li)
  document.form_titulo.task.value = ""
  document.form_link.task.value = ""
  
}






