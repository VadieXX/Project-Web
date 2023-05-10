function bar(){
    const bars = document.querySelectorAll('.barprogress');

    bars.forEach(bar => {
      const value = bar.querySelector('[data-value]').dataset.value;
      const progressBar = bar.querySelector(`.${bar.firstElementChild.classList}`);
      progressBar.style.width = `${value}%`;
    });
    
}