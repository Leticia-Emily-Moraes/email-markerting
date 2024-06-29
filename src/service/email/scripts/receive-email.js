(function() {
    emailjs.init({
        publicKey: "BYYg64Rb-vSR0s4fD",
    })
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault()

    emailjs.sendForm("service_uo486pc", "template_5776ju8", this)
    .then(
        function() {
            console.log("Success!")
            alert("Email enviado com sucesso")
        }
    ), function(err) {
        console.log("Fail", err)
        alert("Falha ao enviar o email, tente mais tarde!")
    }
})