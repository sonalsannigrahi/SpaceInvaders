const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click',actionClicked_menu);

function actionClicked_menu(event) {
  if (document.querySelector('.tmp2') === null) {
    const current = document.querySelector('.active');
    const next = document.querySelector('.menu');
    current.classList.remove('active');
    current.classList.add('tmp2');
    next.classList.add('active');
  }
  else {
    const current = document.querySelector('.active');
    const tmp = document.querySelector('.tmp2');
    tmp.classList.remove('tmp2');
    current.classList.remove('active');
    tmp.classList.add('active');
  }
}

const home = document.querySelector('.lhome');
home.addEventListener('click',actionClicked_home);

function acc() {
  if (speed < 0.05) {
    speed += 0.0005;
  }
}

function dec() {
  if (speed >= 0.0005) {
    speed -= 0.0005;
  }
}

function actionClicked_home(event) {
  var myvar = setInterval(acc,33);
  setTimeout(function(){clearInterval(myvar)},3300);
  const current = document.querySelector('.active');
  const next = document.querySelector('.home');
  const tmp = document.querySelector('.tmp2');
  const line1 = document.querySelector('.line1');
  const line2 = document.querySelector('.line2');
  const line3 = document.querySelector('.line3');
  const lhome = document.querySelector('.lhome');
  const lspaceinvaders = document.querySelector('.lspaceinvaders');
  const labout = document.querySelector('.labout');
  const lcontact = document.querySelector('.lcontact');
  lhome.className = 'a lhome gradient1';
  lspaceinvaders.className = 'a lspaceinvaders gradient1';
  labout.className = 'a labout gradient1';
  lcontact.className = 'a lcontact gradient1';
  line1.className = "line1 gradient1m";
  line2.className = "line2 gradient1m";
  line3.className = "line3 gradient1m";
  tmp.classList.remove('tmp2');
  current.classList.remove('active');
  next.classList.add('active');
}

const spaceinvaders = document.querySelector('.lspaceinvaders');
spaceinvaders.addEventListener('click',actionClicked_spaceinvaders);

function actionClicked_spaceinvaders(event) {
  var myvar2 = setInterval(dec,33);
  setTimeout(function(){clearInterval(myvar2)},5000);
  const current = document.querySelector('.active');
  const next = document.querySelector('.spaceinvaders');
  const tmp = document.querySelector('.tmp2');
  const line1 = document.querySelector('.line1');
  const line2 = document.querySelector('.line2');
  const line3 = document.querySelector('.line3');
  const lhome = document.querySelector('.lhome');
  const lspaceinvaders = document.querySelector('.lspaceinvaders');
  const labout = document.querySelector('.labout');
  const lcontact = document.querySelector('.lcontact');
  lhome.className = 'a lhome gradient2';
  lspaceinvaders.className = 'a lspaceinvaders gradient2';
  labout.className = 'a labout gradient2';
  lcontact.className = 'a lcontact gradient2';
  line1.className = "line1 gradient2m";
  line2.className = "line2 gradient2m";
  line3.className = "line3 gradient2m";
  tmp.classList.remove('tmp2');
  current.classList.remove('active');
  next.classList.add('active');
}

const about = document.querySelector('.labout');
about.addEventListener('click',actionClicked_about);

function actionClicked_about(event) {
  var myvar = setInterval(acc,33);
  setTimeout(function(){clearInterval(myvar)},3300);
  const current = document.querySelector('.active');
  const next = document.querySelector('.about');
  const tmp = document.querySelector('.tmp2');
  const line1 = document.querySelector('.line1');
  const line2 = document.querySelector('.line2');
  const line3 = document.querySelector('.line3');
  const lhome = document.querySelector('.lhome');
  const lspaceinvaders = document.querySelector('.lspaceinvaders');
  const labout = document.querySelector('.labout');
  const lcontact = document.querySelector('.lcontact');
  lhome.className = 'a lhome gradient3';
  lspaceinvaders.className = 'a lspaceinvaders gradient3';
  labout.className = 'a labout gradient3';
  lcontact.className = 'a lcontact gradient3';
  line1.className = "line1 gradient3m";
  line2.className = "line2 gradient3m";
  line3.className = "line3 gradient3m";
  tmp.classList.remove('tmp2');
  current.classList.remove('active');
  next.classList.add('active');
}

const contact = document.querySelector('.lcontact');
contact.addEventListener('click',actionClicked_contact);

function actionClicked_contact(event) {
  var myvar = setInterval(acc,33);
  setTimeout(function(){clearInterval(myvar)},3300);
  const current = document.querySelector('.active');
  const next = document.querySelector('.contact');
  const tmp = document.querySelector('.tmp2');
  const line1 = document.querySelector('.line1');
  const line2 = document.querySelector('.line2');
  const line3 = document.querySelector('.line3');
  const lhome = document.querySelector('.lhome');
  const lspaceinvaders = document.querySelector('.lspaceinvaders');
  const labout = document.querySelector('.labout');
  const lcontact = document.querySelector('.lcontact');
  lhome.className = 'a lhome gradient2';
  lspaceinvaders.className = 'a lspaceinvaders gradient2';
  labout.className = 'a labout gradient2';
  lcontact.className = 'a lcontact gradient2';
  line1.className = "line1 gradient2m";
  line2.className = "line2 gradient2m";
  line3.className = "line3 gradient2m";
  tmp.classList.remove('tmp2');
  current.classList.remove('active');
  next.classList.add('active');
}
