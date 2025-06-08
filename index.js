



//hero
const heroGrid = document.getElementById("hero-grid");
  const specialIndexes = [23, 145, 302, 394, 513];
  const texts = ["Hi this is something", "B2B MARKETING DESIGN", "Dev", "SVG", "Fun"];

  for (let i = 0; i < 30 * 18; i++) {
    const wrapper = document.createElement("div");
wrapper.classList.add("hero-svg-wrapper");
    const iconWrapper = document.createElement("div");
    iconWrapper.classList.add("hero-svg-icon");

    const isSpecial = specialIndexes.includes(i);
    if (isSpecial) iconWrapper.classList.add("special");

    iconWrapper.innerHTML = `
      <svg viewBox="0 0 10 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.35 29.9971C3.89716 28.6535 2.33617 24.9387 2.33617 16.4973C2.33617 8.05596 3.90247 4.34112 9.35 2.99757V0H0V33H9.35V30.0024V29.9971Z" fill="#140826"/>
      </svg>
      ${isSpecial ? `<span class="expander">${texts[specialIndexes.indexOf(i)]}</span>` : ''}
      <svg viewBox="0 0 10 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.648438 0V2.99805C6.10128 4.34182 7.66227 8.05727 7.66227 16.5C7.66227 24.9427 6.10128 28.6582 0.648438 30.0019V33H9.99844V0H0.648438Z" fill="#140826"/>
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
    color: "#FFFCF5"
  });

  if (!isFirst) {
    gsap.set(li, {
      opacity: 0.2,
		x: -50
    });
	  
	  const time = (index - 1) * staggerDelay;

    // Animate in
    tlHows.to(li, {
      opacity: 1,
		color: color,
		x: 0
    }, time); // simulate stagger
	  
	  tlHows.to(heading, {
      color: color
    }, time);
  }

  // Animate out (skip last one)
  if (!isLast) {
    tlHows.to(li, {
      opacity: 0.2,
		 color: "#FFFCF5",
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
  
  
/*document.addEventListener("DOMContentLoaded", () => {
  const allTexts = document.querySelectorAll(".text-move");

  allTexts.forEach((el, index) => {
    const isFirst = index === 0;
    const isLast = index === allTexts.length - 1;
    const color = getComputedStyle(el).getPropertyValue('--target-color') || '#ffffff';

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: el,
    start: "top 20%",
    end: "+=400px", // total scroll distance for the whole timeline
    scrub: true,
    markers: false,
    invalidateOnRefresh:true,
  }
});

if (!isFirst) {
  tl.fromTo(el, {
    x: -100,
    opacity: 0.5,
    color: '#ffffff'
  }, {
    x: 0,
    opacity: 1,
    color: color,
  });
}

// Second half: animate out
if (!isLast) {
  tl.to(el, {
    x: -100,
    opacity: 0.5,
    color: '#ffffff',
  });
}


    ScrollTrigger.create({
      trigger: el,
      start: "top 20%",
      end: "+=400px",
      scrub: 0.5,
      onUpdate: (self) => {
        if (self.progress >= 0 && self.progress <= 1) {
          const fillColor = gsap.utils.interpolate("white", color, self.progress * 2);
          document.querySelectorAll('.icon_how-we-do svg path').forEach(path => {
            path.setAttribute('fill', fillColor);
          });
        }
      }
    });
  });
});*/


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

