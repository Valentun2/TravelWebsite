const g = document.querySelectorAll('.j');
const elBackground = document.querySelector('.background');
const elSlider = document.querySelectorAll('.slider-item-js');
const arr = document.querySelectorAll('.js-container');
const slider = document.querySelector('.slider');
slider.addEventListener('click', handleClick);

let prev = 0;
function handleClick(evt) {
  if (!evt.target.classList.contains('slider-item-js')) {
    return;
  }

  elSlider.forEach((el, i) => {
    g[i].classList.remove('prev');

    g[i].classList.remove('next');

    g[i].classList.remove('activenext');
    g[i].classList.remove('active');
    el.classList.remove('active');
    arr[i].style.display = 'none';
  });



  if (evt.target.id < prev && prev !== 0) {
    console.log('object');
 
    g[prev - 1].classList.add('next');
    g[evt.target.id - 1].classList.add('activenext');
  } else {
    g[evt.target.id - 1].classList.add('active');
    if (prev === 0) {
      g[0].classList.add('prev');
    } else {
      g[prev - 1].classList.add('prev');
    }
  }
  evt.target.classList.add('active');

  arr[evt.target.id - 1].style.display = 'block';
  prev = evt.target.id;
}
