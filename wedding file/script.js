// Target the first anchor on the page
const anchor = document.getElementById('home');
anchor.addEventListener('click', function(event){
        console.log('Home link clicked');
    })
const anchor1 = document.getElementById('ourStory');
const mainSection2 = document.getElementById('mainSection2');


// Animate scroll down the page
function animateScroll() {
  let scrollAmount = 0;
  const scrollStep = 10; // pixels per frame
  const scrollTarget = 500; // total pixels to scroll

  function step() {
    if (scrollAmount < scrollTarget) {
      window.scrollBy(0, scrollStep);
      scrollAmount += scrollStep;
      requestAnimationFrame(step);
    }
  }
  step();
}

// Example: scroll when page loads
window.onload = animateScroll;

animateBody();

