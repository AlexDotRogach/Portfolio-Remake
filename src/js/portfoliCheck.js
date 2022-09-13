function portfoliCheck() {
  const wrapItems = document.querySelector(".portfolio__items");
  const items = document.querySelectorAll(".portfolio__items .portfolio__item");
  const startValues = [];
  let oneAction = 0;

  items.forEach((item) => {
    startValues.push(item.innerHTML);
  });

  // После нажатию не по элементу закроет их
  wrapItems.addEventListener("click", (e) => {
    if (e.target.classList.contains("portfolio__items")) {
      clearActive(items, startValues);
    }
  });

  items.forEach((item, index) => {
    item.addEventListener("click", () => {
      //Убираю активные элементы после нажатия на элемент
      clearActive(items, startValues);

      if (oneAction === 0) {
        const hash = window.location.hash.substring(1);
        const arrTextUa = ["Підтвердьте перехід на ", "Переходжу", "Ні"];
        const arrTextEn = ["Confirm the transition to ", "Go to", "No"];
        let link = item.querySelector("a").getAttribute("href");
        let name = item.querySelector("a").getAttribute("name");
        let arrTextUse = arrTextUa;

        item.innerHTML = "";

        if (hash == "en") arrTextUse = arrTextEn;

        item.innerHTML = `
                    <div class="question">
                        <p>${arrTextUse[0]}${name}:</p>
                        <button><a href="${link}">${arrTextUse[1]}</a></button>
                        <button>${arrTextUse[2]}</button>
                    </div>
                `;

        item.querySelectorAll(".question button").forEach((btn) => {
          btn.addEventListener("click", () => {
            if (btn.textContent == `${arrTextUse[2]}`) {
              item.innerHTML = startValues[index];
              oneAction++;
            }
          });
        });
      }

      oneAction = 0;
    });
  });

  function clearActive(elements, startHtml) {
    elements.forEach((activeElem, elemIndex) => {
      if (activeElem.firstElementChild.classList.contains("question")) {
        activeElem.innerHTML = startHtml[elemIndex];
      }
    });
  }
}

export default portfoliCheck;
