document.addEventListener('DOMContentLoaded', function() {
    // Contoh animasi scroll reveal (opsional)
    ScrollReveal().reveal('.hero, .about, .projects, .contact, .skills, .saran', { 
        delay: 200,
        origin: 'bottom',
        distance: '1px',
        duration: 1000,
        reset: true
    });

    // Contoh validasi formulir kontak (opsional)
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // ... (Logika validasi formulir)
        });
    }
});


particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80, // Jumlah partikel
            "density": {
                "enable": true,
                "value_area": 800 // Area di mana partikel akan tersebar
            }
        },
        "color": {
            "value": "#ffffff" // Warna partikel
        },
        "shape": {
            "type": "star", // Bentuk partikel (circle, edge, triangle, polygon, star, image)
            "stroke": {
                "width": 0, // Ketebalan garis tepi
                "color": "#000000" // Warna garis tepi
            },
            "polygon": {
                "nb_sides": 5 // Jumlah sisi jika bentuknya polygon
            }
        },
        "opacity": {
            "value": 0.5, // Opacity partikel (0-1)
            "random": false, // Apakah opacity acak atau tidak
            "anim": {
                "enable": false, // Apakah opacity dianimasikan
                "speed": 1, // Kecepatan animasi opacity
                "opacity_min": 0.1, // Opacity minimum saat animasi
                "sync": false // Apakah animasi opacity sinkron antar partikel
                }
        },
        "size": {
            "value": 3, // Ukuran partikel
            "random": true, // Apakah ukuran acak atau tidak
            "anim": {
                "enable": false, // Apakah ukuran dianimasikan
                "speed": 40, // Kecepatan animasi ukuran
                "size_min": 0.1, // Ukuran minimum saat animasi
                "sync": false // Apakah animasi ukuran sinkron antar partikel
                }
        },
        "line_linked": {
            "enable": false, // Apakah garis penghubung antar partikel diaktifkan
            "distance": 150, // Jarak maksimal untuk membentuk garis penghubung
            "color": "#ffffff", // Warna garis penghubung
            "opacity": 0.4, // Opacity garis penghubung
            "width": 1 // Ketebalan garis penghubung
            },
            "move": {
                "enable": true, // Apakah partikel bergerak
            "speed": 6, // Kecepatan pergerakan
            "direction": "none", // Arah pergerakan (none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left)
            "random": false, // Apakah arah pergerakan acak
            "straight": false, // Apakah pergerakan lurus atau tidak
            "out_mode": "out", // Mode saat partikel keluar area (out, bounce)
            "bounce": false, // Apakah partikel memantul saat mengenai tepi
            "attract": {
                "enable": false, // Apakah ada gaya tarik-menarik antar partikel
                "rotateX": 600, // Rotasi gaya tarik-menarik pada sumbu X
                "rotateY": 1200 // Rotasi gaya tarik-menarik pada sumbu Y
                }
        }
    },
    "interactivity": {
        "detect_on":"window",
        "events":{
            "onclick":{
                "enable":true,
                "mode":"push"
            }
        }
        // ... (opsi interaksi dengan mouse) ...
    },
    "retina_detect": true // Mendeteksi layar retina untuk meningkatkan kualitas partikel
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        } else {
        entry.target.classList.remove('show');
        }
    });
  });
  
const elements = document.querySelectorAll('.hero .element h1');
elements.forEach(element => observer.observe(element));
  
AOS.init({
    // ... (opsi lainnya)
threshold: 0.1, // Animasi dimulai saat 10% elemen terlihat
once: false, // Animasi hanya berjalan sekali
unable: 'mobile', // Nonaktifkan animasi di perangkat mobile
    offset: 120, // Offset (dalam px) dari atas viewport untuk memulai animasi
    });
    
    document.addEventListener('aos:in', ({ detail }) => {
        console.log('Animasi dimulai:', detail);
});

document.addEventListener('aos:out', ({ detail }) => {
console.log('Animasi selesai:', detail);
});

window.addEventListener('scroll', () => {
console.log('Scrolling...');
});

const marquee = document.querySelector('.skill-marquee marquee');
marquee.addEventListener('animationiteration', () => {
  marquee.scrollLeft = 0; // Reset posisi scroll ke awal
});


function handleFormSubmit(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
  
    let isValid = true;
    const errorMessages = [];
  
    // Validasi nama
    if (nameInput.value.trim() === '') {
      isValid = false;
      errorMessages.push('Nama tidak boleh kosong.');
    }
  
    // Validasi email (contoh sederhana)
    if (!emailInput.value.includes('@')) {
      isValid = false;
      errorMessages.push('Email tidak valid.');
    }
  
    // Validasi pesan
    if (messageInput.value.trim() === '') {
      isValid = false;
      errorMessages.push('Pesan tidak boleh kosong.');
    }
  
    // Tampilkan pesan error (jika ada)
    const errorContainer = document.createElement('div');
    errorContainer.classList.add('error-messages');
  
    if (!isValid) {
      errorMessages.forEach(message => {
        const errorParagraph = document.createElement('p');
        errorParagraph.textContent = message;
        errorContainer.appendChild(errorParagraph);
      });
      contactForm.insertBefore(errorContainer, contactForm.firstChild);
    } else {
      // Kirim formulir (misalnya, menggunakan AJAX atau Formspree)
      // ...
    }
  };
  
