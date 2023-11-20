const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//video modal
const videoBtn =document.querySelector('.video-btn')
const videoModal =document.querySelector('#videoModal')
const video =document.querySelector('#video')
let videoSrc;
if(videoBtn != null){
  videoBtn.addEventListener('click',() => {
    videoSrc =videoBtn.getAttribute('data-bs-src');
  });
}
if(videoModal != null){
  videoModal.addEventListener('show.bs.modal', () => {
    video.setAttribute('src',videoSrc + '?autoplay=1;modestbranding=1;showInfo=0');
  });

  videoModal.addEventListener('hide.bs.modal',()=>{
    video.setAttribute('src',videoSrc);
  })
}