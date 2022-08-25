function request() {
  const formSoc = document.querySelector("form");
  const startForm = formSoc.innerHTML;
  const statusImg = [
    "./icons/loading.svg",
    "./icons/check.svg",
    "./icons/cancel.svg",
  ];

  formSoc.addEventListener("submit", (e) => {
    // setting language
    const langSet = {
      ua: ["Завантаження", "Викнонано", "Помилка"],
      en: ["Loading", "Done", "Mistake"],
    };
    let locHref = location.href;
    locHref = locHref.substring(locHref.length - 2, locHref.length); // leave only 2 last symbols
    const curLangWords = langSet[locHref]; // choose array
    const [load, done, mistake] = curLangWords;
    // end

    e.preventDefault();
    const newData = new FormData(formSoc);

    formSoc.innerHTML = "";

    createBlock(formSoc, load, statusImg[0], "loading");

    fetch("../smart.php", {
      method: "POST",
      body: newData,
    })
      .then(() => {
        setTimeout(createBlock(formSoc, done, statusImg[1], "loading"), 100);
        setTimeout(function () {
          formSoc.innerHTML = startForm;
          formSoc.style.display = "grid";
          formSoc.style.flexFlow = "none";
        }, 1000);
      })
      .catch(() => {
        setTimeout(createBlock(formSoc, mistake, statusImg[2], "loading"), 100);
        setTimeout(function () {
          formSoc.innerHTML = startForm;
          formSoc.style.display = "grid";
          formSoc.style.flexFlow = "none";
        }, 1000);
      })
      .finally(() => {
        formSoc.reset();
      });
  });

  function createBlock(parent, message, img, state) {
    formSoc.style.display = "flex";
    formSoc.style.flexFlow = "column nowrap";
    parent.innerHTML = `
            <div class="${state}">
                <span>${message}</span>
                <img src="${img}" alt="alt"></img>
            </div>
        `;
  }
}

export default request;
