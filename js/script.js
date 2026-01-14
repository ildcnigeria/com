document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    if (slides.length > 0) {
        showSlide(0);
        setInterval(nextSlide, 3000);
    }

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    const donateBtn = document.getElementById('donateBtn');
    const donateModal = document.getElementById('donateModal');
    const closeModal = document.getElementById('closeModal');

    if (donateBtn) {
        donateBtn.addEventListener('click', function() {
            donateModal.classList.add('active');
        });
    }

    if (closeModal) {
        closeModal.addEventListener('click', function() {
            donateModal.classList.remove('active');
        });
    }

    donateModal.addEventListener('click', function(e) {
        if (e.target === donateModal) {
            donateModal.classList.remove('active');
        }
    });

    const copyBtn = document.getElementById('copyBtn');
    if (copyBtn) {
        copyBtn.addEventListener('click', function() {
            const accountDetails = `Bank: Access Bank\nAccount Number: 1535512303\nAccount Name: Dreyson Global`;
            navigator.clipboard.writeText(accountDetails).then(function() {
                const originalText = copyBtn.innerHTML;
                copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
                setTimeout(function() {
                    copyBtn.innerHTML = originalText;
                }, 2000);
            }).catch(function(err) {
                alert('Failed to copy. Please manually copy the details.');
            });
        });
    }

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    navLinksItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});