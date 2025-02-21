async function fetchCoaches() {
  try {
    var response = await fetch("http://localhost:3000/api/coaches");
    return await response.json();
  } catch (error) {
    console.error("Error fetching coaches:", error);
    return [];
  }
}

//we used html dataset and we attached field property to the html card. Check the https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset link for more information.
function createCoachCard(coach) {
  return `
      <div class="profile-card" id="profile-card${coach.id}" data-field="${
    coach.field
  }">
          <img
            src="${coach.imageUrl || ""}"
            alt="image${coach.id}"
            class="profile-icon"
            id="contactBtn${coach.id}"
          />
          <div class="profile-name">${coach.name}</div>
          <div class="profile-position">${coach.university} <br> ${
    coach.program
  }</div>
          <div class="profile-position profile-rank" style="font-weight: bold;">${
            coach.score
          }</div>
          <a href="#" class="button open-button" id="infoBtn${
            coach.id
          }">Hakkında</a>
        </div>

        <div class="popup-card" id="popup-card${coach.id}">
          <h3>Hakkında</h3>
          <p>${coach.about}</p>
          <button class="button" id="closeBtnPopup${
            coach.id
          }" style="width: 100%">Kapat</button>
        </div>

        <div class="popup-card" id="contact-card${coach.id}">
          <h3>Sınav Sonucu</h3>
          <img
            src="${coach.examResultUrl || ""}"
            alt="image${coach.id}"
            class="exam-result"
          />
          <button class="button" id="closeBtnContact${
            coach.id
          }" style="width: 100%">Kapat</button>
        </div>
    `;
}

function attachEventListeners(coach) {
  const infoBtn = document.getElementById(`infoBtn${coach.id}`);
  const contactBtn = document.getElementById(`contactBtn${coach.id}`);
  const closeBtnPopup = document.getElementById(`closeBtnPopup${coach.id}`);
  const closeBtnContact = document.getElementById(`closeBtnContact${coach.id}`);
  const popup = document.getElementById(`popup-card${coach.id}`);
  const contactCard = document.getElementById(`contact-card${coach.id}`);

  infoBtn?.addEventListener("click", () => {
    popup.classList.add("open");
    document.getElementById("bg-color").classList.add("bg-color");
    document.querySelectorAll(".profile-card, .button").forEach((el) => {
      el.classList.add("profile-zindex");
    });
  });

  contactBtn?.addEventListener("click", () => {
    contactCard.classList.add("open");
    contactCard.scrollIntoView();
    document.getElementById("bg-color").classList.add("bg-color");
    document.querySelectorAll(".profile-card, .button").forEach((el) => {
      el.classList.add("profile-zindex");
    });
  });

  closeBtnPopup?.addEventListener("click", () => {
    popup.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    document.querySelectorAll(".profile-card, .button").forEach((el) => {
      el.classList.remove("profile-zindex");
    });
  });

  closeBtnContact?.addEventListener("click", () => {
    contactCard.classList.remove("open");
    document.getElementById("bg-color").classList.remove("bg-color");
    document.querySelectorAll(".profile-card, .button").forEach((el) => {
      el.classList.remove("profile-zindex");
    });
  });
}

async function renderCoaches() {
  const coaches = await fetchCoaches();
  const container = document.getElementById("coaches-container");
  if (container) {
    container.innerHTML = coaches.map(createCoachCard).join("");
    coaches.forEach(attachEventListeners);
  }
  return coaches;
}

function setupFilterButtons() {
  // 1. Create a mapping of button IDs to their corresponding filter values
  const filterButtons = {
    btnEa: "Eşit Ağırlık", // Button for "Eşit Ağırlık" field
    btnMf: "Sayısal", // Button for "Sayısal" field
    btnSoz: "Sözel", // Button for "Sözel" field
    btnAll: "all", // Button to show all coaches
  };

  // 2. Loop through each button and its corresponding filter value
  Object.entries(filterButtons).forEach(([buttonId, field]) => {
    // 3. Get the button element from the DOM using its ID
    const button = document.getElementById(buttonId);

    // 4. If the button exists, add a click event listener
    if (button) {
      button.addEventListener("click", () => {
        // 5. Get all coach cards from the DOM
        const cards = document.querySelectorAll(".profile-card");

        // 6. Loop through each card and decide whether to show or hide it
        cards.forEach((card) => {
          // 7. Check if we should show all cards or filter by specific field
          card.style.display =
            field === "all" || card.dataset.field === field ? "block" : "none";
        });
      });
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCoaches().then(() => {
    // Show all coaches by default
    const cards = document.querySelectorAll(".profile-card");
    cards.forEach((card) => (card.style.display = "block"));

    // Then setup filter buttons
    setupFilterButtons();
  });
});
