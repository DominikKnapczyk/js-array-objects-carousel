// Seleziona tutti i div con classe "thumnail" e salva in una variabile "thumbnails"
const thumbnails = document.querySelectorAll('.thumnail');

// Array di oggetti che contiene informazioni sulle immagini
const images = [
  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

// Inizializziamo un contatore per tenere traccia dell'immagine corrente
let currentImage = 0;

// Selezioniamo i due pulsanti da utilizzare
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

// Selezioniamo il div in cui verrà visualizzata l'immagine
const bigImage = document.querySelector('.big-image');

// Funzione che mostra l'immagine successiva nell'array
function showNextImage() {
  // Incrementiamo il contatore per l'immagine successiva
  currentImage++;

  // Verifichiamo che il contatore non superi il numero di immagini presenti nell'array
  if (currentImage >= images.length) {
    // Se lo supera, lo reimpostiamo a 0 per tornare alla prima immagine
    currentImage = 0;
  }

  // Aggiorniamo il contenuto del div con l'immagine corrente
  bigImage.innerHTML = `<img src="${images[currentImage].image}" alt="${images[currentImage].title}">`;
}

// Funzione che mostra l'immagine precedente nell'array
function showPrevImage() {
  // Decrementiamo il contatore per l'immagine precedente
  currentImage--;

  // Verifichiamo che il contatore non sia negativo
  if (currentImage < 0) {
    // Se è negativo, lo reimpostiamo all'ultima immagine dell'array
    currentImage = images.length - 1;
  }

  // Aggiorniamo il contenuto del div con l'immagine corrente
  bigImage.innerHTML = `<img src="${images[currentImage].image}" alt="${images[currentImage].title}">`;
}

// Assegniamo le funzioni ai pulsanti per la navigazione
nextBtn.addEventListener('click', showNextImage);
nextBtn.addEventListener('click', selectedImage);
prevBtn.addEventListener('click', showPrevImage);
prevBtn.addEventListener('click', selectedImage);

// Mostriamo inizialmente la prima immagine
bigImage.innerHTML = `<img src="${images[currentImage].image}" alt="${images[currentImage].title}">`;

// Si imposta l'opacità delle immagini in base a quella corrente
function selectedImage() {
  const images = document.querySelectorAll(".thumnail");

  for (let i = 0; i < images.length; i++) {
    images[i].style.opacity = 0.5; // Imposta l'opacità di tutti i div a 0.5 di default
  
    if (i === currentImage) {
      images[i].style.opacity = 1; // Imposta l'opacità del div selezionato a 1
    }
  }
}


