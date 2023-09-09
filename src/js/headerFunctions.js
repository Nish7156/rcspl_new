export function setupHeaderFunctions() {
    const navLinks = document.querySelector(".nav-links");
    const menuOpenBtn = document.querySelector(".navbar .bx-menu");
    const menuCloseBtn = document.querySelector(".nav-links .bx-x");
    const htmlcssArrow = document.querySelector(".htmlcss-arrow");
    const moreArrow = document.querySelector(".more-arrow");
    const jsArrow = document.querySelector(".js-arrow");
  
    menuOpenBtn.addEventListener("click", () => {
      navLinks.style.left = "0";
    });
  
    menuCloseBtn.addEventListener("click", () => {
      navLinks.style.left = "-100%";
    });
  
    htmlcssArrow.addEventListener("click", () => {
      navLinks.classList.toggle("show1");
    });


  
    return () => {
      menuOpenBtn.removeEventListener("click");
      menuCloseBtn.removeEventListener("click");
      htmlcssArrow.removeEventListener("click");
      moreArrow.removeEventListener("click");
      jsArrow.removeEventListener("click");
    };
  }
  