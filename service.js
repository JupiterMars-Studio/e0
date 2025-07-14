
    const wrapper = document.querySelector(".tags-wrapper");
    const items = Array.from(wrapper.querySelectorAll(".tag-item"));
  
    // Sort items alphabetically
    items.sort((a, b) => {
      const textA = a.querySelector(".tag-item-text").textContent.trim().toLowerCase();
      const textB = b.querySelector(".tag-item-text").textContent.trim().toLowerCase();
      return textA.localeCompare(textB);
    });
  
    // Create tag rows wrapper
    const tagRowsWrapper = document.createElement("div");
    tagRowsWrapper.classList.add("tag-rows-wrapper");
  
    const desiredItemsPerRow = 5;
    const maxRows = 3;
    const numRows = Math.min(Math.ceil(items.length / desiredItemsPerRow), maxRows);
    const chunkSize = Math.ceil(items.length / numRows);
  
    for (let i = 0; i < numRows; i++) {
      const chunk = items.slice(i * chunkSize, (i + 1) * chunkSize);
  
      const row = document.createElement("div");
      row.classList.add("tag-row");
  
      const track = document.createElement("div");
      track.classList.add("tag-row-track");
  
      const baseInner = document.createElement("div");
      baseInner.classList.add("tag-row-inner");
  
      chunk.forEach(item => {
        baseInner.appendChild(item.cloneNode(true));
      });
  
      // Temporarily append to measure width
      track.appendChild(baseInner);
      document.body.appendChild(track);
      const baseWidth = baseInner.offsetWidth;
      document.body.removeChild(track);
  

      const minTotalWidth = window.innerWidth * 2;
      const copiesNeeded = Math.ceil(minTotalWidth / baseWidth);
  
      for (let j = 0; j < copiesNeeded; j++) {
        const clone = baseInner.cloneNode(true);
        track.appendChild(clone);
      }
  
      row.appendChild(track);
      tagRowsWrapper.appendChild(row);
    }
  
    wrapper.replaceWith(tagRowsWrapper);
  
    window.addEventListener("DOMContentLoaded", () => {

    // Animate each row
    document.querySelectorAll(".tag-row-track").forEach((track, trackIndex) => {
        const inners = track.querySelectorAll(".tag-row-inner");
      
        inners.forEach((inner, index) => {
          if (index > 2) return;
      
          let baseDirection = trackIndex === 1 ? 1 : -1;
          let direction = baseDirection;
          let distance = 500;
          let xPercent = 0;
      

          gsap.to(track, {
            x: `${distance * baseDirection}px`,
            scrollTrigger: {
              trigger: track,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              markers: false,
              onUpdate: (self) => {
                direction = self.direction * baseDirection;
              },
            }
          });
      
          const animate = () => {
            if (xPercent <= -100) {
              xPercent = 0;
            } else if (xPercent > 0) {
              xPercent = -100;
            }
      
            gsap.set(inner, { xPercent });
            xPercent += 0.25 * direction;
      
            requestAnimationFrame(animate);
          };
      
          animate();
        });
      });
      
      

  });