document.addEventListener("DOMContentLoaded", function() {
  const articlesContainer = document.getElementById('article-container');
  const articles = JSON.parse(localStorage.getItem("articles") || "[]");
  const getid = getArticleIdFromUrl();

  articles.forEach((articleData) => {
    if (getid == articleData.id) {
      const articleElement = document.createElement('article');
      articleElement.id = `${articleData.id}`;
      articleElement.innerHTML = `
        <div class="title">
          <div><img src="${articleData.imageUrl}" alt="Image"></div>
          <h2>${articleData.title}</h2>
        </div>
        <div class="description"> 
          <p>${articleData.text}<p>
          <p class="data">${articleData.date}<p>
        </div> 
      `;

      articlesContainer.appendChild(articleElement);
    }
  });
});

function getArticleIdFromUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('id');
}
