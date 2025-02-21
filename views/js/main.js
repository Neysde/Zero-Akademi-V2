window.onload = function () {
  $(function () {
    $(window).resize(function () {
      var reswidth = screen.width;
      if (reswidth < 1000 && reswidth >= 500) {
        var x = document.getElementById("zeroBanner");
        x.src = "bannerzero31000px.jpg";
      } else if (reswidth < 500) {
        var x = document.getElementById("zeroBanner");
        x.src = "zerobanner500px.png";
      } else {
        var x = document.getElementById("zeroBanner");
        x.src = "bannerzero3.jpg";
      }
    });
  });

  let daysContainer = document.getElementById("days");
  let hoursContainer = document.getElementById("hours");
  let minutesContainer = document.getElementById("minutes");
  let secondsContainer = document.getElementById("seconds");

  function updateCountdown() {
    let newYear = new Date("June 14, 2025 10:15:00");
    let currentTime = new Date();

    let diff = newYear - currentTime;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysContainer.innerHTML = days + "<span> Gün</span>";
    hoursContainer.innerHTML = hours + "<span> Saat</span>";
    minutesContainer.innerHTML = minutes + "<span> Dakika</span>";
    secondsContainer.innerHTML = seconds + "<span> Saniye</span>";
  }

  setInterval(updateCountdown, 1000);
};
