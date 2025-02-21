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

//new cards js

window.onload = function () {
  //coach categories
  let btnEa = document.getElementById("btnEa");
  let btnMf = document.getElementById("btnMf");
  let btnSoz = document.getElementById("btnSoz");
  let btnAll = document.getElementById("btnAll");

  let cards = document.getElementsByClassName("profile-card");

  let profileCard1 = document.getElementById("profile-card1");
  let profileCard3 = document.getElementById("profile-card3");
  let profileCard14 = document.getElementById("profile-card14");
  let profileCard15 = document.getElementById("profile-card15");
  let profileCard16 = document.getElementById("profile-card16");
  let profileCard5 = document.getElementById("profile-card5");
  let profileCard6 = document.getElementById("profile-card6");
  let profileCard2 = document.getElementById("profile-card2");
  let profileCard7 = document.getElementById("profile-card7");
  let profileCard8 = document.getElementById("profile-card8");
  let profileCard13 = document.getElementById("profile-card13");
  let profileCard9 = document.getElementById("profile-card9");
  let profileCard10 = document.getElementById("profile-card10");
  let profileCard11 = document.getElementById("profile-card11");
  let profileCard12 = document.getElementById("profile-card12");
  let profileCard17 = document.getElementById("profile-card17");
  let profileCard21 = document.getElementById("profile-card21");
  let profileCard22 = document.getElementById("profile-card22");
  let profileCard24 = document.getElementById("profile-card24");
  let profileCard18 = document.getElementById("profile-card18");
  let profileCard19 = document.getElementById("profile-card19");
  let profileCard20 = document.getElementById("profile-card20");
  let profileCard25 = document.getElementById("profile-card25");
  let profileCard23 = document.getElementById("profile-card23");

  btnEa.addEventListener("click", () => {
    profileCard1.classList.add("profile-card-display");
    profileCard3.classList.add("profile-card-display");
    profileCard14.classList.add("profile-card-display");
    profileCard15.classList.add("profile-card-display");
    profileCard16.classList.add("profile-card-display");
    profileCard17.classList.add("profile-card-display");
    profileCard21.classList.add("profile-card-display");
    profileCard22.classList.add("profile-card-display");
    profileCard24.classList.add("profile-card-display");
    profileCard5.classList.remove("profile-card-display");
    profileCard6.classList.remove("profile-card-display");
    profileCard2.classList.remove("profile-card-display");
    profileCard7.classList.remove("profile-card-display");
    profileCard8.classList.remove("profile-card-display");
    profileCard13.classList.remove("profile-card-display");
    profileCard9.classList.remove("profile-card-display");
    profileCard10.classList.remove("profile-card-display");
    profileCard11.classList.remove("profile-card-display");
    profileCard12.classList.remove("profile-card-display");
    profileCard18.classList.remove("profile-card-display");
    profileCard19.classList.remove("profile-card-display");
    profileCard20.classList.remove("profile-card-display");
    profileCard25.classList.remove("profile-card-display");
    profileCard23.classList.remove("profile-card-display");
  });

  btnMf.addEventListener("click", () => {
    profileCard5.classList.add("profile-card-display");
    profileCard6.classList.add("profile-card-display");
    profileCard2.classList.add("profile-card-display");
    profileCard7.classList.add("profile-card-display");
    profileCard8.classList.add("profile-card-display");
    profileCard13.classList.add("profile-card-display");
    profileCard9.classList.add("profile-card-display");
    profileCard10.classList.add("profile-card-display");
    profileCard11.classList.add("profile-card-display");
    profileCard12.classList.add("profile-card-display");
    profileCard18.classList.add("profile-card-display");
    profileCard19.classList.add("profile-card-display");
    profileCard20.classList.add("profile-card-display");
    profileCard25.classList.add("profile-card-display");
    profileCard1.classList.remove("profile-card-display");
    profileCard3.classList.remove("profile-card-display");
    profileCard14.classList.remove("profile-card-display");
    profileCard15.classList.remove("profile-card-display");
    profileCard16.classList.remove("profile-card-display");
    profileCard17.classList.remove("profile-card-display");
    profileCard21.classList.remove("profile-card-display");
    profileCard22.classList.remove("profile-card-display");
    profileCard24.classList.remove("profile-card-display");
    profileCard23.classList.remove("profile-card-display");
  });

  btnSoz.addEventListener("click", () => {
    profileCard5.classList.remove("profile-card-display");
    profileCard6.classList.remove("profile-card-display");
    profileCard2.classList.remove("profile-card-display");
    profileCard7.classList.remove("profile-card-display");
    profileCard8.classList.remove("profile-card-display");
    profileCard13.classList.remove("profile-card-display");
    profileCard9.classList.remove("profile-card-display");
    profileCard10.classList.remove("profile-card-display");
    profileCard11.classList.remove("profile-card-display");
    profileCard12.classList.remove("profile-card-display");
    profileCard18.classList.remove("profile-card-display");
    profileCard19.classList.remove("profile-card-display");
    profileCard20.classList.remove("profile-card-display");
    profileCard25.classList.remove("profile-card-display");
    profileCard1.classList.remove("profile-card-display");
    profileCard3.classList.remove("profile-card-display");
    profileCard14.classList.remove("profile-card-display");
    profileCard15.classList.remove("profile-card-display");
    profileCard16.classList.remove("profile-card-display");
    profileCard17.classList.remove("profile-card-display");
    profileCard21.classList.remove("profile-card-display");
    profileCard22.classList.remove("profile-card-display");
    profileCard24.classList.remove("profile-card-display");
    profileCard23.classList.add("profile-card-display");
  });

  btnAll.addEventListener("click", () => {
    for (var i = 0; i < cards.length; i++) {
      cards[i].classList.add("profile-card-display");
    }
    console.log("deneme");
  });

  //coach cards
  const infoBtn1 = document.getElementById("infoBtn1");
  const contactBtn1 = document.getElementById("contactBtn1");
  const closeBtnPopup1 = document.getElementById("closeBtnPopup1");
  const closeBtnContact1 = document.getElementById("closeBtnContact1");
  const popup1 = document.getElementById("popup-card1");
  const contactCard1 = document.getElementById("contact-card1");

  infoBtn1.addEventListener("click", () => {
    popup1.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");

    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn1.addEventListener("click", () => {
    contactCard1.classList.add("open");
    contactCard1.scrollIntoView();
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup1.addEventListener("click", () => {
    contactBtn1.scrollIntoView();
    popup1.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact1.addEventListener("click", () => {
    contactBtn1.scrollIntoView();
    contactCard1.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn2 = document.getElementById("infoBtn2");
  const contactBtn2 = document.getElementById("contactBtn2");
  const closeBtnPopup2 = document.getElementById("closeBtnPopup2");
  const closeBtnContact2 = document.getElementById("closeBtnContact2");
  const popup2 = document.getElementById("popup-card2");
  const contactCard2 = document.getElementById("contact-card2");

  infoBtn2.addEventListener("click", () => {
    popup2.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn2.addEventListener("click", () => {
    contactCard2.scrollIntoView();
    contactCard2.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup2.addEventListener("click", () => {
    contactBtn2.scrollIntoView();
    popup2.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact2.addEventListener("click", () => {
    contactBtn2.scrollIntoView();
    contactCard2.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn3 = document.getElementById("infoBtn3");
  const contactBtn3 = document.getElementById("contactBtn3");
  const closeBtnPopup3 = document.getElementById("closeBtnPopup3");
  const closeBtnContact3 = document.getElementById("closeBtnContact3");
  const popup3 = document.getElementById("popup-card3");
  const contactCard3 = document.getElementById("contact-card3");

  infoBtn3.addEventListener("click", () => {
    popup3.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn3.addEventListener("click", () => {
    contactCard3.scrollIntoView();
    contactCard3.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup3.addEventListener("click", () => {
    contactBtn3.scrollIntoView();
    popup3.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact3.addEventListener("click", () => {
    contactBtn3.scrollIntoView();
    contactCard3.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn5 = document.getElementById("infoBtn5");
  const contactBtn5 = document.getElementById("contactBtn5");
  const closeBtnPopup5 = document.getElementById("closeBtnPopup5");
  const closeBtnContact5 = document.getElementById("closeBtnContact5");
  const popup5 = document.getElementById("popup-card5");
  const contactCard5 = document.getElementById("contact-card5");

  infoBtn5.addEventListener("click", () => {
    popup5.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn5.addEventListener("click", () => {
    contactCard5.scrollIntoView();
    contactCard5.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup5.addEventListener("click", () => {
    contactBtn5.scrollIntoView();
    popup5.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact5.addEventListener("click", () => {
    contactBtn5.scrollIntoView();
    contactCard5.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn6 = document.getElementById("infoBtn6");
  const contactBtn6 = document.getElementById("contactBtn6");
  const closeBtnPopup6 = document.getElementById("closeBtnPopup6");
  const closeBtnContact6 = document.getElementById("closeBtnContact6");
  const popup6 = document.getElementById("popup-card6");
  const contactCard6 = document.getElementById("contact-card6");

  infoBtn6.addEventListener("click", () => {
    popup6.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn6.addEventListener("click", () => {
    contactCard6.scrollIntoView();
    contactCard6.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup6.addEventListener("click", () => {
    contactBtn6.scrollIntoView();
    popup6.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact6.addEventListener("click", () => {
    contactBtn6.scrollIntoView();
    contactCard6.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn7 = document.getElementById("infoBtn7");
  const contactBtn7 = document.getElementById("contactBtn7");
  const closeBtnPopup7 = document.getElementById("closeBtnPopup7");
  const closeBtnContact7 = document.getElementById("closeBtnContact7");
  const popup7 = document.getElementById("popup-card7");
  const contactCard7 = document.getElementById("contact-card7");

  infoBtn7.addEventListener("click", () => {
    popup7.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn7.addEventListener("click", () => {
    contactCard7.scrollIntoView();
    contactCard7.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup7.addEventListener("click", () => {
    contactBtn7.scrollIntoView();
    popup7.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact7.addEventListener("click", () => {
    contactBtn7.scrollIntoView();
    contactCard7.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn8 = document.getElementById("infoBtn8");
  const contactBtn8 = document.getElementById("contactBtn8");
  const closeBtnPopup8 = document.getElementById("closeBtnPopup8");
  const closeBtnContact8 = document.getElementById("closeBtnContact8");
  const popup8 = document.getElementById("popup-card8");
  const contactCard8 = document.getElementById("contact-card8");

  infoBtn8.addEventListener("click", () => {
    popup8.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn8.addEventListener("click", () => {
    contactCard8.scrollIntoView();
    contactCard8.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup8.addEventListener("click", () => {
    contactBtn8.scrollIntoView();
    popup8.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact8.addEventListener("click", () => {
    contactBtn8.scrollIntoView();
    contactCard8.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn9 = document.getElementById("infoBtn9");
  const contactBtn9 = document.getElementById("contactBtn9");
  const closeBtnPopup9 = document.getElementById("closeBtnPopup9");
  const closeBtnContact9 = document.getElementById("closeBtnContact9");
  const popup9 = document.getElementById("popup-card9");
  const contactCard9 = document.getElementById("contact-card9");

  infoBtn9.addEventListener("click", () => {
    popup9.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn9.addEventListener("click", () => {
    contactCard9.scrollIntoView();
    contactCard9.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup9.addEventListener("click", () => {
    contactBtn9.scrollIntoView();
    popup9.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact9.addEventListener("click", () => {
    contactBtn9.scrollIntoView();
    contactCard9.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn10 = document.getElementById("infoBtn10");
  const contactBtn10 = document.getElementById("contactBtn10");
  const closeBtnPopup10 = document.getElementById("closeBtnPopup10");
  const closeBtnContact10 = document.getElementById("closeBtnContact10");
  const popup10 = document.getElementById("popup-card10");
  const contactCard10 = document.getElementById("contact-card10");

  infoBtn10.addEventListener("click", () => {
    popup10.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn10.addEventListener("click", () => {
    contactCard10.scrollIntoView();
    contactCard10.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup10.addEventListener("click", () => {
    contactBtn10.scrollIntoView();
    popup10.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact10.addEventListener("click", () => {
    contactBtn10.scrollIntoView();
    contactCard10.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn11 = document.getElementById("infoBtn11");
  const contactBtn11 = document.getElementById("contactBtn11");
  const closeBtnPopup11 = document.getElementById("closeBtnPopup11");
  const closeBtnContact11 = document.getElementById("closeBtnContact11");
  const popup11 = document.getElementById("popup-card11");
  const contactCard11 = document.getElementById("contact-card11");

  infoBtn11.addEventListener("click", () => {
    popup11.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn11.addEventListener("click", () => {
    contactCard11.scrollIntoView();
    contactCard11.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup11.addEventListener("click", () => {
    contactBtn11.scrollIntoView();
    popup11.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact11.addEventListener("click", () => {
    contactBtn11.scrollIntoView();
    contactCard11.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn12 = document.getElementById("infoBtn12");
  const contactBtn12 = document.getElementById("contactBtn12");
  const closeBtnPopup12 = document.getElementById("closeBtnPopup12");
  const closeBtnContact12 = document.getElementById("closeBtnContact12");
  const popup12 = document.getElementById("popup-card12");
  const contactCard12 = document.getElementById("contact-card12");

  infoBtn12.addEventListener("click", () => {
    popup12.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn12.addEventListener("click", () => {
    contactCard12.scrollIntoView();
    contactCard12.classList.add("open");
    contactCard12.scrollIntoView();
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup12.addEventListener("click", () => {
    contactBtn12.scrollIntoView();
    popup12.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact12.addEventListener("click", () => {
    contactBtn12.scrollIntoView();
    contactCard12.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn13 = document.getElementById("infoBtn13");
  const contactBtn13 = document.getElementById("contactBtn13");
  const closeBtnPopup13 = document.getElementById("closeBtnPopup13");
  const closeBtnContact13 = document.getElementById("closeBtnContact13");
  const popup13 = document.getElementById("popup-card13");
  const contactCard13 = document.getElementById("contact-card13");

  infoBtn13.addEventListener("click", () => {
    popup13.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn13.addEventListener("click", () => {
    contactCard13.scrollIntoView();
    contactCard13.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup13.addEventListener("click", () => {
    contactBtn13.scrollIntoView();
    popup13.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact13.addEventListener("click", () => {
    contactBtn13.scrollIntoView();
    contactCard13.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn14 = document.getElementById("infoBtn14");
  const contactBtn14 = document.getElementById("contactBtn14");
  const closeBtnPopup14 = document.getElementById("closeBtnPopup14");
  const closeBtnContact14 = document.getElementById("closeBtnContact14");
  const popup14 = document.getElementById("popup-card14");
  const contactCard14 = document.getElementById("contact-card14");

  infoBtn14.addEventListener("click", () => {
    popup14.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn14.addEventListener("click", () => {
    contactCard14.scrollIntoView();
    contactCard14.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup14.addEventListener("click", () => {
    contactBtn14.scrollIntoView();
    popup14.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact14.addEventListener("click", () => {
    contactBtn14.scrollIntoView();
    contactCard14.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn15 = document.getElementById("infoBtn15");
  const contactBtn15 = document.getElementById("contactBtn15");
  const closeBtnPopup15 = document.getElementById("closeBtnPopup15");
  const closeBtnContact15 = document.getElementById("closeBtnContact15");
  const popup15 = document.getElementById("popup-card15");
  const contactCard15 = document.getElementById("contact-card15");

  infoBtn15.addEventListener("click", () => {
    popup15.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn15.addEventListener("click", () => {
    contactCard15.scrollIntoView();
    contactCard15.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup15.addEventListener("click", () => {
    contactBtn15.scrollIntoView();
    popup15.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact15.addEventListener("click", () => {
    contactBtn15.scrollIntoView();
    contactCard15.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn16 = document.getElementById("infoBtn16");
  const contactBtn16 = document.getElementById("contactBtn16");
  const closeBtnPopup16 = document.getElementById("closeBtnPopup16");
  const closeBtnContact16 = document.getElementById("closeBtnContact16");
  const popup16 = document.getElementById("popup-card16");
  const contactCard16 = document.getElementById("contact-card16");

  infoBtn16.addEventListener("click", () => {
    popup16.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn16.addEventListener("click", () => {
    contactCard16.scrollIntoView();
    contactCard16.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup16.addEventListener("click", () => {
    contactBtn16.scrollIntoView();
    popup16.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact16.addEventListener("click", () => {
    contactBtn16.scrollIntoView();
    contactCard16.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn17 = document.getElementById("infoBtn17");
  const contactBtn17 = document.getElementById("contactBtn17");
  const closeBtnPopup17 = document.getElementById("closeBtnPopup17");
  const closeBtnContact17 = document.getElementById("closeBtnContact17");
  const popup17 = document.getElementById("popup-card17");
  const contactCard17 = document.getElementById("contact-card17");

  infoBtn17.addEventListener("click", () => {
    popup17.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn17.addEventListener("click", () => {
    contactCard17.scrollIntoView();
    contactCard17.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup17.addEventListener("click", () => {
    contactBtn17.scrollIntoView();
    popup17.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }
    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact17.addEventListener("click", () => {
    contactBtn17.scrollIntoView();
    contactCard17.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn18 = document.getElementById("infoBtn18");
  const contactBtn18 = document.getElementById("contactBtn18");
  const closeBtnPopup18 = document.getElementById("closeBtnPopup18");
  const closeBtnContact18 = document.getElementById("closeBtnContact18");
  const popup18 = document.getElementById("popup-card18");
  const contactCard18 = document.getElementById("contact-card18");

  infoBtn18.addEventListener("click", () => {
    popup18.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn18.addEventListener("click", () => {
    contactCard18.scrollIntoView();
    contactCard18.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup18.addEventListener("click", () => {
    contactBtn18.scrollIntoView();
    popup18.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact18.addEventListener("click", () => {
    contactBtn18.scrollIntoView();
    contactCard18.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn19 = document.getElementById("infoBtn19");
  const contactBtn19 = document.getElementById("contactBtn19");
  const closeBtnPopup19 = document.getElementById("closeBtnPopup19");
  const closeBtnContact19 = document.getElementById("closeBtnContact19");
  const popup19 = document.getElementById("popup-card19");
  const contactCard19 = document.getElementById("contact-card19");

  infoBtn19.addEventListener("click", () => {
    popup19.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn19.addEventListener("click", () => {
    contactCard19.scrollIntoView();
    contactCard19.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup19.addEventListener("click", () => {
    contactBtn19.scrollIntoView();
    popup19.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact19.addEventListener("click", () => {
    contactBtn19.scrollIntoView();
    contactCard19.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn20 = document.getElementById("infoBtn20");
  const contactBtn20 = document.getElementById("contactBtn20");
  const closeBtnPopup20 = document.getElementById("closeBtnPopup20");
  const closeBtnContact20 = document.getElementById("closeBtnContact20");
  const popup20 = document.getElementById("popup-card20");
  const contactCard20 = document.getElementById("contact-card20");

  infoBtn20.addEventListener("click", () => {
    popup20.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn20.addEventListener("click", () => {
    contactCard20.scrollIntoView();
    contactCard20.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup20.addEventListener("click", () => {
    contactBtn20.scrollIntoView();
    popup20.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact20.addEventListener("click", () => {
    contactBtn20.scrollIntoView();
    contactCard20.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn21 = document.getElementById("infoBtn21");
  const contactBtn21 = document.getElementById("contactBtn21");
  const closeBtnPopup21 = document.getElementById("closeBtnPopup21");
  const closeBtnContact21 = document.getElementById("closeBtnContact21");
  const popup21 = document.getElementById("popup-card21");
  const contactCard21 = document.getElementById("contact-card21");

  infoBtn21.addEventListener("click", () => {
    popup21.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn21.addEventListener("click", () => {
    contactCard21.scrollIntoView();
    contactCard21.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup21.addEventListener("click", () => {
    contactBtn21.scrollIntoView();
    popup21.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact21.addEventListener("click", () => {
    contactBtn21.scrollIntoView();
    contactCard21.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn22 = document.getElementById("infoBtn22");
  const contactBtn22 = document.getElementById("contactBtn22");
  const closeBtnPopup22 = document.getElementById("closeBtnPopup22");
  const closeBtnContact22 = document.getElementById("closeBtnContact22");
  const popup22 = document.getElementById("popup-card22");
  const contactCard22 = document.getElementById("contact-card22");

  infoBtn22.addEventListener("click", () => {
    popup22.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn22.addEventListener("click", () => {
    contactCard22.scrollIntoView();
    contactCard22.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup22.addEventListener("click", () => {
    contactBtn22.scrollIntoView();
    popup22.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact22.addEventListener("click", () => {
    contactBtn22.scrollIntoView();
    contactCard22.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn23 = document.getElementById("infoBtn23");
  const contactBtn23 = document.getElementById("contactBtn23");
  const closeBtnPopup23 = document.getElementById("closeBtnPopup23");
  const closeBtnContact23 = document.getElementById("closeBtnContact23");
  const popup23 = document.getElementById("popup-card23");
  const contactCard23 = document.getElementById("contact-card23");

  infoBtn23.addEventListener("click", () => {
    popup23.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn23.addEventListener("click", () => {
    contactCard23.scrollIntoView();
    contactCard23.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup23.addEventListener("click", () => {
    contactBtn23.scrollIntoView();
    popup23.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact23.addEventListener("click", () => {
    contactBtn23.scrollIntoView();
    contactCard23.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn24 = document.getElementById("infoBtn24");
  const contactBtn24 = document.getElementById("contactBtn24");
  const closeBtnPopup24 = document.getElementById("closeBtnPopup24");
  const closeBtnContact24 = document.getElementById("closeBtnContact24");
  const popup24 = document.getElementById("popup-card24");
  const contactCard24 = document.getElementById("contact-card24");

  infoBtn24.addEventListener("click", () => {
    popup24.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn24.addEventListener("click", () => {
    contactCard24.scrollIntoView();
    contactCard24.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup24.addEventListener("click", () => {
    contactBtn24.scrollIntoView();
    popup24.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact24.addEventListener("click", () => {
    contactBtn24.scrollIntoView();
    contactCard24.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  const infoBtn25 = document.getElementById("infoBtn25");
  const contactBtn25 = document.getElementById("contactBtn25");
  const closeBtnPopup25 = document.getElementById("closeBtnPopup25");
  const closeBtnContact25 = document.getElementById("closeBtnContact25");
  const popup25 = document.getElementById("popup-card25");
  const contactCard25 = document.getElementById("contact-card25");

  infoBtn25.addEventListener("click", () => {
    popup25.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  contactBtn25.addEventListener("click", () => {
    contactCard25.scrollIntoView();
    contactCard25.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.add("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.add("profile-zindex");
    }
  });

  closeBtnPopup25.addEventListener("click", () => {
    contactBtn25.scrollIntoView();
    popup25.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });

  closeBtnContact25.addEventListener("click", () => {
    contactBtn25.scrollIntoView();
    contactCard25.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    var zindex = document.querySelectorAll(".profile-card");
    for (var i = 0; i < zindex.length; i++) {
      zindex[i].classList.remove("profile-zindex");
    }

    var zindex2 = document.querySelectorAll(".button");
    for (var i = 0; i < zindex.length; i++) {
      zindex2[i].classList.remove("profile-zindex");
    }
  });
};
