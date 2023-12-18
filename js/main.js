document.addEventListener("DOMContentLoaded", function () {
  // Створення заголовка сторінки
  const pageHeader = document.createElement("header");
  pageHeader.className = "page-header";

  const pageHeaderContainer = document.createElement("div");
  pageHeaderContainer.className = "page-header-container";

  const mobilePageNav = document.createElement("div");
  mobilePageNav.className = "mobile-page-nav";

  const pageLogo = document.createElement("img");
  pageLogo.className = "page-logo";
  pageLogo.setAttribute("src", "./image/logo.svg");
  pageLogo.setAttribute("alt", "CARS");

  const burgerBtn = document.createElement("button");
  burgerBtn.className = "burger-btn";
  burgerBtn.innerHTML = "&#9776;";

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.style.width = "175px"; // Задаємо ширину модального вікна
  modal.style.height = "260px"; // Задаємо висоту модального вікна
  modal.style.position = "fixed"; // Зафіксована позиція
  modal.style.top = "0"; // Верхній край екрану
  modal.style.right = "0"; // Правий край екрану

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const closeBtn = document.createElement("span");
  closeBtn.className = "close-btn";
  closeBtn.innerHTML = "&times;";
  closeBtn.style.width = "15px";
  closeBtn.style.height = "15px";
  closeBtn.style.color = "#ffffff";
  closeBtn.style.position = "absolute";
  closeBtn.style.top = "10px";
  closeBtn.style.right = "10px";
  closeBtn.style.cursor = "pointer";

  const pageNav = document.createElement("nav");
  pageNav.className = "page-nav mobile-nav";

  const headerList = document.createElement("ul");
  headerList.className = "header-list list";

  // Додавання посилань в навігацію
  const links = [
    { text: "Main", href: "#" },
    { text: "Our services", href: "#Our-services" },
    { text: "About", href: "#about-us" },
    { text: "Contacts", href: "#" },
  ];

  links.forEach((link) => {
    const listItem = document.createElement("li");
    listItem.className = "header-item list";

    const anchor = document.createElement("a");
    anchor.className = "header-link";
    anchor.setAttribute("href", link.href);
    anchor.textContent = link.text;

    listItem.appendChild(anchor);
    headerList.appendChild(listItem);
  });

  // Додавання створених елементів в DOM
  pageHeader.appendChild(pageHeaderContainer);
  pageHeaderContainer.appendChild(mobilePageNav);
  mobilePageNav.appendChild(pageLogo);
  mobilePageNav.appendChild(burgerBtn);
  modal.appendChild(modalContent);
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(pageNav);
  pageNav.appendChild(headerList);

  // Додавання заголовка в тіло документу
  document.body.appendChild(pageHeader);

  // Додавання модального вікна в тіло документу
  document.body.appendChild(modal);

  // Додавання обробників подій для відкриття та закриття модального вікна
  burgerBtn.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
