// document.addEventListener('DOMContentLoaded', function() {
//     const carousel = document.querySelector('.carousel');
//     const images = document.querySelectorAll('.project-image');
//     let currentIndex = 0;

//     function updateImages() {
//         images.forEach((image, index) => {
//             image.classList.remove('active', 'previous', 'next');
//             if (index === currentIndex) {
//                 image.classList.add('active');
//             } else if (index === (currentIndex - 1 + images.length) % images.length) {
//                 image.classList.add('previous');
//             } else if (index === (currentIndex + 1) % images.length) {
//                 image.classList.add('next');
//             }
//         });
//     }

//     function showNextImage() {
//         currentIndex = (currentIndex + 1) % images.length;
//         updateImages();
//     }

//     setInterval(showNextImage, 3000); // Muda a imagem a cada 3 segundos

//     // Inicializa as classes das imagens
//     updateImages();
// });