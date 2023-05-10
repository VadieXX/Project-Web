function bar(){
    const bars = document.querySelectorAll('.barprogress');

    bars.forEach(bar => {
      const value = bar.querySelector('[data-value]').dataset.value;
      const progressBar = bar.querySelector(`.${bar.firstElementChild.classList}`);
      progressBar.style.width = `${value}%`;
    });
    
}
function animateMeter(meterId, placeId, endValue, duration) {
  var meterElement = document.getElementById(meterId);
  var placeElement = document.getElementById(placeId);
  var startValue = 0;
  var range = endValue - startValue;
  var increment = endValue > startValue ? 1 : -1;
  var stepTime = Math.abs(Math.floor(duration / range));
  
  var timer = setInterval(function() {
    startValue += increment;
    placeElement.textContent = startValue;
    
    if (startValue == endValue) {
      clearInterval(timer);
    }
  }, stepTime);
}
document.addEventListener('DOMContentLoaded', function() {
  const work1Div = document.querySelector('#work1');

  const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        wykonajSkryptPoZobaczeniuWork1();
        observer.unobserve(work1Div);
      }
    });
  });

  observer.observe(work1Div);

  function wykonajSkryptPoZobaczeniuWork1() {
    animateMeter("meter1", "meterplace1", parseInt(document.getElementById("meter1").getAttribute("data-value")), 2000);
    animateMeter("meter2", "meterplace2", parseInt(document.getElementById("meter2").getAttribute("data-value")), 2000);
    animateMeter("meter3", "meterplace3", parseInt(document.getElementById("meter3").getAttribute("data-value")), 2000);
    animateMeter("meter4", "meterplace4", parseInt(document.getElementById("meter4").getAttribute("data-value")), 2000);
  }
});
