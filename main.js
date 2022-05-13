                     // logs // 
function log(){
    alert(" site feito em 13/05/2022 ")
        alert(" loja de calçados / aula fundamentos web ")
        alert(" feito por: vitor Gabriel de Oliveira ")
}

function home(){
    var home = document.getElementById("home")
    home.style.display="flex"
}

function profile(){
    var profile = document.getElementById("profile")
    profile.style.display="flex"
}

function logout(){
    var logout = document.getElementById("logout")
    logout.style.display="flex"
}



function log(){
    var home = document.getElementById("home")
    home.style.display="none"

    var profile = document.getElementById("profile")
    profile.style.display="none"

    var logout = document.getElementById("logout")
    logout.style.display="none"
}

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
