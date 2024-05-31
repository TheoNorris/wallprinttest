document.addEventListener("DOMContentLoaded", function () {
  const verticalCarouselElement = document.getElementById("verticalCarousel");
  const verticalCarousel = new bootstrap.Carousel(verticalCarouselElement, {
    interval: 2000,
    ride: "carousel",
  });

  verticalCarouselElement.addEventListener("slide.bs.carousel", function (e) {
    const activeItem = e.relatedTarget;
    const items = verticalCarouselElement.querySelectorAll(".carousel-item");

    items.forEach((item) => {
      item.classList.remove("carousel-item-next", "carousel-item-prev");
    });

    if (e.direction === "left") {
      activeItem.classList.add("carousel-item-next");
    } else {
      activeItem.classList.add("carousel-item-prev");
    }
  });

  verticalCarouselElement.addEventListener("slid.bs.carousel", function (e) {
    const activeItem = verticalCarouselElement.querySelector(
      ".carousel-item.active"
    );
    activeItem.classList.remove("carousel-item-next", "carousel-item-prev");
  });
});
