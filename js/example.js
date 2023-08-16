function handleSubmit() {
  const titleInput = document.getElementById('title');
  const textInput = document.getElementById('text');

  const title = titleInput.value.trim();
  const text = textInput.value.trim();

  if (title === '' || text === '') {
    alert('Title or text cannot be blank.');
  } else {
    const currentDate = new Date().toLocaleDateString("en-GB");
    const selectedImage = document.getElementById('selectedImage');
    const imageUrl = selectedImage.src || '../images/default.jpg';
    const articleId = Date.now();

    const articleData = {
      id: articleId,
      title,
      text,
      imageUrl,
      date: currentDate,
    };
    saveDataToLocal(articleData);

    if (isOnline()){
      window.location.href = '../pages/news.html';
    } else {
      window.location.reload();
    }
  }
}

function isOnline() {
  return window.navigator.onLine;
}

function saveDataToLocal(articleData) {
  const articles = JSON.parse(localStorage.getItem('articles') || '[]');
  articles.push(articleData);
  localStorage.setItem('articles', JSON.stringify(articles));
}
