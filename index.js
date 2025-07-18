
const hasVisited = localStorage.getItem('hasVisitedLoader');

gsap.registerPlugin(ScrollTrigger, SplitText);
const windowWidth = window.innerWidth;
const isMobile = window.innerWidth <= 768; 

if (hasVisited) {
//loader
gsap.set(".loader", { opacity: 1, display: "flex" });
const wrapper = document.querySelector('.svg-wrapper');
const original = document.querySelector('.svg-container');

  // Add class 'first' to the original (first) element
original.classList.add('first');

const totalCount = isMobile ? 18 : 35;
// console.log(totalCount)
  for (let i = 1; i < totalCount; i++) {
    const clone = original.cloneNode(true);

    if (i === 1) {
      clone.classList.remove('first');
      clone.classList.add('second');
    } else {
      clone.classList.remove('first');
      clone.classList.add('show');
    }

    wrapper.appendChild(clone);
  }


const wrapperWidth = document.querySelector(".svg-wrapper").offsetWidth;
const svgCount = 32;
const gap = isMobile ? 8 : 16;
const svgWidth = document.querySelector(".svg-container").offsetWidth;

const moveDistance = wrapperWidth - (svgWidth*2) - gap;

gsap.set(".bracket-text", {opacity: 0});
gsap.set(".section_home-header", {y: "100vh"});
gsap.set(".section_scrolling-logo", {y: "100vh"});
gsap.set(".navbar", {opacity: 0});
gsap.set(".hero-grid", {opacity: 0});
gsap.set(".bracket-end", {opacity: 0});
gsap.set(".link-hover-line", {opacity: 0});
gsap.set(".video-mask", {x: isMobile ? "36px" : "75px"})
gsap.set(".masking-left", {width: "120px", display: "block"});
gsap.set(".masking-right", {width: "333px", display: "block"});


const navbarWidth = document.querySelector(".navbar-container").offsetWidth;
const bracketWidth = (navbarWidth - ((isMobile ? 8 : 12.47) * 2) - 20) / 2;



const tl = gsap.timeline()
  .from(".show", {visibility: "hidden", stagger: 0.1, ease: "none"})
  .to(".second", {x: moveDistance, ease: "none", duration: isMobile ? 0.3 : 0.64, delay: 1})
  .to(".show", {
  visibility: "hidden",
  stagger: {
    each: 0.02,
    from: "start" // ensures first to last
  },
  ease: "none"
}, "<")
  .to(".bracket-text", {opacity: 1, duration: 0.5, ease: "none"}, "<=0.2")
  .to(".svg-container", {opacity: 0, delay: 1})
  .to(".background-video", {width: "100%", height: "50vh", duration: 2, ease: "none"})
  .to(".video-mask", {x: 0, duration: 2, ease: "none"}, "<")
  .to(".company-1", {scale: isMobile ? 4 : 6, duration: 2, ease: "none", x: "-120vw", y: "-40vh"}, "<")
  .to(".company-2", {scale: isMobile ? 4 : 6, duration: 2, ease: "none", x: "120vw", y: "-40vh"}, "<")
  .to(".video-mask", {bottom: "10%", top: "10%", duration: 0.5, ease: "none"})
  .to(".background-video", {height: "80vh", duration: 1.5, ease: "none"}, "<")
  .to(".video-mask", {top: "0%", bottom: "unset", duration: 1, ease: "none"})
  .to(".background-video", {height: isMobile ? "27px" : "44px", width: isMobile ? "27px" : "44px", duration: 1.5, ease: "none"})

  .to(".section_home-header", {y: 0, duration: 2, ease: "none"}, "<")
  .to(".bracket-end", {opacity: 1, duration: 0.5, ease: "none"})
  .to(".section_scrolling-logo", {y: 0, duration: 1, ease: "power2.out"}, "<")
  .to(".navbar", {opacity: 1, duration: 0.5, ease: "none"})
  .to(".bracket-end", {opacity: 0, duration: 0.5, ease: "none"}, "<")
  .to(".bracket-end-nav", {display: "flex", duration: 0.5, ease: "none"}, "<")
  .to(".logo-right-nav", {x: bracketWidth, duration: 0.5, ease: "none"}, "<")
  .to(".logo-left-nav", {x: -bracketWidth, duration: 0.5, ease: "none"}, "<")
  .to(".link-hover-line", {opacity: 1, duration: 0.5, ease: "none"}, "<")
  .to(".video-mask", {display: "none", duration: 0}, "<")
  .to(".loader", {backgroundColor: "transparent", duration: 0.5, ease: "none"}, "<")
  .to(".logo-right-nav", {opacity: 0, duration: 0.2, ease: "none"})
  .to(".masking-right", { x: -333, width: "0px", duration: 1, ease: "none"}, "<")
  .to(".masking-left", { x: 34, width: "0px", duration: 1, ease: "none"}, "<")
  .to(".bracket-end-nav", {display: "none", duration: 0, ease: "none"})
  .to(".hero-grid", {opacity: 1, duration: 1, ease: "none"})
  .to(".loader", {display: "none"})
}



//hero
const heroGrid = document.getElementById("hero-grid");
  const specialIndexes = [368, 394, 476, 500];
  const specialMobileIndexes = [180, 196, 160, 166];
  const specialColor = ["quaternary-color", "plasma-fluor", "laser-fluor", "secondary-background"]
  const texts = ["B2B Design", "B2B MARKETING DESIGN", "B2B Design Ops", "B2B Branding"];

  const rows = isMobile ? 19 : 18;
  const columns = isMobile ? 11 : 30;

for (let i = 0; i < rows * columns; i++) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("hero-svg-wrapper");
    const iconWrapper = document.createElement("div");
    iconWrapper.classList.add("hero-svg-icon");

    const activeSpecialIndexes = isMobile ? specialMobileIndexes : specialIndexes;
    const isSpecial = activeSpecialIndexes.includes(i);
    if (isSpecial) iconWrapper.classList.add("special");
    const labelIndex = activeSpecialIndexes.indexOf(i);

    iconWrapper.innerHTML = `
      <svg viewBox="0 0 10 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.35 29.9971C3.89716 28.6535 2.33617 24.9387 2.33617 16.4973C2.33617 8.05596 3.90247 4.34112 9.35 2.99757V0H0V33H9.35V30.0024V29.9971Z" fill="${isSpecial ? `var(--color--${specialColor[labelIndex]})` : 'var(--color--hero-grid)'}"/>
      </svg>
      ${isSpecial ? `<span class="expander">${texts[labelIndex]}</span>` : ''}
      <svg viewBox="0 0 10 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.648438 0V2.99805C6.10128 4.34182 7.66227 8.05727 7.66227 16.5C7.66227 24.9427 6.10128 28.6582 0.648438 30.0019V33H9.99844V0H0.648438Z" fill="${isSpecial ? `var(--color--${specialColor[labelIndex]})` : 'var(--color--hero-grid)'}"/>
      </svg>
    `;
wrapper.appendChild(iconWrapper);
    heroGrid.appendChild(wrapper);
  }


document.querySelectorAll('.hero-svg-icon.special').forEach(icon => {
    const leftSVG = icon.querySelector('svg:first-of-type');
    const rightSVG = icon.querySelector('svg:last-of-type');
    const expander = icon.querySelector('.expander');

    // Set initial state
    gsap.set(expander, { width: 0, opacity: 0 });

    icon.addEventListener('mouseenter', () => {
      // Animate SVGs apart
      gsap.to(leftSVG, { x: -6, duration: 0.3, ease: "power2.out" });
      gsap.to(rightSVG, { x: 6, duration: 0.3, ease: "power2.out" });

      // Expand text
      gsap.to(expander, {
        width: "auto",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        onUpdate: () => {
          expander.style.width = expander.scrollWidth + "px";
        }
      });
    });

    icon.addEventListener('mouseleave', () => {
      gsap.to(leftSVG, { x: 0, duration: 0.5 });
      gsap.to(rightSVG, { x: 0, duration: 0.5 });
      gsap.to(expander, { width: 0, opacity: 0, duration: 0.5 });
    });
  });
  
  
  //how we do
document.addEventListener("DOMContentLoaded", () => {
const allLis = document.querySelectorAll(".text_how-we");
const tlHows = gsap.timeline();
const heading = document.querySelector(".icon_how-we svg");
const staggerDelay = 0.5;

allLis.forEach((li, index) => {
  const color = li.dataset.color || "#FFFCF5";
  const isFirst = index === 0;
  const isLast = index === allLis.length - 1;


  // Initial styles
  gsap.set(li, {
    //transformOrigin: "0 50%",
    // color: "#140826"
  });

  if (!isFirst) {
    gsap.set(li, {
      opacity: 0.2,
          // color: "#FFFCF5",
		      x: -50
    });
	  
	  const time = (index - 1) * staggerDelay;

    // Animate in
    tlHows.to(li, {
      opacity: 1,
		// color: color,
		x: 0
    }, time); // simulate stagger
	  
	  tlHows.to(heading, {
      // color: color
    }, time);
  }

  // Animate out (skip last one)
  if (!isLast) {
    tlHows.to(li, {
      opacity: 0.2,
		//  color: "#FFFCF5",
		 x: -100
    }, index * 0.5); 
  }
});

ScrollTrigger.create({
  trigger: ".icon_how-we",
  start: "center center",
  endTrigger: ".text_how-we:last-of-type",
  end: "center center",
  pin: true,
  markers: false,
  animation: tlHows,
  scrub: true
});

 });
  
  


//our result
document.querySelectorAll('.our-result').forEach(caseEl => {
  const accordions = caseEl.querySelectorAll('.our-result_accordion');
  const items = caseEl.querySelectorAll('.our-result_item');
  const seeProjectLink = caseEl.querySelector('.our-result_see-project');

  // Assign index manually
  accordions.forEach((acc, index) => acc.dataset.index = index);
  items.forEach((item, index) => item.dataset.index = index);

  // Expand/collapse with animated height
  const toggleAccordionHeight = (acc, expand) => {
    const content = acc.querySelector('.our-result_accordion-content');
    if (!content) return;

  
    if (expand) {
      acc.classList.add('expanded');

      content.style.transition = 'none';
      content.style.maxHeight = '0px';
      content.offsetHeight;
      content.style.transition = 'max-height 0.3s ease, padding-top 0.3s ease';

      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      acc.classList.remove('expanded');
      content.style.maxHeight = "0px";
    }
  };

  // Activate and update link
  const updateActive = (index) => {
    accordions.forEach(acc => {
      const isActive = acc.dataset.index === index;
      acc.classList.toggle('active', isActive);
      toggleAccordionHeight(acc, isActive);

      if (isActive && seeProjectLink) {
        const url = acc.dataset.url;
        seeProjectLink.href = url;
      }
    });
  };

  // Accordion click scroll
  accordions.forEach(acc => {
    acc.addEventListener('click', () => {
      const index = acc.dataset.index;
      const item = caseEl.querySelector(`.our-result_item[data-index="${index}"]`);

      if (item) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: item,
            offsetY: window.innerHeight / 2 - item.offsetHeight / 2
          },
          ease: "power2.out"
        });
      }

      const isExpanded = acc.classList.contains('expanded');
      accordions.forEach(a => toggleAccordionHeight(a, false));
      toggleAccordionHeight(acc, !isExpanded);
    });
  });

  // Activate on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const index = entry.target.dataset.index;
        updateActive(index);
      }
    });
  }, {
    threshold: 0.5
  });

  items.forEach(item => observer.observe(item));
});





//whatwedo
document.querySelectorAll('.what-we_services').forEach(itemsContainer => {
  const items = Array.from(itemsContainer.querySelectorAll('.what-we_service-item'));
  const itemCount = items.length;

  const itemWidth = 500;
  const itemHeight = 100;
  const padding = 20;

  const areaWidth = isMobile ? window.innerWidth : itemCount * (itemWidth + padding);
  const areaHeight = isMobile ? window.innerHeight * 0.45 : window.innerHeight * 0.6;

  const placedRects = [];

  if (isMobile != true) {
    itemsContainer.style.position = 'relative';
    itemsContainer.style.width = `${areaWidth}px`;
    itemsContainer.style.height = `100%`;

    items.forEach(item => {
      let placed = false;
      let attempts = 0;

      while (!placed && attempts < 300) {
        const left = Math.random() * (areaWidth - itemWidth);
        const top = Math.random() * (areaHeight - itemHeight);

        const newRect = {
          left,
          top,
          right: left + itemWidth,
          bottom: top + itemHeight
        };

        const overlapping = placedRects.some(rect =>
          isOverlapping(rect, newRect, padding)
        );

        if (!overlapping) {
          item.style.position = 'absolute';
          item.style.left = `${left}px`;
          item.style.top = `${top}px`;
          placedRects.push(newRect);
          placed = true;
        }

        attempts++;
      }

      if (!placed) {
        console.warn("Could not place item without overlap");
      }
    });
  } else {
    items.forEach(item => {
        const maxMarginLeft = window.innerWidth - item.offsetWidth;
        const randomMarginLeft = Math.random() * maxMarginLeft;
        item.style.marginLeft = `${randomMarginLeft}px`;
      });
  }

  function isOverlapping(a, b, padding = 20) {
    return !(
      a.right + padding < b.left ||
      a.left - padding > b.right ||
      a.bottom + padding < b.top ||
      a.top - padding > b.bottom
    );
  }
});

  
  
  

  
  const panels = gsap.utils.toArray(".what-we_panel");
if (isMobile != true) {
  const master = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_what-we",
      pin: true,
      scrub: true,
      markers: false,
      start: "top top",
      end: () => "+=" + window.innerWidth * panels.length * 4, // extra scroll space
    }
  });
  
  const BASE_SCROLL_SPEED = 1000; // smaller = longer scroll

  panels.forEach((panel, i) => {
    const inner = panel.querySelector(".what-we_inner") || panel.querySelector(".what-we_services");
    const panelWidth = panel.offsetWidth;
  
    // Step 1: Slide horizontally to this panel
    master.to(panels, {
      xPercent: -100 * i,
      duration: 0.5,
      ease: "none",
    });
  
    // Step 2: Scroll .inner if it overflows
    if (inner && inner.scrollWidth > panelWidth) {
      const scrollDistance = inner.scrollWidth - panelWidth;
      const scrollDuration = scrollDistance / BASE_SCROLL_SPEED;
  

if (scrollDistance > 0) {
  master.to(inner, {
    x: -scrollDistance,
    ease: "none",
    duration: scrollDistance / BASE_SCROLL_SPEED
  });
} else {
  master.to({}, { duration: 0.3 }); // filler time if no scroll needed
}
    }
  
     const items = panel.querySelectorAll('.what-we_service-item[data-expand]');
  
    items.forEach((item) => {
      const img = item.querySelector("img");
      const svgs = item.querySelectorAll("svg");
      const wrapper = item.querySelector(".what-we_service-item-icon");


      if (img) {
        gsap.fromTo(img,
        { scale: 0, opacity: 0, width: 0, marginLeft: 0, marginRight: 0 },
          {
            scale: 1,
            opacity: 1,
            width: 'auto',
            transformOrigin: "top right",
            marginLeft: "-43px",  
            marginRight: "-18px",
            scrollTrigger: {
              containerAnimation: master,
              trigger: item,
              start: "left 50%",
              end: "left 30%",
              scrub: true,
              markers: false
            }
          }
        );
      }
  
      svgs.forEach(svg => {
        gsap.fromTo(svg,
          { scale: 1 },
          {
            scale: 2.5,
             transformOrigin: "top right",
              scrollTrigger: {
              containerAnimation: master,
              trigger: item,
              start: "left 50%",
              end: "left 30%",
              scrub: true
            }
          }
        );
      });

      if (wrapper) {
        gsap.to(wrapper, {gridColumnGap: "0px",
            scrollTrigger: {
              containerAnimation: master,
              trigger: item,
              start: "left 50%",
              end: "left 30%",
              scrub: true,
              markers: false
            }
        })
      }
       });
  });
  
} else {
// Mobile version
  panels.forEach((panel) => {
    const items = panel.querySelectorAll('.what-we_service-item[data-expand]');

    items.forEach((item) => {
      const wrapper = item.querySelector(".what-we_service-item-icon");
      const img = item.querySelector("img");
      const svgs = item.querySelectorAll("svg");

      if (wrapper) {
        gsap.to(wrapper, {gridColumnGap: "0px",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "+=200",
              scrub: true,
              markers: false
            }
        })
      }


      if (img) {
        gsap.fromTo(img,
        { display: "none", scale: 0, opacity: 0, width: 0, marginLeft: 0, marginRight: 0 },
          {
            scale: 1,
            opacity: 1,
            display: "block",
            width: 'auto',
            transformOrigin: "top right",
            marginRight: "-1px",
            marginLeft: "-13px",
            duration: 2,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "+=200",
              scrub: true,
              markers: false
            }
          }
        );
      }
  
      svgs.forEach(svg => {
        gsap.fromTo(svg,
          { scale: 1 },
          {
            scale: 2.5,
            ease: "none",
             transformOrigin: "top right",
              scrollTrigger: {
              trigger: item,
              start: "top 80%",
              duration: 1,
              end: "+=200",
              scrub: true
            }
          }
        );
      });
       });
  })
}


if (isMobile != true) {
//connect section
const textWidth = document.querySelector(".connect_content").offsetWidth;

let footer = document.querySelector(".section_connect");
const whatWeSection = document.querySelector(".section_what-we");

// Estimate how much vertical scroll the pinned section takes
const pinnedScrollHeight = window.innerWidth * panels.length * 3;

const getOverlap = () => {
  const baseHeight = footer.offsetHeight;
  return Math.min(window.innerHeight, baseHeight + pinnedScrollHeight);
};

const adjustFooterOverlap = () => {
    footer.style.marginTop = -getOverlap() + "px";
  };
  
  adjustFooterOverlap();
  
  ScrollTrigger.addEventListener("revert", adjustFooterOverlap);
//   console.log("this is total scroll", getOverlap() + textWidth + windowWidth);
  
  ScrollTrigger.create({
    trigger: footer,
    start: () => "top " + (window.innerHeight - getOverlap()),
    end: () => "+=" + (getOverlap() + textWidth + windowWidth ),
    pin: true,
    markers: false,
    // onEnter: self => {
    //     self.spacer.style.backgroundColor = "#140826";
    //   },
    //   onLeave: () => {
    //     const logo = document.querySelector(".connect_logo");
    //     const footer = document.querySelector(".footer");
    
    //     if (logo && footer) {
    //       // Get current screen position
    //       const rect = logo.getBoundingClientRect();
    //       const scrollY = window.scrollY;
    //       const topOffset = rect.top + scrollY;
    
    //       // Move logo into footer
    //       footer.appendChild(logo);
    
   
    //     }
    //   }
  });
  






// console.log('textWidth:', textWidth, 'windowWidth:', windowWidth);




const initialLogoX = textWidth - window.innerWidth / 2 + 10;
// const revealOffset = window.innerHeight * 2.08; 
// console.log('revealOffset:', revealOffset);

gsap.set(".connect_logo", {
  xPercent: -50,
  yPercent: -50,
  x: initialLogoX
});

gsap.set(".footer-wrapper", { height: "70vh"})




const scrollText = gsap.timeline({
  scrollTrigger: {
    trigger: ".connect_wrapper",
    start: "top top",
    end: `+=${textWidth + windowWidth}`,
    scrub: true,
    pin: true,
    markers: false
  }
})
.to({}, { duration: 2 }) 
.to(".connect_content", { x: -textWidth, duration: 8, ease: "none"}) // scroll text out to left
.to(".connect_logo", { x: 0, duration: isMobile ? 8 : 7, ease: "none" }, "<") // fly logo to center


const postScrollLogoAnim = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_footer",
      start: isMobile ? "top+=200 bottom" : "top bottom",
      end: `+=${window.innerHeight}`,
      scrub: true,
      markers: false,
      toggleActions: 'play reverse reset reverse', 
    }
  });
  

  gsap.set(".connect_form", { height: "0px", display: "none" });
  postScrollLogoAnim
      .to(".footer", {
        position: "sticky",
        bottom: 0,
        duration: 1,
      })    
.to(".footer-wrapper", {
        height: "90vh",
        ease: "none",
        duration: 2,
      })

      .to(".connect_logo", {
          top: isMobile ? "25%" : "18%",
          ease: "none",
          duration: 1.5
        }, "<+1")
        .to(".connect_logo", {
          scale: 0.3,
          ease: "none",
          duration: 0.9
        })
    .to(".connect_logo", {
    opacity: 0,
    duration: 0.1,
    ease: "none",
    onComplete: triggerLogoBurst
  })
  .to(".connect_form-wrapper", { opacity: 1, marginTop: "20vh", ease: "power2.out", duration: 0.4 }, "<")
.to(".connect_form", { height: "max-content", display: "flex", ease: "power2.out", paddingBottom: "0px", duration: 0.4, delay: 0.1 }, "<")
.to(".footer-wrapper", {
    height: "68vh",
    ease: "power2.out",
    duration: 0.5
  }, "<")


  // GSDevTools.create({animation: postScrollLogoAnim});


let split = SplitText.create(".connect_content-after", {
    type: "chars",
    charsClass: "letter"
});

split.chars.forEach((char) => {
    const randomY = (Math.floor(7 * Math.random()) + 10) * (Math.random() < 0.5 ? -1 : 1) * 10;
    const randomRot = (Math.floor(11 * Math.random()) + 10) * (Math.random() < 0.5 ? -1 : 1);
  
    gsap.set(char, {
      yPercent: randomY,
      rotation: randomRot
    });
  
    gsap.fromTo(
      char,
      {
        yPercent: randomY,
        rotation: randomRot
      },
      {
        yPercent: 0,
        rotation: 0,
        ease: "elastic.out(1.2, 1)",
        scrollTrigger: {
          trigger: char,
          containerAnimation: scrollText,
          start: "left 80%",
          end: "left 0%",
          scrub: true,
          markers: false
        }
      }
    );
  });
  



let hasBurstRun = false; // flag to prevent re-running
function triggerLogoBurst() {
  if (hasBurstRun) return;
  hasBurstRun = true;

  const explotionAnimation = document.getElementById("explotionAnimation");
  explotionAnimation.style.display = "block";

  const svgTemplate = `
    <svg class="logo-burst" width="176" height="176" viewBox="0 0 176 176" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M49.8667 159.984C20.7849 152.819 12.4596 133.006 12.4596 87.9857C12.4596 42.9651 20.8132 23.1526 49.8667 15.987V0H0V176H49.8667V160.013V159.984Z" fill="#C4B5F2"/>
      <path d="M126.134 0V15.9896C155.216 23.1564 163.541 42.9721 163.541 88C163.541 133.028 155.216 152.844 126.134 160.01V176H176V0H126.134Z" fill="#C4B5F2"/>
    </svg>`;

  const bg = document.getElementById("explotionBackground");
  let logos = [];
  

  for (let i = 0; i < 80; i++) {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = svgTemplate;
    const logo = wrapper.firstElementChild;
    bg.appendChild(logo);
    logos.push(logo);
  }

  gsap.set(logos, {
    scale: "1",
    x: 100,
    y: 100,
    rotation: "random(0, 360)"
  });

  gsap.to(logos, {
    duration: 5,
    physics2D: {
      velocity: "random(200, 1000)",
      angle: "random(250, 290)",
      gravity: 500
    },
  //   onUpdate: function () {
  //     logos.forEach((logo) => {
  //       const bounds = logo.getBoundingClientRect();
  //       console.log(bounds);
  //       const floor = 500;

  //       if (!logo.landed && bounds.top > floor) {
  //         logo.landed = true;

  //         // Stop physics motion, but don't snap
  //         gsap.killTweensOf(logo);

  //         const currentX = logo._gsap.x;
  //         const currentY = logo._gsap.y;

  //         // Ease into the final "landed" position
  //         gsap.to(logo, {
  //           x: currentX,
  //           y: floor - bounds.height,
  //           rotation: "+=10", // small natural rotation
  //           ease: "power2.out",
  //           duration: 0.5
  //         });
  //       }
  //     });
  // },
    onComplete: () => {
      // Clean up logos after burst
      logos.forEach(logo => logo.remove());
      explotionAnimation.style.display = "none";
      hasBurstRun = false; 
      
    }
  });
}
}

ScrollTrigger.create({
  trigger: ".section_footer", // or your actual trigger element
  start: "top bottom",
  end: "bottom bottom",
  onLeaveBack: () => {
    logos.forEach((logo) => logo.remove());
    const explotionAnimation = document.getElementById("explotionAnimation");
    if (explotionAnimation) explotionAnimation.style.display = "none";
    hasBurstRun = false;
  }
});


window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});

window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

