function setting() {
  // scroll top
  let topBtn = document.querySelector(".footer__wrapper-btn");
  let start = document.querySelector(".start");

  topBtn.addEventListener("click", (e) => {
    e.preventDefault();
    start.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  // load good back image on the start page
  const startElement = document.querySelector(".start");

  document.addEventListener("scroll", loadGoodPageStart);

  function loadGoodPageStart(e) {
    if (e.target.scrollingElement.scrollTop > startElement.clientHeight) {
      if (window.screen.width <= 769)
        startElement.style.background =
          'url("img/startBack.png") no-repeat 65% / cover';
      if (window.screen.width <= 580)
        startElement.style.background =
          'url("img/startBack.png") no-repeat 80% / cover';
      if (window.screen.width <= 500)
        startElement.style.background =
          'url("img/startBack.png") no-repeat 75% / cover';

      if (window.screen.width >= 769)
        startElement.style.background =
          'url("img/startBack.png") no-repeat 50% / cover';
    }
  }

  //
}

export default setting;
