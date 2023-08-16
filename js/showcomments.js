document.addEventListener("DOMContentLoaded", function() {
  const commentsContainer = document.getElementById('comments-container');
  const comments = JSON.parse(localStorage.getItem("comments") || "[]");

  if (window.navigator.onLine) {
    comments.forEach((commentData) => {
      const avatarId = "avatar" + (Math.floor(Math.random() * 5) +1);

      const commentElement = document.createElement("div");
      commentElement.classList.add("comment-post");
      commentElement.id = avatarId;
      commentElement.innerHTML = `
        <div class="comment-content">
          <h3 class="username">Me</h3>
          <p class="comment">${commentData.text}</p>
          <p class="date">${commentData.date}</p>
        </div>
      `;

      commentsContainer.appendChild(commentElement);
    });
  }
});

function isOnline() {
  return window.navigator.onLine;
}
