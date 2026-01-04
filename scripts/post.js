/* LOAD POST FROM LOCAL STORAGE */
const postData = JSON.parse(localStorage.getItem("selectedPost"));

if (postData) {
    document.getElementById("postTitle").innerText = postData.title;
    document.querySelector(".author").innerText = postData.author;
    document.getElementById("postContent").innerText = postData.content;
}

/* EDIT / SAVE */
let isEditing = false;

const editBtn = document.getElementById("editBtn");
const postTitle = document.getElementById("postTitle");
const postContent = document.getElementById("postContent");

editBtn.addEventListener("click", () => {
    if (!isEditing) {
        postTitle.contentEditable = "true";
        postContent.contentEditable = "true";
        postTitle.classList.add("editable");
        postContent.classList.add("editable");
        editBtn.innerHTML = 'Save <i class="fas fa-save"></i>';
    } else {
        postTitle.contentEditable = "false";
        postContent.contentEditable = "false";
        postTitle.classList.remove("editable");
        postContent.classList.remove("editable");
        editBtn.innerHTML = 'Edit <i class="fas fa-edit"></i>';
    }
    isEditing = !isEditing;
});

/* LIKE */
let likeCount = 0;

const likeBtn = document.getElementById("likeBtn");
const likeText = document.getElementById("likeText");

likeBtn.addEventListener("click", () => {
    likeCount++;
    likeBtn.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked!';
    likeText.innerText =
        likeCount === 1
            ? "1 person likes this!"
            : `${likeCount} people like this!`;
});

/* COMMENT */
const commentBtn = document.getElementById("commentBtn");
const commentInput = document.getElementById("commentInput");
const commentsContainer = document.getElementById("commentsContainer");

commentBtn.addEventListener("click", () => {
    const text = commentInput.value.trim();
    if (text === "") return;

    const comment = document.createElement("div");
    comment.className = "comment";
    comment.innerText = text;

    commentsContainer.prepend(comment);
    commentInput.value = "";
});
