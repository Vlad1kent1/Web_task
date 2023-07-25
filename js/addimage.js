function handleImageSelect() {
  const input = document.createElement('input');
  input.type = 'file';

  input.addEventListener('change', (event) => {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onload = function() {
        const selectedImage = document.getElementById('selectedImage');
        selectedImage.src = reader.result;
      };
      reader.readAsDataURL(file);
    }
  });

  input.click();
}
