var Link = []

function salvarLink() {
    var descricaoLink = document.getElementById("NovoLink").value
    var Link = {
        id: idGenerator(),
        data: {
            descricao: descricaoLink 
        }
    }
    Link.push(Link)
    updateScreen()
}

function updateScreen() {
    var lista = "<ul>"
        Link.forEach((Link=>{
        lista += "<li id-data=" + Link.id + ">" + Link.data.descricao + "</li>"
    }))

        lista += "</ul>"
        document.getElementById("list").innerHTML = lista
        document.getElementById("NovoLink").value = ""
}
