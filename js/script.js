document.addEventListener('DOMContentLoaded', function() {
  // Mobile nav toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
      navLinks.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  // Inject join form into the join section if present
  const joinSectionContainer = document.querySelector('.join-section .container');
  if (joinSectionContainer && !document.getElementById('joinForm')) {
    const formContainer = document.createElement('div');
    formContainer.id = 'joinFormContainer';
    formContainer.style.marginTop = '20px';
    formContainer.innerHTML = `
      <form id="joinForm" autocomplete="on" class="join-form">
        <div><input id="joinName" type="text" placeholder="Full Name" required></div>
        <div><input id="joinEmail" type="email" placeholder="Email" required></div>
        <div><input id="joinPhone" type="tel" placeholder="Phone Number" required></div>
        <div><input id="joinLocation" type="text" placeholder="Location (City, Country)" required></div>
        <div>
          <select id="joinType" required>
            <option value="" disabled selected>How would you like to contribute?</option>
            <option value="Volunteer">Volunteer</option>
            <option value="Donate">Donate</option>
            <option value="Partner">Partner</option>
          </select>
        </div>
        <div><textarea id="joinReason" placeholder="Reason for joining" rows="4" required></textarea></div>
        <div><button type="submit" class="cta-button whatsapp">Send</button></div>
      </form>`;
    joinSectionContainer.appendChild(formContainer);

    // Inline styling for the join form to ensure it looks good without touching global CSS
    const style = document.createElement('style');
    style.textContent = `
      #joinFormContainer { margin-top:20px; padding:20px; background:#fff; border-radius:8px; box-shadow:0 2px 8px rgba(0,0,0,.08); max-width:900px; margin-left:auto; margin-right:auto; }
      #joinForm { display:grid; grid-gap:12px; }
      #joinForm input, #joinForm textarea, #joinForm select { width:100%; padding:12px 14px; border:1px solid #ddd; border-radius:6px; font-size:1em; }
      #joinForm textarea { min-height:100px; resize:vertical; }
      #joinForm .cta-button { width:100%; }
    `;
    document.head.appendChild(style);
  }

  // Handle join form submission to WhatsApp
  const joinForm = document.getElementById('joinForm');
  if (joinForm) {
    joinForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('joinName').value.trim();
      const email = document.getElementById('joinEmail').value.trim();
      const phone = document.getElementById('joinPhone').value.trim();
      const location = document.getElementById('joinLocation').value.trim();
      const type = document.getElementById('joinType').value;
      const reason = document.getElementById('joinReason').value.trim();
      if (!name || !email || !phone || !location || !type || !reason) {
        alert('Please fill in all fields.');
        return;
      }
      const text = `New ILDC Member Application:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nLocation: ${location}\nRole: ${type}\nReason: ${reason}`;
      const url = 'https://wa.me/2349027109116?text=' + encodeURIComponent(text);
      window.open(url, '_blank');
    });
  }
});
