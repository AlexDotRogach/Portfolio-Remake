function animTools() {
  const skillsBlock = document.querySelectorAll(
    ".skills__block-skills .skills__block-element"
  );

  let blockElemHeight = Math.round(
      skillsBlock[0].getBoundingClientRect().height
    ),
    counter = 0,
    arr = [];

  if (window.screen.height < 1200) blockElemHeight += 200;

  if (window.screen.height < 900) blockElemHeight += 100;

  if (window.screen.height < 700) blockElemHeight += 50;

  skillsBlock.forEach((item) => {
    let blockElemTop = item.getBoundingClientRect().top;

    arr.push(blockElemTop);
  });

  arr = arr.map((item) => item - +blockElemHeight);

  window.addEventListener("scroll", () => {
    const scroll = document.documentElement.scrollTop;

    arr.forEach((item, index) => {
      controlScroll(scroll, item, index);
    });
  });

  const generNextEl = showBlock();

  function* showBlock() {
    for (let i = 0; i < skillsBlock.length; i++) {
      skillsBlock[i].style.opacity = 1;
      yield i;
    }
  }

  function controlScroll(scr, pos, count) {
    if (scr >= pos && count == counter) {
      generNextEl.next();
      counter++;
    }
  }
}

export default animTools;
