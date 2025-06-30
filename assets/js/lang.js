function getLanguageFromURL() {
  const params = new URLSearchParams(window.location.search);
  const lang = params.get("lang");
  return lang === "es" || lang === "en" ? lang : "es";
}

let currentLang = getLanguageFromURL();

function loadLanguage(lang) {
  fetch("/assets/json/lang.json")
    .then((response) => response.json())
    .then((data) => {
      const texts = document.querySelectorAll("[data-i18n]");
      texts.forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (data[lang][key]) {
          element.textContent = data[lang][key];
        }
      });
    });
  
}


  


document.addEventListener("DOMContentLoaded", () => {
  loadLanguage(currentLang);
});
const texts = document.querySelectorAll("[data-i18n]");
texts.forEach((element) => {
  const key = element.getAttribute("data-i18n");
  if (data[lang][key]) {
    // Si el texto tiene el marcador __name__, lo reemplazamos por tu nombre con span
    const finalText = data[lang][key].replace("__name__", '<span class="title-content">Hazel Chavez</span>');
    element.innerHTML = finalText; // usamos innerHTML en lugar de textContent
  }
});


