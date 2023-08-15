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

//Gravity effect
function runMatterCode() {
  console.log('here')
  var Engine = Matter.Engine,
      Render = Matter.Render,
      Events = Matter.Events,
      MouseConstraint = Matter.MouseConstraint,
      Mouse = Matter.Mouse,
      World = Matter.World,
      Bodies = Matter.Bodies;

  // create an engine
  var engine = Engine.create(),
      world = engine.world;

  // create a renderer
  var render = Render.create({
      element: document.querySelector('.fp-viewing-services'),
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: 2,
        background: '#080808',
        wireframes: false,
      }
  });


  // create bounds
  var ground = Bodies.rectangle(
    (window.innerWidth / 2) + 160, window.innerHeight + 80, window.innerWidth + 320, 160,{render: { fillStyle: '#080808'}, isStatic: true });
  var wallLeft = Bodies.rectangle( -80, window.innerHeight / 2, 160,   window.innerHeight, { isStatic: true });
  var wallRight = Bodies.rectangle(window.innerWidth + 80, window.innerHeight / 2, 160, 1200, { isStatic: true })
  var roof = Bodies.rectangle(
    (window.innerWidth / 2) + 160, -80, window.innerWidth + 320, 160, { isStatic: true })

  // object colors & variables
  var arts = "#EDDC8C"
  var videos = "#B3E8F3"
  var abouts = '#4D4D4D'

  var border = 2
  var radius = 20

  // create objects

  // art & design
  var illustration = Bodies.rectangle(70, 500, 133, 40, {chamfer: {radius: radius}, render: { sprite: { texture: 'https://i.imgur.com/RADmiFI.png', xScale: 0.5, yScale: 0.5 }}})
  var graphic = Bodies.rectangle(60, 420, 105, 40, {chamfer: {radius: radius}, render: { sprite: { texture: 'https://i.imgur.com/TyOmVtt.png', xScale: 0.5, yScale: 0.5 }}})
  // video
  var documentary = Bodies.rectangle(220, 540, 165, 40, {chamfer: {radius: radius}, render: { sprite: { texture: 'https://i.imgur.com/QYNTBNr.png', xScale: 0.5, yScale: 0.5 }}})
  var animation = Bodies.rectangle(200, 490, 128, 40, {chamfer: {radius: radius}, render: { sprite: { texture: 'https://i.imgur.com/rSnEY9Q.png', xScale: 0.5, yScale: 0.5 }}})
  var vintage = Bodies.rectangle(190, 440, 104, 40, {chamfer: {radius: radius}, render: { sprite: { texture: 'https://i.imgur.com/5BSBvSm.png', xScale: 0.5, yScale: 0.5 }}})
  //misc
  var website = Bodies.rectangle(360, 420, 108, 40, {chamfer: {radius: radius}, render: { sprite: { texture: 'https://i.imgur.com/hr9p4uV.png', xScale: 0.5, yScale: 0.5 }}})
  var article = Bodies.rectangle(300, 380, 92, 40, {chamfer: {radius: radius}, render: { sprite: { texture: 'https://i.imgur.com/n6TV7XG.png', xScale: 0.5, yScale: 0.5 }}})

  var rectangleCustom = Bodies.rectangle(220, 540, 165, 40, {
    render: {
      fillStyle: '#000',
      text: {
        text: 'This is my text',
        fontSize: 20,
        fill: '#fff',
      }
    }
  });

  // Original Shape
  // var illustration = Bodies.rectangle(70, 500, 133, 40, {render: { fillStyle: arts}, chamfer: {radius: 20}})


  // add all of the bodies to the world
  World.add(engine.world, [
    ground, wallLeft, wallRight, roof, illustration, graphic, documentary, animation, vintage, website, article, rectangleCustom
  ]);

  // add mouse control
  var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

  World.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // Allow page scrolling in matter.js window
  mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
  mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

  // Detect clicks vs. drags
  let click = false;

  document.addEventListener('mousedown', () => click = true);
  document.addEventListener('mousemove', () => click = false);
  document.addEventListener('mouseup', () => console.log(click ? 'click' : 'drag'));

  // Create a On-Mouseup Event-Handler
  Events.on(mouseConstraint, 'mouseup', function(event) {
    var mouseConstraint = event.source;
    var bodies = engine.world.bodies;
    if (!mouseConstraint.bodyB) {
      for (i = 0; i < bodies.length; i++) { 
        var body = bodies[i];
        // Check if clicked or dragged
        if (click === true) {
        if (Matter.Bounds.contains(body.bounds, mouseConstraint.mouse.position)) {
            var bodyUrl = body.url;
            console.log("Body.Url >> " + bodyUrl);
            // Hyperlinking feature
            if (bodyUrl != undefined) {
              //window.location.href = bodyUrl;
              window.open(bodyUrl, '_blank');
              console.log("Hyperlink was opened");
            }
            break;
          }
        }
      }
    }
  });

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
}


