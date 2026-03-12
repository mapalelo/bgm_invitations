
  window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const move = Math.min(scroll * 0.08, 60);

    const left = document.querySelector(".balloons-left");
    const right = document.querySelector(".balloons-right");

    left.style.transform = `translateX(${-move}px)`;
    right.style.transform = `translateX(${move}px)`;
  });
