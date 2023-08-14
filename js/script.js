//============Menu Mobile logic============//
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', function() {
	menuIcon.classList.toggle('rotate');
	menu.classList.toggle('show');
  document.querySelector('.section-title').classList.toggle('hidden');
});

//========Init Particle slider==========//
var init = function(){
  var ps = new ParticleSlider({
    width: window.innerWidth,
    height: window.innerHeight
  });
  (window.addEventListener?window.addEventListener('click', function(){ps.init(true)}, false):window.onclick = function(){ps.init(true)});
}

var initParticleSlider = function(){
  var psScript = document.createElement('script');
  (psScript.addEventListener?psScript.addEventListener('load', init, false):psScript.onload = init);
  psScript.src = 'js/ps.js';
  psScript.setAttribute('type', 'text/javascript');
  document.body.appendChild(psScript);
}

(window.addEventListener?window.addEventListener('load', initParticleSlider,false):window.onload=initParticleSlider);

//=========================================//

//========Modal logic============//
const modal = document.getElementById("myModal");
const btnOpenModalStory = document.getElementById("openModalBtnStory");
const btnOpenModalContact = document.getElementById("openModalBtnContact");
const btnOpenModal = document.getElementById("openModalBtn");
const spanCloseModal = document.getElementsByClassName("close")[0];
const closeModalBtn = document.querySelector(".close-modal");
const modalContent = document.querySelector('.modal-content');

function openModal() {
  modal.style.display = 'block';
  setTimeout(() => {
    modalContent.style.transform = 'scale(1)';
    modalContent.style.opacity = '1';
  }, 100); // Delay for smoother effect
}

function closeModal() {
  modalContent.style.transform = 'scale(0.6)';
  modalContent.style.opacity = '0';
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300); // Match the transition duration
}

btnOpenModalStory.addEventListener("click", openModal);
btnOpenModalContact.addEventListener("click", openModal);
btnOpenModal.addEventListener("click", openModal);

spanCloseModal.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
});
//=================================//

//=========Modal project logic=====//
const projectItems = document.querySelectorAll('.project-item');
const modalProject = document.getElementById('modalProject');
const modalImage = document.getElementById('modalImage');
const closeModalProject = document.querySelector('.close-project');

projectItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.getAttribute('src');
        modalImage.setAttribute('src', imgSrc);
        modalProject.classList.add('show');
    });
});

closeModalProject.addEventListener('click', () => {  
  modalProject.classList.remove('show');
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modalProject.classList.remove('show');
    }
});


