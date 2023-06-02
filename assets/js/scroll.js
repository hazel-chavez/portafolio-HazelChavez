window.addEventListener("scroll", () => {
  let scrolling = window.pageYOffset || document.documentElement.scrollTop;
  if(scrolling > lastScrollTop ){
    document.querySelector(".header").style.top = "-100%";
  }else {
    document.querySelector(".header").style.top = "0";
  }
  lastScrollTop = scrolling;
},false)