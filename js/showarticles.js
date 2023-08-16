document.addEventListener("DOMContentLoaded", function() {
  const articlesContainer = document.getElementById('articles-container');
  const articles = JSON.parse(localStorage.getItem("articles") || "[]");

  if (window.navigator.onLine) {
    articles.forEach((articleData) => {
      const articleElement = document.createElement('article');
      articleElement.id = `${articleData.id}`;
      articleElement.innerHTML = `
        <a href="showarticle.html?id=${articleData.id}"><img src="${articleData.imageUrl}" alt="Image"></a>
        <h2><a href="showarticle.html?id=${articleData.id}">${articleData.title}</a></h2>
        <span class="data">${articleData.date}</span>
      `;

      articlesContainer.appendChild(articleElement);
    });
  }
});

function isOnline() {
  return window.navigator.onLine;
}
