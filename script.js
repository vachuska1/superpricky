// prepinani dopravy
var trafficIndex = 0;
showTraffic(trafficIndex);

function nextSlideTraffic() {
    showTraffic(trafficIndex += 1);
}

function prevSlideTraffic() {
    showTraffic(trafficIndex -= 1);
}

function showTraffic(n) {
    var trafficSlides = document.getElementsByClassName("myTraffic");
    if (trafficSlides.length === 0) return; // Pokud nejsou žádné snímky, ukončete funkci
    if (n >= trafficSlides.length) {
        trafficIndex = 0;
    }
    if (n < 0) {
        trafficIndex = trafficSlides.length - 1;
    }
    for (var i = 0; i < trafficSlides.length; i++) {
        trafficSlides[i].classList.remove('active');
    }
    trafficSlides[trafficIndex].classList.add('active');
}

// prechod obrazku dopravy
var currentSlide = 0;
var slides = document.getElementsByClassName("myTraffic");
var transitioning = false; // Přidáme proměnnou, abychom sledovali, zda probíhá přechod

function nextSlideTraffic() {
  if (transitioning) return; // Pokud již probíhá přechod, ignorujeme další kliknutí
  transitioning = true; // Nastavíme proměnnou transitioning na true, abychom zabránili dalším kliknutím
  setTimeout(function() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    transitioning = false; // Nastavíme transitioning zpět na false, jakmile se přechod dokončí
  }, 500); // Nastavíme časové zpoždění na 2 sekundy
}


// Udrzitelnost
var sustainabilityIndex = 0;
showSustainability(sustainabilityIndex);

function nextSlideSustainability() {
    showSustainability(sustainabilityIndex += 1);
}

function prevSlideSustainability() {
    showSustainability(sustainabilityIndex -= 1);
}

function showSustainability(n) {
    var sustainabilitySlides = document.getElementsByClassName("mySustainability");
    if (sustainabilitySlides.length === 0) return; // Pokud nejsou žádné snímky, ukončete funkci
    if (n >= sustainabilitySlides.length) {
        sustainabilityIndex = 0;
    }
    if (n < 0) {
        sustainabilityIndex = sustainabilitySlides.length - 1;
    }
    for (var i = 0; i < sustainabilitySlides.length; i++) {
        sustainabilitySlides[i].classList.remove('active');
    }
    sustainabilitySlides[sustainabilityIndex].classList.add('active');
}

// popis


var descriptionIndex = 0;
    showDescription(descriptionIndex);

    function nextSlideDescription() {
        showDescription(descriptionIndex += 1);
    }

    function prevSlideDescription() {
        showDescription(descriptionIndex -= 1);
    }

    function showDescription(n) {
        var descriptions = document.getElementsByClassName("myDescriptions");
        if (descriptions.length === 0) return; // Pokud nejsou žádné snímky, ukončete funkci
        if (n >= descriptions.length) {
            descriptionIndex = 0;
        }
        if (n < 0) {
            descriptionIndex = descriptions.length - 1;
        }
        for (var i = 0; i < descriptions.length; i++) {
            descriptions[i].classList.remove('active');
        }
        descriptions[descriptionIndex].classList.add('active');
    }





var slideIndex = 0;
    showSlide(slideIndex);

    function nextSlide() {
      showSlide(slideIndex += 1);
    }

    function prevSlide() {
      showSlide(slideIndex -= 1);
    }

    function showSlide(n) {
      var slides = document.getElementsByClassName("mySlides");
      if (n >= slides.length) { slideIndex = 0; }
      if (n < 0) { slideIndex = slides.length - 1; }
      for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
      }
      slides[slideIndex].classList.add('active');
    }



//menu
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav.menu a[href^="#"]');

  links.forEach(link => {
      link.addEventListener('click', function (e) {
          e.preventDefault();

          const targetId = this.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
              const offsetTop = targetElement.getBoundingClientRect().top;
              const scrollOptions = {
                  top: offsetTop,
                  behavior: 'smooth'
              };
              window.scroll(scrollOptions);
          }
      });
  });
});








    