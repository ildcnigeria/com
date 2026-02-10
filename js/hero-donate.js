(function(){
  function init(){
    // Hero slider: cycle through slides by toggling 'active'
    const slides = document.querySelectorAll('.slider .slide');
    if (slides.length > 0) {
      let current = 0;
      slides[current].classList.add('active');
      setInterval(function(){
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
      }, 3000);
    }

    // Donate modal toggle
    const donateBtn = document.getElementById('donateBtn');
    const donateModal = document.getElementById('donateModal');
    const closeModal = document.getElementById('closeModal');
    if (donateBtn && donateModal) {
      donateBtn.addEventListener('click', function(){ donateModal.classList.add('active'); });
    }
    if (closeModal && donateModal) {
      closeModal.addEventListener('click', function(){ donateModal.classList.remove('active'); });
    }
    // Escape key closes modal
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape' && donateModal && donateModal.classList.contains('active')) {
        donateModal.classList.remove('active');
      }
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
