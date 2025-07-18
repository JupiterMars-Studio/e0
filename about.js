gsap.registerPlugin(Flip, SplitText, ScrollTrigger);
const isMobile = window.innerWidth <= 768; 
document.fonts.ready.then(() => {
    
  const quotes = document.querySelectorAll(".founder-desc");
  const founderDesc = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_about-founders",
      start: "top top",
      end: "bottom+=150% top",
      scrub: true,
      pin: true,
      markers: false,
      id: "founderPin",
    },
  });
  
  quotes.forEach((quote) => {
    if (!quote) return; 
    const split = new SplitText(quote, {
      type: "lines,words",
      linesClass: "line",
      mask: "lines",
    });

    const lines = split.lines;

    const founderDescTl = gsap.timeline();

    founderDescTl
      .from(lines, {
        yPercent: 100,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        stagger: 0.3,
      })

      .to(quote.querySelectorAll("span"), {
        color: "var(--swatch--photon)",
        opacity: 1,
        duration: 1
      })

    .to(lines, {
        color: "var(--swatch--grey)",
        duration: 1,
      }, "<")

      .to(lines, {
        yPercent: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.in",
        stagger: 0.5,
        delay: 1,
      });

    founderDesc.add(founderDescTl);
  });


  const movingImg = document.querySelector(".founder-image");
  const moveHere = document.querySelector(".goal-move-here");
  const beforeSection = document.querySelector(".section_about-founders");

  if (movingImg && moveHere && beforeSection) {
  ScrollTrigger.create({
    trigger: ".section_about-founders",
    start: "bottom+=100 bottom",
    end: "+=100",
    markers: false,
    onEnter: () => {
      const state = Flip.getState(movingImg);
      moveHere.appendChild(movingImg);
      Flip.from(state, {
        duration: 1,
        ease: "power2.inOut",
        absolute: true,
      });
    },
    onLeaveBack: () => {
      const state = Flip.getState(movingImg);
      beforeSection.appendChild(movingImg);
      Flip.from(state, {
        duration: 1,
        ease: "power2.inOut",
        absolute: true,
      });
    },
  });
}

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_about-goal",
      start: "top top",
      end: "+=100",
      markers: false,
      scrub: true,
      pin: false,
    },
  });

  tl.to(movingImg, {
    clipPath: "inset(0% 0% 100% 0%)",
    duration: 0.5,
    ease: "power2.in",
  });
  tl.from(".icons-goal", { autoAlpha: 0 }, "<");



//about-name section
gsap.set(".name_text-one", { autoAlpha: 0 });
gsap.set(".name_text-two", { autoAlpha: 0 });
gsap.set(".about-name_right", { yPercent: 50 });
gsap.set(".about-name_desc", { color: "#DFDDD7" });
const nameTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section_about-name",
    start: "top top",
    end: "+=100%",
    scrub: true,
    pin: true,
    markers: false,
  },
});
nameTl
  .to(".about-name_right", { yPercent: isMobile ? 9: 18, duration: 1, ease: "none" })
  .to(
    ".name_text-one",
    { autoAlpha: 1, duration: 1, delay: 0.5, ease: "none" },
    "<"
  )
  .to(
    ".about-name_desc:nth-child(1)",
    { color: "var(--color--text)", duration: 0.5, ease: "none" },
    "<"
  )
  .to("#maskRectLeft", {
    attr: { y: -300 },
    duration: 1.5,
    ease: "none",
  })
  .to(
    "#maskRectRight",
    {
      attr: { y: -300 },
      duration: 1.5,
      ease: "none",
    },
    "<"
  )
  .to(".mask_one", { top: "50%", ease: "none", duration: 1.1 }, "<")
  .to(".about-name_right", { yPercent: isMobile ? -21 : -8, duration: 1, ease: "none" }, "<")
  .to(
    ".about-name_desc:nth-child(1)",
    { autoAlpha: 0, duration: 0.5, delay: 0.5 },
    "<"
  )
  .to(
    ".about-name_desc:nth-child(2)",
    { color: "var(--color--text)", duration: 0.5, ease: "none" },
    "<"
  )
  .set("#maskRectLeft", { attr: { y: 300 } })
  .set("#maskRectRight", { attr: { y: 300 } })
  .to(".about-name_right", { yPercent: isMobile ? -52 : -38, duration: 1, ease: "none" })
  .to(
    "#maskRectLeft",
    {
      attr: { y: 0 },
      duration: 1.5,
      ease: "none",
    },
    "<"
  )
  .to(
    ".about-name_desc:nth-child(2)",
    { autoAlpha: 0, duration: 0.5, delay: 0.5 },
    "<"
  )
  .to(
    ".about-name_desc:nth-child(3)",
    { color: "var(--color--text)", duration: 0.5, ease: "none" },
    "<"
  )
  .to("#maskRectRight", {
    attr: { y: 0 },
    duration: 1.5,
    ease: "none",
  })
  .to(".about-name_right", { yPercent: isMobile ? -79 : -68, duration: 1, ease: "none" }, "<")
  .to(".mask_one", { top: "0%", ease: "none", duration: 1, delay: 0.5 }, "<")
  .to(
    ".about-name_desc:nth-child(3)",
    { autoAlpha: 0, duration: 0.5, delay: 0.5 },
    "<"
  )
  .to(
    ".about-name_desc:nth-child(4)",
    { color: "var(--color--text)", duration: 0.5, ease: "none" },
    "<"
  );

  

  


  //vision section
    let visionTop = SplitText.create(".about-vision_content-top", {
    type: "chars, words",
  });
  let visionBottom = SplitText.create(".about-vision_content-bottom", {
    type: "chars, words",
  });

  let visionTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_about-vision",
      start: "top top",
      end: "bottom+=100% top",
      scrub: true,
      markers: false,
      pin: true,
    },
  });

  visionTimeline
    .from(visionTop.chars, {
      y: -100,
      rotation: -20,
      autoAlpha: 0,
      stagger: {
        each: 0.05,
      },
      ease: "circ.out",
    })

    .from(
      visionBottom.chars,
      {
        y: 100,
        rotation: 20,
        autoAlpha: 0,
        stagger: {
          each: 0.05,
        },
        ease: "circ.out",
      },
      "<"
    );


    //text-reveal
    document.querySelectorAll(".about-reveal").forEach((el) => {
    let split = SplitText.create(el, { type: "lines, chars, words" });

    const revealTl = gsap.timeline ({
      scrollTrigger: {
        trigger: el,
        start: "top-=400 top",
        end: "+=300",
        scrub: true,
        markers: false,
      },
    });

    revealTl.from(split.chars, {
      autoAlpha: 0.5,
      color: "#DFDDD7",
      stagger: {
        each: 0.05,
      },
    })
    .to(split.chars, {
    //   autoAlpha: 0.5,
      color: "#DFDDD7",
     stagger: {
        each: 0.05,
      },
      delay: 1
    });
  });


});

