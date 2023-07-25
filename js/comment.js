document.addEventListener("DOMContentLoaded", function() {
  const commentForm = document.getElementById("comment-form");
  const commentsContainer = document.getElementById("comments-container");

  // Listen for form submission
  commentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const commentText = commentForm.querySelector(".comment").value;
    if (commentText.trim() === "") {
      alert("Please enter a comment before submitting.");
      return;
    }

    const avatarId = "avatar" + (Math.floor(Math.random() * 5) +1);

    const currentDate = new Date().toLocaleDateString("en-GB");

    const commentElement = document.createElement("div");
    commentElement.classList.add("comment-post");
    commentElement.id = avatarId;
    commentElement.innerHTML = `
      <div class="comment-content">
        <h3 class="username">Me</h3>
        <p class="comment">${commentText}</p>
        <p class="date">${currentDate}</p>
      </div>
    `;

    commentsContainer.appendChild(commentElement);

    commentForm.querySelector(".comment").value = "";
  });
});
