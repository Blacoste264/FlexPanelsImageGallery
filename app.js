// Select all of our panels individually 
const panels = document.querySelectorAll('.panel');

// Toggle the class open
function toggleOpen(e) {
this.classList.toggle('open');
}

// Toggle expansion of panel and open-active class
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
}
}

// Using forEach because we selected node list, and added event listener
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
