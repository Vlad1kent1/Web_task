function handleSubmit() {
  const titleInput = document.getElementById('title');
  const textInput = document.getElementById('text');
  
  const title = titleInput.value.trim();
  const text = textInput.value.trim();

  if (title === '' || text === '') {
    alert('Title or text cannot be blank.');
  } else {
    alert('News was added!');
    
    location.reload();
  }
}
