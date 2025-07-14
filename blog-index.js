  document.addEventListener('DOMContentLoaded', function () {

    const contentDiv = document.getElementById('blog-content');
    const navContainer = document.getElementById('content-heading-list');
    // Create the SVG element once
    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("width", "22");
    icon.setAttribute("height", "22");
    icon.setAttribute("viewBox", "0 0 22 22");
    icon.innerHTML = `
      <path d="M6.28567 19.9998C2.62223 19.1031 1.57119 16.6256 1.57119 10.9996C1.57119 5.37353 2.62223 2.89509 6.28567 1.99935V0H0V22H6.28567V20.0006V19.9998Z" fill="#FF4B2C"/>
      <path d="M15.7148 0V1.99935C19.3783 2.89598 20.4293 5.37354 20.4293 10.9996C20.4293 16.6256 19.3783 19.1031 15.7148 19.9998V21.9991H22.0005V0H15.7148Z" fill="#FF4B2C"/>
    `;
    icon.classList.add('active-icon'); // for styling

    // const fixedNav = document.getElementById('fixed-nav');

    // Select all headings from h2 to h6
    const headings = contentDiv.querySelectorAll('h2, h3, h4, h5, h6');

    const ul = document.createElement('ul');

    headings.forEach((heading, index) => {
      // Create a slug (ID) based on the text content of the heading
      const className = heading.textContent.trim().replace(/\s+/g, '-').toLowerCase();

      // Add ID to the heading (so we can link to it)
      heading.id = className;
      // Optionally add the same slug as a CSS class to the heading
      heading.classList.add(className);

      // Create <li> element
      const li = document.createElement('li');

      // Create <a> element
      const a = document.createElement('a');
      // Make the href point to #className
      a.href = `#${className}`;
      // Use the heading tag name (like 'h2') as the class of <a>
      a.classList.add(heading.tagName.toLowerCase());
      // Use the heading text for the link text
      a.innerHTML = heading.innerHTML;

      li.appendChild(a);
      ul.appendChild(li);

      // If you want the first item to have a special class
      if (index === 0) {
        li.classList.add('visible');
      }
    });

    // Append the list to the navigation container
    navContainer.appendChild(ul);

    // Smooth scroll logic
    navContainer.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        // Offset if you have a fixed header
        const headerOffset = document.querySelector('header') ? document.querySelector('header').offsetHeight : 0;


        const elementPosition = targetElement.getBoundingClientRect().top;

        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      });
    });

window.addEventListener('scroll', function () {
  const headerOffset = document.querySelector('header')?.offsetHeight || 0;
  const triggerLine = headerOffset + 10;
  let current = '';

  // Reverse loop to find the last heading above trigger line
  for (let i = headings.length - 1; i >= 0; i--) {
    const rect = headings[i].getBoundingClientRect();
    if (rect.top <= triggerLine) {
      current = headings[i].id;
      break;
    }
  }

  const listItems = document.querySelectorAll('#fixed-nav ul li');
listItems[0].insertBefore(icon, listItems[0].firstChild);
window.activeIcon = icon;
  // 👇 NEW: Make first item active if no heading has crossed the top yet
  if (!current && headings.length > 0) {
    current = headings[0].id;
  }

  listItems.forEach((li) => {
    const href = li.querySelector('a')?.getAttribute('href');
    
    if (href === `#${current}`) {
      li.classList.add('active');

      // Move the icon if needed
      if (!li.querySelector('svg') && window.activeIcon) {
        if (window.activeIcon.parentElement) {
          window.activeIcon.parentElement.removeChild(window.activeIcon);
        }
        li.insertBefore(window.activeIcon, li.firstChild);
      }
    } else {
      li.classList.remove('active');
    }
  });
});




  });



