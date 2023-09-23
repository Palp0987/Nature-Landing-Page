/////////////////////////////////////

//       for swiper in main section

/////////////////////////////////////////\

$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true,
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});

// ------------------------------------------------------

let tl = gsap.timeline();

tl.from(".content h2", {
  duration: 2,
  x: -400,
  ease: "power2.inOut",
}).from(".content h1", {
  duration: 2,
  x: -1500,
  ease: "",
}).from(".content span", {
  duration: 2,
  x: 1500,
  ease: "ease-in-out",
});
