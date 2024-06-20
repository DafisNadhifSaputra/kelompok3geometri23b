particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100, // Jumlah partikel
            "density": {
                "enable": true,
                "value_area": 800 // Area di mana partikel akan tersebar
            }
        },
        "color": {
            "value": "#ffffff" // Warna partikel
        },
        "shape": {
            "type": "circle", // Bentuk partikel (circle, edge, triangle, polygon, star, image)
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
            "enable": true, // Apakah garis penghubung antar partikel diaktifkan
            "distance": 150, // Jarak maksimal untuk membentuk garis penghubung
            "color": "#ffffff", // Warna garis penghubung
            "opacity": 0.4, // Opacity garis penghubung
            "width": 1 // Ketebalan garis penghubung
            },
            "move": {
                "enable": true, // Apakah partikel bergerak
            "speed": 4, // Kecepatan pergerakan
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
    
threshold: 0.1, 
once: false, 
unable: 'mobile', 
    offset: 120, 
    });
    
    document.addEventListener('aos:in', ({ detail }) => {
        console.log('Animasi dimulai:', detail);
});

document.addEventListener('aos:out', ({ detail }) => {
console.log('Animasi selesai:', detail);
});

document.addEventListener('DOMContentLoaded', function() {
    const inputFields = document.querySelectorAll('#saran input, #saran textarea'); // Pilih semua input dan textarea
  
    inputFields.forEach(field => {
      field.addEventListener('focus', function() {
        const placeholderText = this.placeholder;
        this.placeholder = ''; // Kosongkan placeholder saat fokus
  
        let index = 0;
        function type() {
          if (index < placeholderText.length) {
            this.value += placeholderText.charAt(index);
            index++;
            setTimeout(type.bind(this), 80); // Panggil type() dengan konteks 'this'
          }
        }
  
        type.call(this); // Mulai pengetikan dengan konteks 'this'
      });
  
      field.addEventListener('blur', function() {
        if (this.value === '') {
          this.placeholder = placeholderText; // Kembalikan placeholder saat blur
        }
      });
    });
  });
  
document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.querySelector('#saran h2');
  
    // ... (kode JavaScript untuk mengetik teks)
  
    typingText.addEventListener('animationend', function() {
      // Reset animasi setelah selesai
      this.style.animation = 'none';
      void this.offsetWidth; // Memaksa reflow untuk memulai ulang animasi
      this.style.animation = 'typing 2.5s steps(40, end) infinite, blink-caret 0.75s step-end infinite';
  
      // Tambahkan jeda jika diperlukan (contoh: 2 detik)
      // setTimeout(() => {
      //   this.style.animation = 'typing 2.5s steps(40, end) infinite, blink-caret 0.75s step-end infinite';
      // }, 2000);
    });
  });
  
