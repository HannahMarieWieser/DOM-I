const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "middle-img-src": "img/mid-page-accent.jpg",

    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",

    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent["nav"]["img-src"]);



let navLinks = document.querySelectorAll('nav a');
navLinks[0].textContent = siteContent['nav']['nav-item-1'];
navLinks[1].textContent = siteContent['nav']['nav-item-2'];
navLinks[2].textContent = siteContent['nav']['nav-item-3'];
navLinks[3].textContent = siteContent['nav']['nav-item-4'];
navLinks[4].textContent = siteContent['nav']['nav-item-5'];
navLinks[5].textContent = siteContent['nav']['nav-item-6'];


let title = document.getElementsByClassName('cta-text')[0];
//title.textContent = siteContent['cta']['h1'];

title.getElementsByTagName('h1')[0].innerHTML = siteContent['cta']['h1'];
title.getElementsByTagName('button')[0].innerHTML = siteContent['cta']['button'];


let headImg = document.getElementById('cta-img');
headImg.setAttribute('src', siteContent['cta']['img-src'])


let textContent = document.querySelectorAll('.text-content');
textContent[0].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['features-h4'];
textContent[0].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['features-content'];

textContent[1].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['about-h4'];
textContent[1].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['about-content'];

let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

textContent[2].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['services-h4'];
textContent[2].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['services-content'];

textContent[3].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['product-h4'];
textContent[3].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['product-content'];

textContent[4].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['vision-h4'];
textContent[4].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['vision-content'];


let botContact = document.getElementsByClassName('contact');
botContact[0].getElementsByTagName('h4')[0].innerHTML = siteContent['contact']['contact-h4']
botContact[0].getElementsByTagName('p')[0].innerHTML = siteContent['contact']['address']
botContact[0].getElementsByTagName('p')[1].innerHTML = siteContent['contact']['phone']
botContact[0].getElementsByTagName('p')[2].innerHTML = siteContent['contact']['email']

let botFooter = document.getElementsByTagName('footer');
botFooter[0].getElementsByTagName('p')[0].innerHTML = siteContent['footer']['copyright']
