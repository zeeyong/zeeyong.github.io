document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("section:nth-of-type(3)");
  if (!section) return;

  const items = section.querySelectorAll(".pub-list-item.view-citation");
  const total = items.length;

  items.forEach((item, index) => {
    item.style.setProperty("--conf-num", total - index);
  });
});