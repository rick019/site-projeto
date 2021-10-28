function Cadastro(){
    var vazio = document.querySelector("#name").value;
    var vazio2 = document.querySelector("#email").value;

    if (vazio == ""){
        alert("Nome e email são obrigatórios!");
        return false;
    }
    if (vazio2 == ""){
        alert("Nome e email são obrigatórios!");
        return false;
    }
    else
    {
        document.querySelector("#resposta").innerHTML = "Cadastro Realizado com Sucesso!"
        return true;
        
    }


    // let EnviarCadastroRodape = document.querySelector("#cadastro")
    // document.querySelector
    // document.querySelector("#resposta").innerHTML = "Cadastro Realizado com Sucesso!"
}


function Contato(){
    var empt = document.querySelector("#name2").value;
    var empt2 = document.querySelector("#email2").value;
    var empt3 = document.querySelector("#telefone").value;
    var empt4 = document.querySelector("#assunto").value;
    var empt5 = document.querySelector("#suamensagem").value;
    if (empt == ""){
        alert("Todos os campos são obrigatórios, por favor preencha!");
        return false;
    }
    if (empt2 == ""){
        alert("Todos os campos são obrigatórios, por favor preencha!");
        return false;
    }
    if (empt3 == ""){
        alert("Todos os campos são obrigatórios, por favor preencha!");
        return false;
    }
    if (empt4 == ""){
        alert("Todos os campos são obrigatórios, por favor preencha!");
        return false;
    }
    if (empt5 == ""){
        alert("Todos os campos são obrigatórios, por favor preencha!");
        return false;
    }
    else
    {
        document.querySelector("#resposta3").innerHTML = "Mensagem enviada com Sucesso!"
        return true;
        
    }

    //document.querySelector("#name2").required = true;
    // let email2 = document.querySelector("#email2")
    // let telefone = document.querySelector("#telefone")
    // let assunto = document.querySelector("#assunto")
    // let suamensagem = document.querySelector("#suamensagem")

    // if(nome2 == null){
    //     document.querySelector("#resposta3").innerHTML = "Insira o nome!"
    // }else{

    //     document.querySelector("#resposta3").innerHTML = "Mensagem enviada com Sucesso!"

    // }


    
    
}


function MostrarReserva(){
    let campo = document.querySelector("#reserve")
    if(campo.style.display == "inline"){
        campo.style.display = "none"
    }else{
        campo.style.display = "inline"
    }
    
}





function EnviarReserva(){

    // var hora = document.querySelector("#horario").value;

    // if (hora == ""){
    //     alert("Todos os campos são obrigatórios, por favor preencha!");
    //     return false;
    // }
    // else
    // {
    //     document.querySelector("#resposta2").innerHTML = "Mensagem enviada com Sucesso!"
    //     return true;
        
    // }



    let EnviarReserva = document.querySelector("#reserve")
    
    document.querySelector
    document.querySelector("#resposta2").innerHTML = "Cadastro Realizado com Sucesso!"
}
