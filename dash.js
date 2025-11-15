// ----- SIDEBAR TOGGLE (Mobile) -----
const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggle-sidebar");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });
}



// ----- MENU PROFIL DROPDOWN -----
const profileBtn = document.getElementById("profile-btn");
const profileDropdown = document.getElementById("profile-dropdown");

if (profileBtn) {
    profileBtn.addEventListener("click", () => {
        profileDropdown.classList.toggle("show");
    });
}

document.addEventListener("click", function(e) {
    if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
        profileDropdown.classList.remove("show");
    }
});



// ----- NOTIFICATIONS DROPDOWN -----
const notifBtn = document.getElementById("notif-btn");
const notifDropdown = document.getElementById("notif-dropdown");

notifBtn.addEventListener("click", () => {
    notifDropdown.classList.toggle("show");
});

document.addEventListener("click", function(e) {
    if (!notifBtn.contains(e.target) && !notifDropdown.contains(e.target)) {
        notifDropdown.classList.remove("show");
    }
});



// ----- MESSAGES DROPDOWN -----
const messageBtn = document.getElementById("message-btn");
const messageDropdown = document.getElementById("message-dropdown");

messageBtn.addEventListener("click", () => {
    messageDropdown.classList.toggle("show");
});

document.addEventListener("click", function(e) {
    if (!messageBtn.contains(e.target) && !messageDropdown.contains(e.target)) {
        messageDropdown.classList.remove("show");
    }
});




// ----- HOVER ANIMATION FOR CARDS -----
const cards = document.querySelectorAll(".stat-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-4px)";
        card.style.boxShadow = "0 6px 18px rgba(0,0,0,0.1)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
        card.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
    });
});




// ----- SAMPLE CHART (OPTIONAL IF YOU USE CHART.JS) -----
if (document.getElementById("statsChart")) {
    const ctx = document.getElementById("statsChart").getContext("2d");

    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan", "Fev", "Mar", "Avr", "Mai", "Jun"],
            datasets: [{
                label: "Candidatures reçues",
                data: [120, 180, 140, 200, 260, 300],
                backgroundColor: "rgba(0, 123, 255, 0.2)",
                borderColor: "#0066ff",
                borderWidth: 2,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}



// ----- QUICK ACTION BUTTONS -----
const quickActions = document.querySelectorAll(".quick-action");

quickActions.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.add("active-action");
        setTimeout(() => btn.classList.remove("active-action"), 300);
    });
});
