let postToDelete = null;

/* OPEN DELETE MODAL */
document.querySelectorAll(".delete-icon").forEach(icon => {
    icon.addEventListener("click", function () {
        postToDelete = this.closest(".post-card");
        openModal("deleteModal");
    });
});

/* CONFIRM DELETE */
document.getElementById("confirmDelete").addEventListener("click", function () {
    if (postToDelete) {
        postToDelete.remove();
        postToDelete = null;
    }
    closeModal("deleteModal");
});

/* REDIRECT TO POST PAGE */
document.querySelectorAll(".more-icon").forEach(icon => {
    icon.addEventListener("click", function () {
        const postCard = this.closest(".post-card");

        const postData = {
            title: postCard.querySelector(".post-header p").innerText,
            author: postCard.querySelector(".post-author p").innerText,
            content: postCard.querySelector(".post-content > p").innerText
        };

        localStorage.setItem("selectedPost", JSON.stringify(postData));
        window.location.href = "../html/post.html";
    });
});