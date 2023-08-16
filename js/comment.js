document.addEventListener("DOMContentLoaded", function() {
  const commentForm = document.getElementById("comment-form");

  commentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const commentText = commentForm.querySelector(".comment").value;
    if (commentText.trim() === "") {
      alert("Please enter a comment before submitting.");
      return;
    }

    const currentDate = new Date().toLocaleDateString("en-GB");
    const commentId = Date.now();

    const commentData = {
      id: commentId,
      text: commentText,
      date: currentDate
    };
    saveDataToLocal(commentData);

    window.location.reload();
  });
});

function saveDataToLocal(commentData) {
  const comments = JSON.parse(localStorage.getItem('comments') || '[]');
  comments.push(commentData);
  localStorage.setItem('comments', JSON.stringify(comments));
}
