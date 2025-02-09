const navbar = document.getElementById('navbar');
const heroHeight = document.getElementById('home').offsetHeight;
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = mobileMenu.querySelectorAll('a');

// Toggle mobile menu
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Sticky Navbar Background Color Change on Scroll
window.addEventListener('scroll', () => {
    // Navbar background change when scrolled down
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white', 'shadow-md');
        navbar.classList.remove('bg-transparent');
    } else {
        navbar.classList.add('bg-transparent');
        navbar.classList.remove('bg-white', 'shadow-md');
    }
});



// Get modal and button elements
const getStartedBtn = document.getElementById('get-started-btn');
const videoModal = document.getElementById('video-modal');
const closeModalBtn = document.getElementById('close-modal');
const backgroundAudio = document.getElementById('backgroundAudio');
let player; // Variabel untuk menyimpan instance player YouTube

// Load YouTube IFrame API
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // Player is ready to use
}

// Open modal on button click
getStartedBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    videoModal.classList.remove('hidden');
    backgroundAudio.pause(); // Pause audio saat video dibuka
    player.playVideo(); // Memulai pemutaran video saat modal dibuka
});

// Close modal on button click
closeModalBtn.addEventListener('click', () => {
    videoModal.classList.add('hidden');
    player.pauseVideo(); // Hentikan pemutaran video saat modal ditutup
    backgroundAudio.play(); // Lanjutkan audio saat modal ditutup
});

// Close modal when clicking outside of the modal
videoModal.addEventListener('click', (event) => {
    if (event.target === videoModal) {
        videoModal.classList.add('hidden');
        player.pauseVideo(); // Hentikan pemutaran video saat modal ditutup
        backgroundAudio.play(); // Lanjutkan audio saat modal ditutup
    }
});

// Optional: Handle keyboard event to close modal
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { // Close modal with Esc key
        videoModal.classList.add('hidden');
        player.pauseVideo(); // Hentikan pemutaran video saat modal ditutup
        backgroundAudio.play(); // Lanjutkan audio saat modal ditutup
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Menampilkan modal saat halaman dimuat
    const modal = document.getElementById('autoModal');
    modal.classList.remove('hidden');

    // Mencegah scroll di belakang modal
    document.body.style.overflow = 'hidden';

    // Menutup modal dan mengembalikan fungsi scroll
    const closeModalBtn = document.getElementById('closeModal');
    closeModalBtn.addEventListener('click', function () {
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Mengembalikan scroll
    });
});

const scrollPrompt = document.getElementById('scrollPrompt');
let lastScrollTop = 0; // Posisi scroll terakhir

window.addEventListener('scroll', function () {
    // Ambil posisi scroll saat ini
    let currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        // Jika pengguna scroll ke bawah, sembunyikan teks
        scrollPrompt.classList.add('hidden');
    } else {
        // Jika pengguna scroll ke atas (kembali ke atas halaman), tampilkan teks
        scrollPrompt.classList.remove('hidden');
    }

    // Update posisi scroll terakhir
    lastScrollTop = currentScroll;
});

function openModal(modalId) {
    // Tampilkan modal
    document.getElementById(modalId).classList.remove('hidden');

    // Menonaktifkan scroll pada body ketika modal terbuka
    document.body.style.overflow = 'hidden';
}

function closeModal(modalId) {
    // Sembunyikan modal
    document.getElementById(modalId).classList.add('hidden');

    // Mengaktifkan kembali scroll pada body setelah modal ditutup
    document.body.style.overflow = 'auto';
}

//untuk carousel
const carousel = document.getElementById("carousel");
const dotsContainer = document.getElementById("dots");
const cardCount = carousel.children.length;
const cardWidth = carousel.scrollWidth / cardCount;
let currentIndex = 0;

// Create and append the correct number of dots based on card count
for (let i = 0; i < cardCount; i++) {
    const dot = document.createElement("span");
    dot.classList.add(
        "dot",
        "block",
        "w-2",
        "h-2",
        "rounded-full",
        "cursor-pointer",
        "transition-all",
        "duration-300"
    );
    dot.setAttribute("data-index", i);
    dot.classList.add(i === 0 ? "bg-gray-800" : "bg-gray-300");
    dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll(".dot");

function updateDots(activeIndex) {
    dots.forEach((dot, index) => {
        dot.classList.remove("bg-gray-800", "w-8");
        dot.classList.add("bg-gray-300", "w-2");
        if (index === activeIndex) {
            dot.classList.add("bg-gray-800", "w-8");
            dot.classList.remove("bg-gray-300");
        }
    });
}

function scrollToCard(index) {
    carousel.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
    });
    currentIndex = index;
    updateDots(index);
}

dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
        const index = Number(e.target.getAttribute("data-index"));
        scrollToCard(index);
    });
});

carousel.addEventListener("scroll", () => {
    const index = Math.round(carousel.scrollLeft / cardWidth);
    updateDots(index);
});

updateDots(0);



window.onload = function () {
    var audio = document.getElementById('backgroundAudio');
    audio.play().catch(function (error) {
        console.log('Autoplay was prevented:', error);
    });
};
