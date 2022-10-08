
function add() {
  var li = document.createElement('LI')
  var input_value = document.getElementById(tituloLink).value
  var input_value = document.getElementById(Link).value
  var input_text = document.createTextNode(input_value)

  li.appendChild(input_text)
  document.querySelector('ul').appendChild(li)
  document.form.tituloLink.value = ""
  document.form.Link.value = ""
}



// function add() {
//   var li = document.createElement('LI')
//   var input_value = document.tituloLink.value
//   var input_value = document.Link.value
//   var input_text = document.createTextNode(input_value)

//   li.appendChild(input_text)
//   document.querySelector('ul').appendChild(li)
//   document.form.tituloLink.value = ""
//   document.form.Link.value = ""
// }




