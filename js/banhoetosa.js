document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-gallery img');
    const modal = document.querySelector('.modal');
    const modalImage = document.querySelector('.modal img');
  
    images.forEach((image) => {
      image.addEventListener('click', () => {
        modalImage.src = image.src;
        modal.style.display = 'block';
      });
    });
  
    modal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-button');
    const navList = document.querySelector('.headernav ul');
  
    menuButton.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  });

