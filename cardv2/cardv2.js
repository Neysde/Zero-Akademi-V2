$(function () {
  $(".list li:first-child").click(function () {
    window.setTimeout(function () {
      $(".profile").slideToggle();
    }, 300);
  });
  $(".list li:nth-child(2)").click(function () {
    window.setTimeout(function () {
      $(".trivia").slideToggle();
    }, 300);
  });
  $(".list li:nth-child(3)").click(function () {
    window.setTimeout(function () {
      $(".movies").slideToggle();
    }, 300);
  });
  $(".list li:nth-child(4)").click(function () {
    window.setTimeout(function () {
      $(".awards").slideToggle();
    }, 300);
  });
  $(".list li:nth-child(5)").click(function () {
    window.setTimeout(function () {
      $(".quotes").slideToggle();
    }, 300);
  });
  $(".btn-close").click(function () {
    $(".list-content").hide(300);
  });
});

//cardv2

window.onload = function () {
  const profileCard1 = document.getElementById("profile-card1");

  const infoBtn1 = document.getElementById("infoBtn1");
  const contactBtn1 = document.getElementById("contactBtn1");
  const closeBtnPopup1 = document.getElementById("closeBtnPopup1");
  const closeBtnContact1 = document.getElementById("closeBtnContact1");
  const popup1 = document.getElementById("popup-card1");
  const contactCard1 = document.getElementById("contact-card1");

  infoBtn1.addEventListener("click", () => {
    popup1.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    profileCard1.classList.add("profile-zindex");
  });

  contactBtn1.addEventListener("click", () => {
    contactCard1.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    profileCard1.classList.add("profile-zindex");
  });

  closeBtnPopup1.addEventListener("click", () => {
    popup1.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    profileCard1.classList.remove("profile-zindex");
  });

  closeBtnContact1.addEventListener("click", () => {
    contactCard1.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    profileCard1.classList.remove("profile-zindex");
  });
};

/* for (var k = 0, y = popups.length; k < y; k++) {
  console.log(popups[k]);
  popups[k].classList.add("open");
} */

/* window.onload = function () {
  var btns = document.getElementsByClassName("open-button");
  var popups = document.getElementsByClassName("popup-card");
  const popup = document.getElementById("popup-card1");
  var i;

  for (i = 0, x = btns.length; i < x; i++) {
    btns[i].onclick = function () {
      console.log(popups[i]);
      console.log(i);
    };
  }
}; */
