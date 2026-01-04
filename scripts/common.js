document.addEventListener("DOMContentLoaded", function () {

    const signupBtn = document.getElementById("signupBtn");
    const signinBtn = document.getElementById("signinBtn");

    if (signupBtn) {
        signupBtn.onclick = function () {
            openModal("signupModal");
        };
    }

    if (signinBtn) {
        signinBtn.onclick = function () {
            openModal("signinModal");
        };
    }

});

/* MODAL FUNCTIONS */
function openModal(id) {
    document.getElementById(id).classList.add("show");
}

function closeModal(id) {
    document.getElementById(id).classList.remove("show");
}

function switchToSignup() {
    closeModal("signinModal");
    openModal("signupModal");
}
