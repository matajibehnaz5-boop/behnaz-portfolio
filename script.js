const body = document.body;
const toggle = document.getElementById("langToggle");

function setLang(lang) {
  body.setAttribute("data-lang", lang);
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
}

toggle.addEventListener("click", () => {
  const next = body.getAttribute("data-lang") === "fa" ? "en" : "fa";
  setLang(next);
});

setLang("fa");
