const mensagem = document.getElementById("msg-de-envio");
const termos = document.getElementById("checkbox_de_termos_e_condicoes");
const button_enviar = document.getElementById("enviar");
//class contato

class Contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

termos.addEventListener("change", () => {
  button_enviar.disabled = !checkbox.checked;
});

function Post(event,form) {
  event.preventDefault();
  let data = new Contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);
  

  
  // Verifica se o nome tem pelo menos 3 letras
  if (data.nome.length < 3) {
    mensagem.innerHTML = "<p>O nome precisa ter pelo menos 3 letras.</p>";
    mensagem.style.color = "red";
    return false;
  }

  // Verifica se o email contém "@" (validação básica)
  if (!data.email.includes("@") || data.email.length < 4) {
    alert("EMAIL INVÁLIDO");
    mensagem.innerHTML = "<p>Digite um email válido.</p>";
    mensagem.style.color = "red";
    return false;
  }
  if(isNaN(data.cpf) || data.cpf.length != 11 ){
    alert("CPF INVÁLIDO");
    mensagem.innerHTML = "<p>Cpf inválido</p>"
    mensagem.style.color = "red";
    return false;
  }
  if( data.telefone.length <= 7 || isNaN(data.telefone) ){
      alert("TELEFONE INVÁLIDO");
      mensagem.innerHTML = "<p>Telefone Inválido</p>";
      mensagem.style.color = "red";
      return false;
  }
  
  if(!termos.checked){
    alert("Preencha o campo de aceitação de compromissos!")
    termos.setAttribute.required = true;
    return false;
  }
  if(termos.checked){
    button_enviar.style.backgroundColor = 'blue';

  }
   
    button_enviar.setAttribute.disabled = false;
   
        var nome = document.getElementById("nomeid");
        let mensagemBemVindo = `Obrigado sr(a)  ${nome.value}  os seus dados foram encaminhados com sucesso`;
        if (nome.value != "") {
            alert(mensagemBemVindo);
            form.reset();
            mensagem.innerHTML = "<p></p>";
        }

  }
  
  
           
  


