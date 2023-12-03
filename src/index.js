const photoEl = document.querySelectorAll('.photo-js');
// const titleArr = document.querySelectorAll('.title-wrraper');
const elSlider = document.querySelectorAll('.slider-item-js');
const arr = document.querySelectorAll('.js-container');
const slider = document.querySelector('.slider');
slider.addEventListener('click', handleClick);
console.log(arr);
let prev = 0;
function handleClick(evt) {
  if (!evt.target.classList.contains('slider-item-js')) {
    return;
  }

  elSlider.forEach((el, i) => {
    // titleArr[i].classList.remove('active');



    photoEl[i].classList.remove('prev');

    photoEl[i].classList.remove('next');

    photoEl[i].classList.remove('activenext');
    photoEl[i].classList.remove('active');
    el.classList.remove('active');
    arr[i].style.display = 'none';
  });


  arr[evt.target.id - 1].style.display = 'block';

  if (evt.target.id < prev && prev !== 0) {
    console.log('object');
 
    photoEl[prev - 1].classList.add('next');
    photoEl[evt.target.id - 1].classList.add('activenext');
  } else {
    photoEl[evt.target.id - 1].classList.add('active');
    if (prev === 0) {
      photoEl[0].classList.add('prev');
    } else {
      photoEl[prev - 1].classList.add('prev');
    }
  }
  evt.target.classList.add('active');
// titleArr[evt.target.id - 1].classList.add('active')
  prev = evt.target.id;
}
