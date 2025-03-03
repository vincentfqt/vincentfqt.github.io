(function () {
  emailjs.init("gBiK3iEzjXncKxQSV");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      this.contact_number.value = (Math.random() * 100000) | 0;

      emailjs.sendForm("service_s49acgo", "template_xnfqn7h", this).then(
        function () {
          console.log("SUCCESS!");
          alert("Merci pour votre message. Je reviens vers vous très vite !");
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Une erreur est survenue, veuillez réessayer plus tard.");
        }
      );
    });
};

document.getElementById("contactBtn").addEventListener("click", function () {
  let modal = bootstrap.Modal.getInstance(document.querySelector(".modal"));
  modal.hide();
  setTimeout(() => (window.location.href = "#contact"), 300);
});
