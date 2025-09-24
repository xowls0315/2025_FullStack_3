// intersectionObserver
const hi = document.querySelector("#hi");
const bye = document.querySelector("#bye");
const ob = new IntersectionObserver(
  (targets, observer) => {
    // console.log(targets);
    targets.forEach((v) => {
      if (v.isIntersecting) {
        v.target.animate(
          {
            transform: ["translateY(100px)", "translateY(0)"],
            opacity: [0, 1],
          },
          {
            duration: 500,
            easing: "ease",
            fill: "forwards",
          }
        );
        observer.unobserve(v.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);
ob.observe(hi);
ob.observe(bye);
