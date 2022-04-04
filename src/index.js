import './styles/index.pcss'

import $ from 'jquery' //Если она не нужна то закоммить====
import 'slick-carousel'
$(document).ready(function () {
  $('.training-rear-drive').slick({
    mobileFirst: true,
    vertical: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    prevArrow:
      "<button class='slick-prev slick-arrow' aria-label='Previous' type='button'><svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M15 19l-7-7 7-7'/></svg></button>",
    nextArrow:
      "<button class='slick-next slick-arrow' aria-label='Next' type='button'><svg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2'><path stroke-linecap='round' stroke-linejoin='round' d='M9 5l7 7-7 7'/></svg></button>",
    responsive: [
      {
        breakpoint: 640,
        settings: {
          vertical: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          vertical: false,
          infinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        },
      },
    ],
  })
})
// =========================================================

// const userStack = {
// 	language: 'JavaScript',
// 	framework: 'Angular',
// }
// const user = {
// 	name: 'Michael',
// 	age: '30',
// 	...userStack
// }

// console.log(user)
// =========================================================
// $('.jquery').html('jquery work!')

// ### #toggle-menu
window.onload = function () {
  let top_menu_info = document.querySelector('#top-menu-info')
  top_menu_info.addEventListener('click', (e) => {
    // if (e.eventPhase === 2) {
    // console.log('menu')
    // console.log(e.target)
    // }
    top_menu_info.classList.toggle('active')
  })

  //   let svg = document.querySelector('#svg')
  //   svg.addEventListener(
  //     'click',
  //     (e) => {
  //       console.log(e.eventPhase + 'svg')
  //       if (e.eventPhase === 2) {
  //         console.log('svg')
  //         console.log(e.target)
  //       }
  //     }
  //   )
}
