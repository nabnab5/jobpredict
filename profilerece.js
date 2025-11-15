// === PROFIL RECRUTEUR - INTERACTIVITÉ ===

// Message de bienvenue
window.addEventListener("DOMContentLoaded", () => {
  const name = document.querySelector(".fw-bold.text-primary")?.textContent.trim();
  if (name) {
    console.log(`Bienvenue sur le profil de ${name} 💼`);
  }
});

// Bouton "Publier offre"
document.querySelector(".btn-success")?.addEventListener("click", () => {
  alert("✨ Formulaire de publication d'une nouvelle offre (à venir) !");
});

// Confirmation avant suppression
document.querySelectorAll(".btn-outline-danger").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const confirmDelete = confirm("🗑️ Êtes-vous sûr de vouloir supprimer cette offre ?");
    if (!confirmDelete) {
      e.preventDefault();
    } else {
      alert("✅ Offre supprimée avec succès !");
    }
  });
});

// Mode sombre
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDark);
  document.querySelector("#darkToggle i").className = isDark ? "bi bi-sun-fill" : "bi bi-moon-fill";
};

// Bouton flottant du mode sombre
const darkBtn = document.createElement("button");
darkBtn.id = "darkToggle";
darkBtn.className = "btn btn-primary rounded-circle position-fixed";
darkBtn.style.bottom = "30px";
darkBtn.style.right = "30px";
darkBtn.style.width = "50px";
darkBtn.style.height = "50px";
darkBtn.innerHTML = '<i class="bi bi-moon-fill fs-5"></i>';
darkBtn.addEventListener("click", toggleDarkMode);
document.body.appendChild(darkBtn);

// Charger le mode sombre sauvegardé
if (localStorage.getItem("darkMode") === "true") {
  toggleDarkMode();
}
document.getElementById("uploadPhoto").addEventListener("change", function () {
    let file = this.files[0];
    let reader = new FileReader();

    reader.onload = function (e) {
        document.getElementById("profilePreview").src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

