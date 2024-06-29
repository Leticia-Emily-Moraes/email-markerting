emailjs.init({
    publicKey: "BYYg64Rb-vSR0s4fD",
})

function handleEmail() {
    let templateParams = {
        name: "Destinatário",
        user_email: "contatovaladao14@gmail.com",
        from_name: "LeleMoraes",
        message: "Messagenzinha"
    }

    emailjs.send("service_8c3ptyj","template_qd703vg", templateParams)
        .then(function(response){
            console.log("Email enviado com sucesso!", response.status, response.text)
        }), function(error){
            console.log("Erro ao enviar email", error)
        }
}