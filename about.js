gsap.registerPlugin(Flip, SplitText, ScrollTrigger);

document.fonts.ready.then(() => {
  const quotes = document.querySelectorAll(".founder-desc");
  const founderDesc = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_about-founders",
      start: "top top",
      end: "bottom+=100% top",
      scrub: true,
      pin: true,
      markers: false,
      id: "founderPin",
    },
  });

  quotes.forEach((quote) => {
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
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.3,
      })

      .to(lines, {
        yPercent: -100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.in",
        stagger: 0.3,
        delay: 0.3,
      });

    founderDesc.add(founderDescTl);
  });

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

  document.querySelectorAll(".about-reveal").forEach((el) => {
    let split = SplitText.create(el, { type: "chars, words" });

    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: el,
        start: "top-=400 top",
        end: "+=200",
        scrub: true,
        markers: false,
      },
      autoAlpha: 0.5,
      color: "#DFDDD7",
      stagger: {
        each: 0.05,
      },
    });
  });

  const movingImg = document.querySelector(".founder-image");
  const moveHere = document.querySelector(".goal-move-here");
  const beforeSection = document.querySelector(".section_about-founders");

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
});
