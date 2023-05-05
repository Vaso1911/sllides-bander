const upBtn = document.querySelector('.up-button'),
downBtn = document.querySelector('.down-button'),
sidebar = document.querySelector('.sidebar'),
container = document.querySelector('.container'),
mainSlide = document.querySelector('.main-slide'),
slidesCount = mainSlide.querySelectorAll('div').length,
height = container.clientHeight

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () =>{
  changeSlide('up')
})

downBtn.addEventListener('click', () =>{
  changeSlide('down')
})

document.addEventListener('keydown', e => {
if(e.key === 'ArrowUp'){
  changeSlide('up')
}else if (e.key === 'ArrowDown') {
  changeSlide('down')
}
})

document.addEventListener('wheel', e => {
if(e.deltaY === -100){
  changeSlide('up')
}else if (e.deltaY === 100) {
  changeSlide('down')
}
})

function changeSlide(direction) {
if (direction === 'up') {
  activeSlideIndex++
  if(activeSlideIndex === slidesCount) {
    activeSlideIndex = 0
  } 
} else if (direction === 'down') {
  activeSlideIndex--
  if (activeSlideIndex < 0) {
    activeSlideIndex = slidesCount - 1
  }
}


mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}