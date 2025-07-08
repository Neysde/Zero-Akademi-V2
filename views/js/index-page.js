document.addEventListener('DOMContentLoaded', () => {
    const daysContainer = document.getElementById('days');
    const hoursContainer = document.getElementById('hours');
    const minutesContainer = document.getElementById('minutes');
    const secondsContainer = document.getElementById('seconds');

    // Set the date for the 2026 YKS exam (assuming a date in mid-June)
    const targetDate = new Date('June 13, 2026 10:15:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = targetDate - now;

        // Time calculations
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Display the result in the elements
        daysContainer.innerHTML = `${days}<span>Gün</span>`;
        hoursContainer.innerHTML = `${hours}<span>Saat</span>`;
        minutesContainer.innerHTML = `${minutes}<span>Dakika</span>`;
        secondsContainer.innerHTML = `${seconds}<span>Saniye</span>`;

        // If the countdown is over
        if (difference < 0) {
            clearInterval(interval);
            document.getElementById('countdown').innerHTML = "<h2>Sınav Zamanı Geldi! Başarılar!</h2>";
        }
    }

    // Update the countdown every 1 second
    const interval = setInterval(updateCountdown, 1000);
    
    // Initial call to display the timer immediately
    updateCountdown();
});