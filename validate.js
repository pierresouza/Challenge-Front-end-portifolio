document.querySelectorAll(".contact__box input, .contact__box textarea").forEach((element) => {
  element.addEventListener("focus", (e) => {
    e.target.nextElementSibling.classList.add("active");
  });

  element.addEventListener("blur", (e) => {
    if (e.target.value === "") {
      e.target.nextElementSibling.classList.remove("active");
    }
  });
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  // Capturar dados do formulário
  const formData = new FormData(this);

  // Formatar dados para mailto
  let mailtoLink =
    "mailto:pierre.s3@hotmail.com?subject=" +
    encodeURIComponent(formData.get("subject")) +
    "&body=" +
    "Nome: " +
    encodeURIComponent(formData.get("name")) +
    "%0A" +
    "Email: " +
    encodeURIComponent(formData.get("email")) +
    "%0A" +
    "Mensagem: " +
    encodeURIComponent(formData.get("message"));

  // Abrir cliente de e-mail padrão com os dados do formulário
  window.location.href = mailtoLink;
});
