                     // logs // 
function loginf(){
    alert(" site feito em 13/05/2022 ")
        alert(" loja de calçados / aula fundamentos web ")
        alert(" feito por: vitor Gabriel de Oliveira ")
}
 
                // barra de pesquisa // 

var search = ""

function send(){
    search = document.getElementById("bar").value;
    var error = document.getElementById("error")
    if (search == ""){
        error.style.display="flex"
        error.innerText=" caixa de pesquisa esta vazia"
    }else{
        error.style.display="flex"
        error.innerText="0 resultados para " + search
    }

}

function card1(){
    var blur = document.getElementById("size")
    var imgt1 = document.getElementById("closet1")
    var namet1 = document.getElementById("namet1")
    var btn = document.getElementById("btn")
    blur.style.width="100%"
    imgt1.style.display="block"
    namet1.style.display="block"
    btn.style.display="flex"
}
function btn(){
    var compra = window.prompt(" Qual seu nome? ")
    alert('ola ' + compra)
    var compra1 = window.prompt("você gostou da pagina? \n sim(s) não(n)")
    if(compra1 === "s"){
        alert("Que bom que gostou <3")
        confirm("sua compra esta sendo processada!")
    }else{
        prompt(" assim que pena, deixe um comentario para eu saber oque melhorar! <3 ")
        confirm("sua compra esta sendo processada!")
    }
}
