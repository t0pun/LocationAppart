// hotel.component.js
const validezButton = document.getElementById('validez-btn');
const reservationSection = document.getElementById('reservation-section');

validezButton.addEventListener('click', function() {
  reservationSection.style.display = "block";
});