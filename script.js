document.addEventListener("DOMContentLoaded", function () {
  

  //  Effet de clic sur les boutons
  const buttons = document.querySelectorAll(".btn, .btn-secondary");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      button.style.transform = "scale(0.95)";
      setTimeout(() => (button.style.transform = "scale(1)"), 150);
    });
  });

  // Uploader CV (message temporaire)
  const uploadBtn = document.querySelector(".btn-secondary");
  if (uploadBtn) {
    uploadBtn.addEventListener("click", () => {
      alert("Fonction 'Télécharger CV' en cours de développement !");
    });
  }

  //  Gestion du changement de photo de profil
  const photoInput = document.getElementById("photo-input");
  if (photoInput) {
    photoInput.addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById("user-photo").src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }
});

// ----- Page Profil -----
document.addEventListener("DOMContentLoaded", () => {
  //localStorage
  let userProfile = JSON.parse(localStorage.getItem("userProfile")) || {
    name: "Nom Prénom",
    email: "candidat@example.com",
    phone: "+212600000000",
    cv: null,
    photo: null,
    skills: "Aucune compétence ajoutée",
    experience: "Aucune expérience ajoutée"
  };

  const userName = document.getElementById("user-name");
  const userEmail = document.getElementById("user-email");
  const userPhone = document.getElementById("user-phone");
  const userCV = document.getElementById("user-cv");
  const userPhoto = document.getElementById("user-photo");
  const userSkills = document.getElementById("user-skills");
  const userExperience = document.getElementById("user-experience");

  function renderProfile() {
    userName.textContent = userProfile.name;
    userEmail.textContent = userProfile.email;
    userPhone.textContent = userProfile.phone;
    userCV.textContent = userProfile.cv ? userProfile.cv.name : "Aucun CV uploadé";
    userSkills.textContent = userProfile.skills;
    userExperience.textContent = userProfile.experience;
    if(userProfile.photo) userPhoto.src = userProfile.photo;
  }

  renderProfile();

  // Photo de profil
  const photoInput = document.getElementById("photo-input");
  photoInput.addEventListener("change", e => {
    const file = e.target.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = function(event){
        userPhoto.src = event.target.result;
        userProfile.photo = event.target.result;
        localStorage.setItem("userProfile", JSON.stringify(userProfile));
      }
      reader.readAsDataURL(file);
    }
  });

  // CV
  const addCVBtn = document.getElementById("addCVBtn");
  const cvInput = document.getElementById("cvInput");
  addCVBtn.addEventListener("click", () => cvInput.click());
  cvInput.addEventListener("change", e => {
    const file = e.target.files[0];
    if(file){
      userProfile.cv = file;
      localStorage.setItem("userProfile", JSON.stringify(userProfile));
      renderProfile();
      alert("CV ajouté avec succès ✅");
    }
  });

  // Edition des champs
  const editFormContainer = document.getElementById("editFormContainer");
  const editField = document.getElementById("editField");
  const saveFieldBtn = document.getElementById("saveFieldBtn");
  const cancelEditBtn = document.getElementById("cancelEditBtn");
  let currentField = null;

  function startEdit(field){
    currentField = field;
    editField.value = userProfile[field];
    editFormContainer.style.display = "flex";
    editField.focus();
  }

  document.getElementById("editNameBtn").addEventListener("click", () => startEdit("name"));
  document.getElementById("editEmailBtn").addEventListener("click", () => startEdit("email"));
  document.getElementById("editPhoneBtn").addEventListener("click", () => startEdit("phone"));
  document.getElementById("editSkillsBtn").addEventListener("click", () => startEdit("skills"));
  document.getElementById("editExperienceBtn").addEventListener("click", () => startEdit("experience"));

  saveFieldBtn.addEventListener("click", () => {
    userProfile[currentField] = editField.value.trim();
    localStorage.setItem("userProfile", JSON.stringify(userProfile));
    renderProfile();
    editFormContainer.style.display = "none";
  });

  cancelEditBtn.addEventListener("click", () => {
    editFormContainer.style.display = "none";
  });
});



// ----- Page Messages -----
document.addEventListener("DOMContentLoaded", () => {
  const contactList = document.querySelectorAll(".contact");
  const chatName = document.getElementById("chat-name");
  const chatPhoto = document.getElementById("chat-photo");
  const chatMessages = document.getElementById("chat-messages");
  const sendBtn = document.getElementById("send-btn");
  const messageInput = document.getElementById("message-input");

  // Sélection d’un contact
  contactList.forEach(contact => {
    contact.addEventListener("click", () => {
      document.querySelector(".contact.active")?.classList.remove("active");
      contact.classList.add("active");

      const name = contact.querySelector("h4").textContent;
      const photo = contact.querySelector("img").src;

      chatName.textContent = name;
      chatPhoto.src = photo;

    });
  });

  // Envoi d’un message
  sendBtn?.addEventListener("click", sendMessage);
  messageInput?.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const text = messageInput.value.trim();
    if (text === "") return;

    const msg = document.createElement("div");
    msg.classList.add("message", "sent");
    msg.textContent = text;

    chatMessages.appendChild(msg);
    messageInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Simulation d'une réponse automatique
    setTimeout(() => {
      const reply = document.createElement("div");
      reply.classList.add("message", "received");
      reply.textContent = "Merci pour votre message !";
      chatMessages.appendChild(reply);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
  }
});


// ----- Page Prédire -----
document.addEventListener("DOMContentLoaded", () => {
  const cvInput = document.getElementById("cvInput");
  const predictBtn = document.getElementById("predictBtn");
  const resultSection = document.getElementById("resultSection");
  const predictedOffers = document.getElementById("predictedOffers");

  if (predictBtn) {
    predictBtn.addEventListener("click", () => {
      if (!cvInput.files.length) {
        alert("Veuillez d’abord uploader votre CV !");
        return;
      }

      // Simulation du traitement du CV
      predictBtn.textContent = "Analyse en cours...";
      predictBtn.disabled = true;

      setTimeout(() => {
        predictBtn.textContent = "Analyser le CV";
        predictBtn.disabled = false;
        resultSection.style.display = "block";

        // Exemples simulés d’offres recommandées
        const offres = [
          { poste: "Data Scientist", entreprise: "AI Maroc", taux: 87 },
          { poste: "Analyste de données", entreprise: "DataMind", taux: 79 },
          { poste: "Développeur Python", entreprise: "TechVision", taux: 65 }
        ];

        predictedOffers.innerHTML = "";
        offres.forEach(offre => {
          const div = document.createElement("div");
          div.classList.add("offer-predict");
          div.innerHTML = `
            <h4>${offre.poste}</h4>
            <p>Entreprise : ${offre.entreprise}</p>
            <div class="progress-bar">
              <div class="progress" style="width: ${offre.taux}%;"></div>
            </div>
            <span class="percentage">${offre.taux}%</span>
          `;
          predictedOffers.appendChild(div);
        });

        alert("Analyse terminée ✅ ! Voici vos résultats.");
      }, 2000);
    });
  }
});
