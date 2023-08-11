const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const main = document.querySelector('main');
const logoWhite = document.querySelector('.white');
const logoBlack = document.querySelector('.black');
const mouseScroll = document.querySelector('.mouse');
const sectionTitleDiv2 = document.querySelector('.section-title');

menuIcon.addEventListener('click', function() {
	menuIcon.classList.toggle('rotate');
	menu.classList.toggle('show');

	if (mouseScroll.classList.contains('mouseActive')) {
    if (menu.classList.contains('show')) {
      logoWhite.style.display = 'block';
      logoBlack.style.display = 'none'; 
      sectionTitleDiv2.style.display = 'none';
    }else {
      logoWhite.style.display = 'none'; 
      logoBlack.style.display = 'block';
      sectionTitleDiv2.style.display = 'block';
    }		
	} 
});

//Particles circle in Home
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particleRadius = window.innerWidth < 500 ? 1.5 : 1.5;
const particleCount = window.innerWidth < 500 ? 250 : 900; 
let circleRadius = 180;
if (window.innerWidth > 1400) {
  circleRadius = 300;
}
if (window.innerWidth > 500 && window.innerWidth < 1400) {
  circleRadius = 250;
}
const maxSpeed = 1;
const motionRadius = window.innerWidth < 500 ? 40 : 80; 

let particles = [];

function createParticle() {
  const angle = Math.random() * Math.PI * 2; // Random angle
  const x = canvas.width / 2 + (circleRadius - motionRadius) * Math.cos(angle);
  const y = canvas.height / 2 + (circleRadius - motionRadius) * Math.sin(angle);
  const speed = Math.random() * maxSpeed; // Random speed for each particle
  const dx = speed * Math.cos(angle);
  const dy = speed * Math.sin(angle);
  return { x, y, dx, dy };
}

function initializeParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(createParticle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    const particle = particles[i];

    // Move the particle
    particle.x += particle.dx;
    particle.y += particle.dy;

    // Check if the particle is outside the motion area, then move it back inside
    const distanceFromCenter = Math.sqrt(
      (particle.x - canvas.width / 2) ** 2 + (particle.y - canvas.height / 2) ** 2
    );
    if (distanceFromCenter > circleRadius) {
      const angle = Math.atan2(particle.y - canvas.height / 2, particle.x - canvas.width / 2);
      particle.x = canvas.width / 2 + (circleRadius - motionRadius) * Math.cos(angle);
      particle.y = canvas.height / 2 + (circleRadius - motionRadius) * Math.sin(angle);
    }

    // Draw the particle
    ctx.beginPath();
    ctx.arc(particle.x, particle.y, particleRadius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
    ctx.fill();
    ctx.closePath();
  }

  requestAnimationFrame(animateParticles);
}

initializeParticles();
animateParticles();

//carousel slider
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper .carousel__control");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 20; // getting first img width & adding 20 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        //setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 20;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    //showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

// Animate divs on work carousel
var items = document.querySelectorAll('.filter-works img');
animate(items);

// filter on click
each('.filter-menu a', function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    filterLinks(el);
  });
});

// filter links functions
function filterLinks(element) {
  // get text 
  var el = element.className,
    // convert to lowercase
    linksTolowerCase = el.toLowerCase();
  // if all remove all elements
  if (el === 'All') {
    // first show all view class
    each('.view', function(e) {
      e.classList.remove('view');
    });
    // no show init animation
    animate(items);
  } else {
    // if not click all remove all elements
    each('.view', function(e) {
      e.classList.remove('view');
    });
  }
  // show animation for current elements
  animate(document.querySelectorAll('.' + linksTolowerCase));
};
// forech arrays
function each(el, callback) {
  var allDivs = document.querySelectorAll(el),
    alltoArr = Array.prototype.slice.call(allDivs);
  Array.prototype.forEach.call(alltoArr, function(selector, index) {
    if (callback) return callback(selector);
  });
};
// animate function
function animate(item) {
  (function show(counter) {
    setTimeout(function() {
      if (item[counter]) {
        item[counter].classList.add('view');
      }
      counter++;
      if (counter < item.length) show(counter);
    },50);
  })(0);
};

//Init Particle slider
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

//Modal logic
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

//Carousel slider 3D work
const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['', ''];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {

  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  updateGallery() {
    this.carouselArray.forEach(el => {
      el.classList.remove('gallery-item-1');
      el.classList.remove('gallery-item-2');
      el.classList.remove('gallery-item-3');
      el.classList.remove('gallery-item-4');
      el.classList.remove('gallery-item-5');
    });

    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-${i+1}`);
    });
  }

  setCurrentState(direction){
    if (direction.className == 'gallery-controls-previous') {
      this.carouselArray.unshift(this.carouselArray.pop());
    }else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  setControls() {
    this.carouselControls.forEach(control => {
      galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
      document.querySelector(`.gallery-controls-${control}`).innerText = control;
    });
  }

  useControls() {
    const triggers = [...galleryControlsContainer.childNodes];
    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();

//Carousel slider 3D team
const galleryContainerTeam = document.querySelector('.gallery-container-team');
const galleryControlsContainerTeam = document.querySelector('.gallery-controls-team');
const galleryControlsTeam = ['', ''];
const galleryItemsTeam = document.querySelectorAll('.gallery-item-team');

class CarouselTeam {

  constructor(container, items, controls) {
    this.carouselContainer = container;
    this.carouselControls = controls;
    this.carouselArray = [...items];
  }

  updateGallery() {
    this.carouselArray.forEach(el => {
      el.classList.remove('gallery-item-team-1');
      el.classList.remove('gallery-item-team-2');
      el.classList.remove('gallery-item-team-3');
      el.classList.remove('gallery-item-team-4');
      el.classList.remove('gallery-item-team-5');
    });

    this.carouselArray.slice(0, 5).forEach((el, i) => {
      el.classList.add(`gallery-item-team-${i+1}`);
    });
  }

  setCurrentState(direction){
    if (direction.className == 'gallery-controls-team-previous') {
      this.carouselArray.unshift(this.carouselArray.pop());
    }else {
      this.carouselArray.push(this.carouselArray.shift());
    }
    this.updateGallery();
  }

  setControls() {
    this.carouselControls.forEach(control => {
      galleryControlsContainerTeam.appendChild(document.createElement('button')).className = `gallery-controls-team-${control}`;
      document.querySelector(`.gallery-controls-team-${control}`).innerText = control;
    });
  }

  useControls() {
    const triggers = [...galleryControlsContainerTeam.childNodes];
    triggers.forEach(control => {
      control.addEventListener('click', e => {
        e.preventDefault();
        this.setCurrentState(control);
      });
    });
  }
}

const exampleCarouselTeam = new CarouselTeam(galleryContainerTeam, galleryItemsTeam, galleryControlsTeam);

exampleCarouselTeam.setControls();
exampleCarouselTeam.useControls();
