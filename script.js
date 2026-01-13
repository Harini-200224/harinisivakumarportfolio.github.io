// Simple smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Contact form alert (later we can connect email)
  document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();
    alert("Message sent successfully!");
  });
  