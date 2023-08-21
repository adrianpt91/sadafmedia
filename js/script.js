//======Remove the loading screen when the content is loaded=====//
window.addEventListener('load', function() {
  var loadingFrame = document.getElementById('loading');
  loadingFrame.style.display = 'none';
});
//============End loader========================//

//========Init sliders splide.js===============//
var splide = new Splide( '#team-slider', {
  type   : 'loop',
  perPage: 4,
  perMove: 1,
  gap: '2rem',
  pagination: false,
  autoplay: true,
  interval: 5000,
  pauseOnHover: true,
  breakpoints: {
    1440: {
      perPage: 3,
      gap: '1rem'
    },
    992: {
      perPage: 2,
      gap: '2rem'
    },
    480: {
      perPage: 1,
      width: '70%',
    },
  },
});
var splide2 = new Splide( '#team2-slider', {
  type   : 'loop',
  perPage: 3,
  perMove: 1,
  gap: '2rem',
  pagination: false,
  autoplay: true,
  interval: 5000,
  pauseOnHover: true,
  breakpoints: {
    1440: {
      perPage: 2,
      gap: '1rem'
    },
    992: {
      perPage: 2,
      gap: '2rem'
    },
    480: {
      perPage: 1,
      width: '100%',
      pagination: true,
      arrows: false,
    },
  },
});
var splide3 = new Splide( '#work-slider', {
  type   : 'loop',
  perPage: 3,
  perMove: 1,
  gap: '2rem',
  pagination: false,
  breakpoints: {
    1440: {
      perPage: 2,
      gap: '2rem'
    },
    480: {
      perPage: 1,
      width: '100%',
      pagination: true,
      arrows: false,
    },
  },
});
var splide4 = new Splide( '#blog-slider', {
  type   : 'loop',
  perPage: 2,
  perMove: 2,
  gap: '2rem',
  pagination: false,
  breakpoints: {
    480: {
      perPage: 1,
      perMove: 1,
      width: '100%',
      pagination: true,
      arrows: false,
    },
  },
});

var splideModal = new Splide( '#splideModal', {
  direction: 'ttb',
  wheel    : true,
  height   : '100%',
  pagination: false,
  arrows: false,
  } );
  
splideModal.mount();
splideModal.on( 'move', function (newIndex, prevIndex, destIndex) {
  if(destIndex === 1){
    document.getElementById('modalImage').style.filter = 'blur(5px)'
    document.getElementById('modalProject').classList.add('modalActive')
  }else {
    document.getElementById('modalImage').style.filter = 'blur(0)'
    document.getElementById('modalProject').classList.remove('modalActive')
  }
});
  
splide.mount();
splide2.mount();
splide3.mount();
splide4.mount();
//=================End splide===============//

//=======Init fullpage.js===================//		
var myFullpage = new fullpage('#fullpage', {
  css3:true,
  scrollingSpeed: 1000,
  easing: 'easeInOutCubic',
    easingcss3: 'ease',
  fitToSection: true,
    fitToSectionDelay: 1000,
  verticalCentered: true,    			
  dragAndMove: true,
    normalScrollElements: '.scrollable-content',
  anchors: ['home', 'home-bottom', 'aboutus', 'aboutus', 'aboutus', 'aboutus', 'services', 'work', 'blog', 'contactus', 'location', 'footer'],
  menu: '#menu',
  afterLoad: function(anchorLink, index){
    //Variables
    const mouse = document.querySelector('.mouse');
    const sectionTitleDiv = document.querySelector('.section-title');
    const scrollWhite = document.querySelector('.white_scroll');
    const targetLinkId = 'a[href="#' + index.anchor + '"]';
    document.querySelector('.contact-btn a').classList.remove('active')
    document.querySelectorAll('.main-menu-links a').forEach(function(link) {
      link.classList.remove('active');
    });	
    if (index.anchor === 'home') {
      mouse.classList.remove('mouseActive');
      sectionTitleDiv.innerHTML = '';
      document.querySelector('.home-link').classList.add('active');
    }else {
      mouse.classList.add('mouseActive');
      if (index.anchor === 'home-bottom') {
        sectionTitleDiv.textContent = 'HOME';
        document.querySelector('.home-link').classList.add('active');	
      }else {
        if (document.querySelector(targetLinkId)) {
          document.querySelector(targetLinkId).classList.add('active');
        }							
      }
      if (index.anchor === 'aboutus' || index.anchor === 'team' || index.anchor === 'about-second') {
        sectionTitleDiv.textContent = 'ABOUT US';
      }
      if (index.anchor === 'services') {
        sectionTitleDiv.textContent = 'SERVICES';							
      }
      if (index.anchor === 'work') {
        sectionTitleDiv.textContent = 'WORK';
      }
      if (index.anchor === 'blog') {
        sectionTitleDiv.textContent = 'BLOG';
      }
      if (index.anchor === 'contactus') {
        sectionTitleDiv.textContent = 'CONTACT US';
        document.querySelector('.contact-btn a').classList.add('active');
      }
      if (index.anchor === 'location') {
        sectionTitleDiv.textContent = 'CONTACT US';
        document.querySelector('.contact-btn a').classList.add('active');
      }
      if (index.anchor === 'footer') {
        sectionTitleDiv.textContent = '';
        scrollWhite.style.display = 'none';
        document.querySelector('header').style.display = 'none'
      }else {
        document.querySelector('header').style.display = 'flex'
        scrollWhite.style.display = 'block';
      }
    }
  },
  onLeave: function(index, nextIndex, origin){
    if(nextIndex.anchor!=="home"){
      for (let i = 1; i < document.querySelectorAll('.white path').length; i++) {
        document.querySelectorAll('.white path')[i].style.display = 'none';
      }						
    }else {
      for (let i = 1; i < document.querySelectorAll('.white path').length; i++) {
        document.querySelectorAll('.white path')[i].style.display = 'block';
      }
    }
    //Animate texts for each section
    if(nextIndex.anchor!=="footer") {
      const section = nextIndex.item;					
      if (section.querySelector('h1')) {
        const title = section.querySelector('h1');	
        const tl = new TimelineMax({ delay: 0.5 });					
        tl.fromTo(title, 1, {y: "80", opacity: 0}, {y: 0, opacity: 1});
      }
      if (section.querySelector('h4')) {
        const subtitle = section.querySelectorAll('h4');
        const tl2 = new TimelineMax({ delay: 0.8 });
        tl2.fromTo(subtitle, 1, {y: "80", opacity: 0}, {y: 0, opacity: 1});
      }
      if (section.querySelector('p')) {
        const text = section.querySelectorAll('p');
        const tl3 = new TimelineMax({ delay: 1 });
        tl3.fromTo(text, 1.2, {y: "80", opacity: 0}, {y: 0, opacity: 1});
      }
      if (section.querySelector('.animate')) {
        const animation = section.querySelectorAll('.animate');
        const tl4 = new TimelineMax({ delay: 1.2 });
        tl4.fromTo(animation, 1.4, {y: "80", opacity: 0}, {y: 0, opacity: 1});
      }
      if (section.querySelector('.team-item')) {
        const teamItem = section.querySelectorAll('.team-item');
        const tl5 = new TimelineMax({ delay: 1.2 });
        teamItem.forEach((item, index) => {
          tl5.fromTo(
            item,
            1,
            { y: "150", opacity: 0 },
            { y: 0, opacity: 1 },
            `-=${1 - 0.2 * index}`
          );
        });
      }
    }
  }
});
//===============End fullpage.js=================//

//============Menu Mobile logic============//
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const menuMobileItems = document.querySelectorAll('.menu a')

menuIcon.addEventListener('click', function() {
	menuIcon.classList.toggle('rotate');
	menu.classList.toggle('show');
  document.querySelector('.section-title').classList.toggle('hidden');
});

menuMobileItems.forEach(item => {
  item.addEventListener('click', function() {
    menuIcon.classList.toggle('rotate');
    menu.classList.toggle('show');
    document.querySelector('.section-title').classList.toggle('hidden');
  })
})

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
        modalProject.scrollTop = 0;
        fullpage_api.setAllowScrolling(false);
    });
});

closeModalProject.addEventListener('click', () => {  
  modalProject.classList.remove('show');
  fullpage_api.setAllowScrolling(true);
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modalProject.classList.remove('show');
      fullpage_api.setAllowScrolling(true);
    }
});
//============End Modal prohect logic========//

