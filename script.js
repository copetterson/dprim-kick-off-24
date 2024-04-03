// Funksjon for å beregne og oppdatere nedtellingen
function updateCountdown() {
    const countdownDisplay = document.getElementById('countdown');
    const eventDate = new Date('April 5, 2024 17:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    // Beregn dager, timer, minutter og sekunder
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the countdown
    countdownDisplay.innerHTML = days + "d " + hours + "h " 
    + minutes + "m " + seconds + "s ";

    // Update the countdown every second
    setTimeout(updateCountdown, 1000);
}

// Start the countdown when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Legg til HTML-elementet for nedtellingen hvis det ikke allerede finnes
    if (!document.getElementById('countdown')) {
        const countdownElement = document.createElement('div');
        countdownElement.id = 'countdown';
        document.body.insertBefore(countdownElement, document.body.firstChild);
    }
    updateCountdown();
});

